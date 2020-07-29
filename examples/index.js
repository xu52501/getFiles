(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["getFiles"] = factory();
	else
		root["getFiles"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDrogFile = void 0;
/**
 * 解析文件夹，将选中的文件夹解析成文件数组
 * @param {E} files
 */
var walkFileSystem = function (directory, callback, error) {
    if (directory.kind) {
        directory = directory.webkitGetAsEntry().filesystem.root;
    }
    if (!callback.pending) {
        // 维护一个读取的总数，标识当前读取是否完成
        callback.pending = 0;
    }
    if (!callback.files) {
        // 文件读取过后的数组
        callback.files = [];
    }
    callback.pending++;
    var reader = directory.createReader();
    var relativePath = directory.fullPath.replace(/^\//, '').replace(/(.+?)\/?$/, '$1/');
    // reader.readEntr每次最多读取一百个文件，所以采用递归的方式读取所有的文件
    var fnReadEntries = function (entries) {
        callback.pending--;
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var entry = entries_1[_i];
            if (entry.isFile) {
                callback.pending++;
                entry.file(function (File) {
                    File.path = relativePath + File.name;
                    callback.files.push(File);
                    // resolve(fs);
                    if (--callback.pending === 0) {
                        callback(callback.files);
                    }
                }, error);
            }
            else {
                walkFileSystem(entry, callback, error);
            }
        }
        if (entries.length > 0) {
            callback.pending++;
            reader.readEntries(fnReadEntries);
        }
        if (callback.pending === 0) {
            callback(callback.files);
        }
    };
    reader.readEntries(fnReadEntries, error);
};
var getFolders = function (directory) {
    return new Promise(function (resolve, reject) {
        walkFileSystem(directory, function (files) {
            resolve({
                code: 0,
                files: files,
            });
        }, function (err) {
            reject({
                code: -1,
                err: err,
            });
        });
    });
};
/**
 * 从拖拽的文件或者文件夹提取出文件
 */
exports.default = (function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var fileList, df, _i, _a, ditem, files, nObj, _loop_1, _b, files_1, item, files, _c, files_2, item, error_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!isDrogFile(e)) {
                    return [2 /*return*/, Promise.reject({
                            code: -2,
                            err: '不支持拖拽',
                        })];
                }
                fileList = [];
                df = e.dataTransfer;
                _d.label = 1;
            case 1:
                _d.trys.push([1, 8, , 9]);
                if (!df.items) return [3 /*break*/, 6];
                _i = 0, _a = df.items;
                _d.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 5];
                ditem = _a[_i];
                return [4 /*yield*/, getFolders(ditem)];
            case 3:
                files = (_d.sent()).files;
                nObj = {};
                _loop_1 = function (item) {
                    // 判断有没有/，没有说明是文件，直接添加，有就说明是文件夹
                    if (item.path.indexOf('/') === -1) {
                        fileList.push(item);
                    }
                    else {
                        // 文件夹名字
                        var foldername_1 = item.path.split('/')[0];
                        var index = Object.keys(nObj).findIndex(function (nm) { return nm === foldername_1; });
                        if (index < 0) {
                            // 说明不存在
                            fileList.push([item]);
                            nObj[foldername_1] = fileList.length - 1;
                        }
                        else {
                            // 说明存在
                            fileList[nObj[foldername_1]].push(item);
                        }
                    }
                };
                for (_b = 0, files_1 = files; _b < files_1.length; _b++) {
                    item = files_1[_b];
                    _loop_1(item);
                }
                _d.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 7];
            case 6:
                files = df.files;
                for (_c = 0, files_2 = files; _c < files_2.length; _c++) {
                    item = files_2[_c];
                    // 是文件
                    if (item.type) {
                        fileList.push(item);
                    }
                }
                _d.label = 7;
            case 7: return [2 /*return*/, Promise.resolve({
                    code: 0,
                    fileList: fileList,
                })];
            case 8:
                error_1 = _d.sent();
                return [2 /*return*/, Promise.reject(error_1)];
            case 9: return [2 /*return*/];
        }
    });
}); });
function isDrogFile(e) {
    return e && ((e.dataTransfer && e.dataTransfer.items && e.dataTransfer.items[0] && e.dataTransfer.items[0].kind === 'file')
        || (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0));
}
exports.isDrogFile = isDrogFile;


/***/ })

/******/ });
});
//# sourceMappingURL=sum.umd.js.map