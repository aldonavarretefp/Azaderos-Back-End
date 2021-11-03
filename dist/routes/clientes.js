"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var router = (0, express_1.Router)();
var _a = require('../controllers/clientes'), getClientes = _a.getClientes, getCliente = _a.getCliente, postCliente = _a.postCliente, putCliente = _a.putCliente, delCliente = _a.delCliente;
// const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
// const { esRoleValido, existeEmail, existeUsuarioporId } = require('../helpers/db-validators');
// const { validarCampos } = require('../middlewares/validar-campos');
//Endpoints:
//Obtener info
// router.get('/', usuariosGet);
// //Actualizando data
// router.put('/:id',[
//     check('id','ID_INVALIDO').isMongoId(),
//     check('id').custom(existeUsuarioporId),
//     check('rol').custom(esRoleValido),
//     validarCampos
// ],usuariosPut)
// //Crear nuevos recursos
// router.post('/',[
//     body("correo","CORREO_INVALIDO").isEmail(),
//     body("correo").custom(existeEmail),
//     body("password","CONTRASENIA MAYOR A 6 CARACTERES").isLength({min:5})
//     .matches(/\d/).withMessage("DEBE CONTENER UN NUMERO"),
//     body("nombre","NOMBRE ES OBLIGATORIO").not().isEmpty(),
//     body('rol').custom(esRoleValido),
//     validarCampos
// ],usuariosPost);
// //Borrar, marcandolo nadamas
// router.delete('/:id',[
//     check('id','ID_INVALIDO').isMongoId(),
//     check('id').custom(existeUsuarioporId),
//     validarCampos
// ], usuariosDelete)
// router.patch('/', usuariosPatch);
router.get('/', getClientes);
router.get('/:id', getCliente);
router.post('/', [
    (0, express_validator_1.body)('nombre', 'NOMBRE ES OBLIGATORIO').not().isEmpty(),
    (0, express_validator_1.body)('telefono', 'TELEFONO ES OBLIGATORIO').not().isEmpty(),
    (0, express_validator_1.body)('direccion', 'DIRECCION ES OBLIGATORIO').not().isEmpty(),
], postCliente);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'ID_INVALIDO').isMongoId(),
], putCliente);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'ID_INVALIDO').isMongoId(),
], delCliente);
// //Actualizando data
// router.put('/:id',[
//     check('id','ID_INVALIDO').isMongoId(),
//     check('id').custom(existeUsuarioporId),
//     check('rol').custom(esRoleValido),
//     validarCampos
// ],usuariosPut)
// //Crear nuevos recursos
// router.post('/',[
//     body("correo","CORREO_INVALIDO").isEmail(),
//     body("correo").custom(existeEmail),
//     body("password","CONTRASENIA MAYOR A 6 CARACTERES").isLength({min:5})
//     .matches(/\d/).withMessage("DEBE CONTENER UN NUMERO"),
//     body("nombre","NOMBRE ES OBLIGATORIO").not().isEmpty(),
//     body('rol').custom(esRoleValido),
//     validarCampos
// ],usuariosPost);
// //Borrar, marcandolo nadamas
// router.delete('/:id',[
//     check('id','ID_INVALIDO').isMongoId(),
//     check('id').custom(existeUsuarioporId),
//     validarCampos
// ], usuariosDelete)
// router.patch('/', usuariosPatch);
module.exports = router;
//# sourceMappingURL=clientes.js.map