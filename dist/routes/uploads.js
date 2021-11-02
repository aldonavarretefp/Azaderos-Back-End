"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require('express').Router;
var check = require('express-validator').check;
var validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
var validar_archivo_1 = __importDefault(require("../middlewares/validar-archivo"));
var actualizarImagenCloudinary = require('../controllers/uploads').actualizarImagenCloudinary;
// const { cargarArchivo, actualizarImagen, mostrarImagen, actualizarImagenCloudinary } = require('../controllers/uploads');
// const { coleccionesPermitidas } = require('../helpers');
var router = Router();
router.put('/:id', [
    validar_archivo_1.default,
    check('id', 'El id debe de ser de mongo').isMongoId(),
    validar_campos_1.default
], actualizarImagenCloudinary);
// ], actualizarImagen )
// router.get('/:coleccion/:id', [
//     check('id','El id debe de ser de mongo').isMongoId(),
//     check('coleccion').custom( c => coleccionesPermitidas( c, ['usuarios','productos'] ) ),
//     validarCampos
// ], mostrarImagen  )
module.exports = router;
//# sourceMappingURL=uploads.js.map