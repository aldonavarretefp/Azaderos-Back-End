import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
export default function validarCampos ( req:Request, res:Response, next:NextFunction ){

    const errors = validationResult(req);

    if( !errors.isEmpty() ){
        return res.status(400).json(errors);
    }
    next();
}
<<<<<<< HEAD
export default validarCampos;
=======
>>>>>>> 18d889d9d5b2ce5b1b0fe1c3ab469680a02d32a0
