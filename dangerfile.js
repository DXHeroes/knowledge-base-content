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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var danger_1 = require("danger");
var node_fetch_1 = __importDefault(require("node-fetch"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var validate = function () { return __awaiter(void 0, void 0, void 0, function () {
    var validateArticle, changedMds, _i, changedMds_1, mdFile, validationResult, _a, _b, info, _c, _d, warning, _e, _f, failure;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                validateArticle = function (article_path) { return __awaiter(void 0, void 0, void 0, function () {
                    var body, response, json, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                body = fs_1.default.readFileSync(path_1.default.resolve(__dirname, article_path));
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 4, , 5]);
                                return [4 /*yield*/, node_fetch_1.default(process.env.KB_VALIDATION_URL || 'setTheUrl', {
                                        method: 'post',
                                        body: JSON.stringify({
                                            repo_path: article_path,
                                            content: body.toString(),
                                        }),
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'X-DX-Auth': "" + process.env.X_DX_AUTH_HEADER,
                                            Authorization: "" + process.env.AUTH_BASE64,
                                        },
                                    })];
                            case 2:
                                response = _a.sent();
                                return [4 /*yield*/, response.json()];
                            case 3:
                                json = _a.sent();
                                console.log(json);
                                return [2 /*return*/, json];
                            case 4:
                                error_1 = _a.sent();
                                console.log(error_1);
                                throw error_1;
                            case 5: return [2 /*return*/];
                        }
                    });
                }); };
                changedMds = __spreadArrays(danger_1.danger.git.created_files, danger_1.danger.git.modified_files).filter(function (path) { return path.match(/(problems|practices)\/.*\.md/); });
                _i = 0, changedMds_1 = changedMds;
                _g.label = 1;
            case 1:
                if (!(_i < changedMds_1.length)) return [3 /*break*/, 4];
                mdFile = changedMds_1[_i];
                return [4 /*yield*/, validateArticle(mdFile)];
            case 2:
                validationResult = _g.sent();
                for (_a = 0, _b = validationResult.infos; _a < _b.length; _a++) {
                    info = _b[_a];
                    danger_1.message(info, mdFile);
                }
                for (_c = 0, _d = validationResult.warns; _c < _d.length; _c++) {
                    warning = _d[_c];
                    danger_1.warn(warning, mdFile);
                }
                for (_e = 0, _f = validationResult.fails; _e < _f.length; _e++) {
                    failure = _f[_e];
                    danger_1.fail(failure, mdFile);
                }
                if (validationResult.fails.length == 0) {
                    danger_1.message('See preview of the article at [https://preview.developerexperience.io/](https://preview.developerexperience.io/)');
                }
                _g.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}); };
validate()
    .then(function (res) {
    res;
})
    .catch(function (error) {
    console.error(error);
    danger_1.warn('Something is wrong. The validation failed with server error.');
});
