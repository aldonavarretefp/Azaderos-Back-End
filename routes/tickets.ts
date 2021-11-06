import {Router,Request,Response} from 'express';
import {body,check} from 'express-validator';
import { createTicket, getTickets } from '../controllers/tickets';
import { existeHistorialporId } from '../helpers/db-validators';
import validarCampos from '../middlewares/validar-campos';
const router = Router();
import Cliente from '../models/cliente';

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

router.get('/',getTickets);

router.get('/:id', async (req:Request, res:Response) => {
    try{
    const {id} = req.params;
    const cliente = await Cliente.findById(id);
    if (!cliente) {
        res.status(404).json({msg:"CLIENTE_NO_ENCONTRADO"});
        return;
    };
    res.status(200).json(cliente);
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"ERROR_SERVIDOR"});
    }
});
router.post('/:id',[
    check('id','ID_INVALIDO').isMongoId(),
    check('id').custom(existeHistorialporId),
    validarCampos
], createTicket);



module.exports = router;