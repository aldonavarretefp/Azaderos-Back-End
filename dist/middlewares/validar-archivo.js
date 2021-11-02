"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validarArchivoSubir = function (req, res, next) {
    // console.log(req.files);
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            msg: 'No hay archivos que subir - validarArchivoSubir'
        });
    }
    next();
};
exports.default = validarArchivoSubir;
//# sourceMappingURL=validar-archivo.js.map