import {Router,Request,Response} from 'express';
import {body,check} from 'express-validator';
const router = Router();

import { usuariosGet, usuariosPost } from '../controllers/usuarios';
import validarCampos from '../middlewares/validar-campos';
import { esRoleValido, existeEmail } from '../helpers/db-validators';
//Obtener usuarios
router.get('/', usuariosGet);

//Actualizar nuevo usuario
// router.put('/:id',[
//     check('id','ID_INVALIDO').isMongoId(),
//     check('id').custom(existeUsuarioporId),
//     check('rol').custom(esRoleValido),
//     validarCampos
// ],usuariosPut)


//Crear nuevo usuario
router.post('/',[
    body("nombre","NOMBRE ES OBLIGATORIO").not().isEmpty(),
    body("email","CORREO_INVALIDO").isEmail(),
    body("email").custom(existeEmail),
    body("password","CONTRASENIA MAYOR A 5 CARACTERES").isLength({min:5})
    .matches(/\d/).withMessage("DEBE CONTENER UN NUMERO"),
    body('rol').custom(esRoleValido),
    validarCampos
],usuariosPost);


// //Borrar usuario
// router.delete('/:id',[
//     check('id','ID_INVALIDO').isMongoId(),
//     check('id').custom(existeUsuarioporId),
//     validarCampos
// ], usuariosDelete);

module.exports = router;