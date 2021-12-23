import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';


export const validarJWT = (req: Request, res: Response, next: NextFunction) => {
    
    // Verificar si es valido el token
    try {   
        const token = req.header('x-token');
        //Verificar si viene el token
        if (!token) {
            return res.status(401).json({
                ok: false,
                mensaje: 'No hay token en la petición'
            });
        }
        jwt.verify(token, process.env.JWT_SECRET!, function (err, decoded: any) {
                if (err) {
                    throw err;
                }
                req.body.uid = decoded.uid;
                req.body.nombre = decoded.nombre;
                console.log(req.body);
                next();
            });
    } catch (error) {
        return res.status(401).json({
            ok: false,
            mensaje: 'Token no válido',
            error
        });
    }

}