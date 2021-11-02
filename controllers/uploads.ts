import { Response } from 'express';

const cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL);

import Cliente from '../models/cliente';

const actualizarImagenCloudinary = async(req:any, res:Response) => {
    try{
        const { id } = req.params;
        
        
        const cliente = await Cliente.findById(id);
        if ( !cliente ) {
            return res.status(400).json({
                msg: `No existe un cliente con el id ${ id }`
            });
        }

        // Limpiar imágenes previas
        if ( cliente.img ) {
            console.log('si tiene foto');
            const nombreArr     = cliente.img.split('/');
            const nombre        = nombreArr[ nombreArr.length - 1 ];
            const [ public_id ] = nombre.split('.');
            console.log(public_id);

            cloudinary.uploader.destroy("sea-turtle",{
                resource_type: 'video',
                folder: 'samples',

            }, (error:any, result:any) => {
                console.log(result, error);
            });


        }


        const { tempFilePath } = req.files.archivo;
        const {secure_url} = await cloudinary.uploader.upload( tempFilePath ,
            {folder: 'Azaderos/Domicilios'}
            );
        cliente.img = secure_url;
        await cliente.save();


        res.json( cliente );

    } catch (error) {
        res.status(500).json({
            msg: 'Error al actualizar la imagen',
        });
    }

}

export = module.exports = {
    actualizarImagenCloudinary
}