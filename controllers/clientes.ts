import {Request, Response} from 'express';
import Cliente from '../models/cliente';


const getClientes = async (req:Request, res:Response)=> {
    
    const {limite = 100,desde = 0} = req.query;
    const condition = {estado:true};
    if (Number(desde)>=Number(limite)) {
        res.json({msg:"SINTAXIS_INVALIDA"})
        return
    };

    const [clientes,total] = await Promise.all([
        Cliente.find(condition)
                // .limit(Number(limite))
                // .skip(Number(desde)),
                ,
        Cliente.countDocuments(condition)
    ]);
    res.status(200).json({
        total,
        clientes
    });
}
const getCliente = async (req:Request, res:Response) => {
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
}
const postCliente = async (req: Request, res: Response)=> {
    const {nombre,sobrenombre,telefono,direccion,referencias} = req.body;
    const cliente  = new Cliente({nombre,telefono,direccion,referencias,sobrenombre});
    await cliente.save();
    res.json({
        cliente
    });
}

const putCliente = async (req:Request, res: Response)=> {
    const {id} = req.params;
    const {_id,google,correo,...restoCliente} = req.body;

    const cliente = await Cliente.findByIdAndUpdate(id,{
        ...restoCliente,
        estado:true
    });
    await cliente.save();
    res.status(200).json({
        cliente
    });
}

const delCliente = async (req:Request, res: Response)=> {
    const {id} = req.params;
    const filter = { _id: id,estado:true };
    const update = { estado:false };
    const cliente = await  Cliente.findOneAndUpdate(filter,update);
    if (!cliente){
        res.json({
            msg:"CLIENTE_NO_ENCONTRADO"
        });
        return
    }
    res.json({
        cliente
    });
}

module.exports = {
    getClientes,
    getCliente,
    postCliente,
    putCliente,
    delCliente
}