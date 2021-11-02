import {Router,Request,Response} from 'express';
import {body,check} from 'express-validator';
const router = Router();
import Cliente from '../models/cliente';
import Historial from '../models/historiale';
import Ticket from '../models/ticket';
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

router.get('/', async (req:Request, res:Response) => {
    const {limite = 5,desde = 0} = req.query;
    const condition = {estado:true};
    if (Number(desde)>=Number(limite)) {
        res.json({msg:"SINTAXIS_INVALIDA"})
        return
    };

    const [historiales,total] = await Promise.all([
        Historial.find(condition)
                .limit(Number(limite))
                .skip(Number(desde))
                .populate('cliente'),
        Historial.countDocuments(condition)
    ]);
    res.status(200).json({
        total,
        historiales
    });
});

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
router.post('/:id', async (req:Request, res:Response) => {
    try{
        const {id} = req.params;
        const historial = await Historial.findById({
            _id:id,
            estado:true
        });
        if (!historial) {
            res.status(404).json({msg:"HISTORIAL_NO_ENCONTRADO"});
            return;
        };
        const ticket = new Ticket();
        await ticket.save();
        
        res.status(200).json(ticket);

    }catch(error){
        console.log(error);
        res.status(500).json({msg:"ERROR_SERVIDOR"});
    }
});
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