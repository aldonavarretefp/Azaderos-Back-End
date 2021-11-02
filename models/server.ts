import express from 'express';
import cors from 'cors';
import dbConnection from '../db/connection';

import fileUpload from 'express-fileupload';


class Server {
    usuariosPath: string;
    port:string|undefined;
    app:express.Application;
    paths:any;
    //Usualmente las propiedades se declaran en constructor
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.paths = {
            auth:       '/api/auth',
            buscar:     '/api/buscar',
            categorias: '/api/categorias',
            productos:  '/api/productos',
            usuarios:   '/api/usuarios',

            clientes:    '/api/clientes',
            historiales:    '/api/historiales',
            uploads:    '/api/uploads',
        }


        //Conectar a base de datos
        this.conectarBaseDatos();

        //Middlewares   
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();

    }
    async conectarBaseDatos(){
        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'));
        //File upload
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
            
        }));
    }
    routes(){
        //Configurando las rutas
        this.app.use(this.usuariosPath,require("../routes/usuarios"));
        this.app.use(this.paths.clientes,require("../routes/clientes"));
        this.app.use(this.paths.historiales,require("../routes/historiales"));
        this.app.use(this.paths.uploads,require("../routes/uploads"));
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Escuchando en http://localhost:${this.port}`);
        });
    }
}

export default Server;