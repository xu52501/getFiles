/*
 * @Author: lixu
 * @Date: 2019-11-06 18:10:06
 * @Last Modified by: lixu
 * @Last Modified time: 2020-07-29 10:24:11
 * @description: 拖拽选择文件和文件夹
 */
// @ts-nocheck
interface FileItem extends File {
  path: string;
}
/**
 * 解析文件夹，将选中的文件夹解析成文件数组
 * @param {E} files
 */
const walkFileSystem = (directory: any, callback: (files: any) => void, error: () => void) => {
  if (directory.kind) {
    directory = directory.webkitGetAsEntry().filesystem.root;
  }
  if (!(callback as any).pending) {
    // 维护一个读取的总数，标识当前读取是否完成
    (callback as any).pending = 0;
  }
  if (!(callback as any).files) {
    // 文件读取过后的数组
    (callback as any).files = [];
  }
  (callback as any).pending++;
  const reader = directory.createReader();
  const relativePath = directory.fullPath.replace(/^\//, '').replace(/(.+?)\/?$/, '$1/');
  // reader.readEntr每次最多读取一百个文件，所以采用递归的方式读取所有的文件
  const fnReadEntries = (entries: any) => {
    (callback as any).pending--;
    for (const entry of entries) {
      if (entry.isFile) {
        (callback as any).pending++;
        entry.file((File: any) => {
          File.path = relativePath + File.name;
          (callback as any).files.push(File);
          // resolve(fs);
          if (--(callback as any).pending === 0) {
            callback((callback as any).files);
          }
        }, error);
      } else {
        walkFileSystem(entry, callback, error);
      }
    }
    if (entries.length > 0) {
      (callback as any).pending++;
      reader.readEntries(fnReadEntries);
    }
    if ((callback as any).pending === 0) {
      callback((callback as any).files);
    }
  };
  reader.readEntries(fnReadEntries, error);
};

const getFolders = <T>(directory: T): Promise<{ code: number; files: File[]; err: string }> => {
  return new Promise((resolve, reject) => {
    walkFileSystem(directory, (files: FileItem[]) => {
      resolve({
        code: 0,
        files,
      });
    }, (err) => {
      reject({
        code: -1,
        err,
      });
    });
  });
};

/**
 * 从拖拽的文件或者文件夹提取出文件
 */
export default async (e: DragEvent): Promise<any> => {
  if (!isDrogFile(e)) {
    return Promise.reject({
      code: -2,
    });
  }

  const fileList: any[] = [];
  const df = e.dataTransfer as DataTransfer;
  try {
    if (df.items) {
      for (const ditem of df.items) {
        const { files } = await getFolders(ditem);
        // 记录文件夹名字在在数组中对应的index
        const nObj: any = {};
        for (const item of files) {
          // 判断有没有/，没有说明是文件，直接添加，有就说明是文件夹
          if (item.path.indexOf('/') === -1) {
            fileList.push(item);
          } else {
            // 文件夹名字
            const foldername = item.path.split('/')[0];
            const index = Object.keys(nObj).findIndex((nm: string) => nm === foldername);
            if (index < 0) {
              // 说明不存在
              fileList.push([item]);
              nObj[foldername] = fileList.length - 1;
            } else {
              // 说明存在
              fileList[nObj[foldername]].push(item);
            }
          }
        }
      }
    } else {
      const files = df.files;

      for (const item of files) {
        // 是文件
        if (item.type) {
          fileList.push(item);
        }
      }
    }
    return Promise.resolve({
      code: 0,
      fileList,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

export function isDrogFile(e) {
  return e && ((e.dataTransfer && e.dataTransfer.items && e.dataTransfer.items[0] && e.dataTransfer.items[0].kind === 'file')
    || (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0));
}
