import {Router,Request,Response} from 'express';
import {body,check} from 'express-validator';
import { existeTelefono } from '../helpers/db-validators';
import validarCampos from '../middlewares/validar-campos';
const router = Router();

import Cliente from '../models/cliente';
import { validarJWT } from '../middlewares/validar-jwt';
const {getClientes,getCliente, postCliente,putCliente, delCliente} = require('../controllers/clientes');

// const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
// const { esRoleValido, existeEmail, existeUsuarioporId } = require('../helpers/db-validators');


router.get('/',[
    //TODO: Primero Validar JWT para poder tener acceso a la base de datos
    // validarJWT
],getClientes);

router.get('/:id', getCliente);

router.post('/',[
    // body('nombre','NOMBRE ES OBLIGATORIO').not().isEmpty(),
    // body('telefono','TELEFONO ES OBLIGATORIO').not().isEmpty(),
    check('telefono').custom(existeTelefono),
    validarCampos
],postCliente);

router.put('/:id',[
    check('id','ID_INVALIDO').isMongoId(),
],putCliente);

router.delete('/:id',[
    check('id','ID_INVALIDO').isMongoId(),
],delCliente);
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