import jwt from 'jsonwebtoken';

export const generarJWT = (uid:string, name: string):any => {
    return new Promise((resolve, reject) => {
        const payload = {uid, nombre: name};
        jwt.sign( payload, process.env.JWT_SECRET! , {
            expiresIn: '30m'
        }, (error, token) => {
            if (error) {
                reject('Error al generar el token');
            } else {
                resolve(token);
            }
        });
    });
};