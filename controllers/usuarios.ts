import {Request, Response} from 'express';
import bcrypt from 'bcrypt';

import Usuario from '../models/usuario';


export const usuariosGet = async (req:Request, res:Response)=> {
    const {limite = 5,desde = 0} = req.query;
    const query = {estado:true};
    if (Number(desde)>=Number(limite)) {
        res.json({msg:"SINTAXIS_INVALIDA"})
        return
    };

    const [usuarios,total] = await Promise.all([
        Usuario.find(query)
                .limit(Number(limite))
                .skip(Number(desde)),
        Usuario.countDocuments(query)
    ]);
    res.json({
        msg: "users:",
        total,
        usuarios
    });
}
export const usuariosPost = async (req: Request, res: Response)=> {
    try{    
        const {nombre,email, password,rol} = req.body;
        const usuario  = new Usuario({nombre,email,password,rol});
        console.log(usuario);
        // //Encriptar password
        const salt = bcrypt.genSaltSync(10);
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();
        return res.status(200).json({
            msg: "Nuevo Usuario:",
            usuario
        });
        
    }catch(e){
        console.log(e);
        res.status(500).json({
            msg: "Error al crear usuario",
        });
    }
}
const usuariosPut = async (req:Request, res: Response)=> {
    const {id} = req.params;
    const {_id,password,google,email,...restoUsuario} = req.body;

    if (password) {
        const salt = bcrypt.genSaltSync(10);
        restoUsuario.password = bcrypt.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id,restoUsuario)
    res.json({
        msg: "updatedUser",
        usuario,
        id
    });
}
const usuariosPatch = (req:Request, res: Response)=> {
    res.json({
        msg: "patch API - Controlador"
    });
}
const usuariosDelete = async (req:Request, res: Response)=> {
    const {id} = req.params;
    const filter = { _id: id,estado:true };
    const update = { estado:false };
    const usuario = await  Usuario.findOneAndUpdate(filter,update);
    if (!usuario){
        res.json({
            msg: "NO SE ENCONTRO NINGUN USUARIO ACTIVO",
        });
        return
    }
    res.json({
        msg: "deletedUser:",
        id,
        usuario
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPatch,
    usuariosPut,
    usuariosDelete
}