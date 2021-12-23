"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var router = (0, express_1.Router)();
var usuarios_1 = require("../controllers/usuarios");
var validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
var db_validators_1 = require("../helpers/db-validators");
//Obtener usuarios
router.get('/', usuarios_1.usuariosGet);
//Actualizar nuevo usuario
// router.put('/:id',[
//     check('id','ID_INVALIDO').isMongoId(),
//     check('id').custom(existeUsuarioporId),
//     check('rol').custom(esRoleValido),
//     validarCampos
// ],usuariosPut)
//Crear nuevo usuario
router.post('/', [
    (0, express_validator_1.body)("nombre", "NOMBRE ES OBLIGATORIO").not().isEmpty(),
    (0, express_validator_1.body)("email", "CORREO_INVALIDO").isEmail(),
    (0, express_validator_1.body)("email").custom(db_validators_1.existeEmail),
    (0, express_validator_1.body)("password", "CONTRASENIA MAYOR A 5 CARACTERES").isLength({ min: 5 })
        .matches(/\d/).withMessage("DEBE CONTENER UN NUMERO"),
    (0, express_validator_1.body)('rol').custom(db_validators_1.esRoleValido),
    validar_campos_1.default
], usuarios_1.usuariosPost);
// //Borrar usuario
// router.delete('/:id',[
//     check('id','ID_INVALIDO').isMongoId(),
//     check('id').custom(existeUsuarioporId),
//     validarCampos
// ], usuariosDelete);
module.exports = router;
//# sourceMappingURL=usuarios.js.map