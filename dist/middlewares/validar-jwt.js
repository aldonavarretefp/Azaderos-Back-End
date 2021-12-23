"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var validarJWT = function (req, res, next) {
    // Verificar si es valido el token
    try {
        var token = req.header('x-token');
        //Verificar si viene el token
        if (!token) {
            return res.status(401).json({
                ok: false,
                mensaje: 'No hay token en la petición'
            });
        }
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                throw err;
            }
            req.body.uid = decoded.uid;
            req.body.nombre = decoded.nombre;
            console.log(req.body);
            next();
        });
    }
    catch (error) {
        return res.status(401).json({
            ok: false,
            mensaje: 'Token no válido',
            error: error
        });
    }
};
exports.validarJWT = validarJWT;
//# sourceMappingURL=validar-jwt.js.map