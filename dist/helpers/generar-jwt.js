"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var generarJWT = function (uid, name) {
    return new Promise(function (resolve, reject) {
        var payload = { uid: uid, nombre: name };
        jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '30m'
        }, function (error, token) {
            if (error) {
                reject('Error al generar el token');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generarJWT = generarJWT;
//# sourceMappingURL=generar-jwt.js.map