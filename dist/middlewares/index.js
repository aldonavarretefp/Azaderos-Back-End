"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validar_campos_1 = __importDefault(require("./validar-campos"));
// const validarJWT   = require('./validar-jwt');
// const validaRoles  = require('./validar-roles');
var validar_archivo_1 = __importDefault(require("./validar-archivo"));
module.exports = __assign(__assign({}, validar_campos_1.default), validar_archivo_1.default);
//# sourceMappingURL=index.js.map