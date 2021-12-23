import {Request, Response} from 'express';
const bcrypt = require('bcryptjs');

import Usuario from '../models/usuario';
import { generarJWT } from '../helpers/generar-jwt';

export const login = async ( req:Request, res:Response ) => {
    const {email, password} = req.body;
    console.log(email, password);
    try{
        const usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(404).json({msg: 'El usuario/contraseña no existe.'});
        }
        if(!usuario.estado){
            return res.status(404).json({msg: 'El usuario ha sido eliminado de la base de datos.'});
        }

        const validPassword = bcrypt.compareSync(password, usuario.password);
        if(!validPassword){
            return res.status(404).json({msg: 'Contraseña incorrecta.'});
        }

        // Generar el token
        const token = await generarJWT(usuario.id, usuario.nombre);

        return res.status(200).json({
            msg: `Bienvenido ${usuario.nombre}.`,
            token
        });
    }catch(e){
        console.log("error al logearse");
        return res.status(500).json({
            msg: 'Error al logearse.',
            error: e
        });
    }

};

