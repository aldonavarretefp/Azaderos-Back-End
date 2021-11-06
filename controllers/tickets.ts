import {Request, Response } from 'express';
import Ticket from '../models/ticket';
import Historial from '../models/historiale';
export const getTickets = async (req: Request, res: Response) => {
    const {limite = 5,desde = 0} = req.query;
    if (Number(desde)>=Number(limite)) {
        res.json({msg:"SINTAXIS_INVALIDA"})
        return
    };
    const options ={
        estado: true
    }
    const [tickets,total] = await Promise.all([
        Ticket.find(options).sort({createdAt: -1}),
        Ticket.countDocuments(options)
    ]);

    res.status(200).json({
        total,
        tickets
    });
};

export const createTicket = async (req: Request, res: Response) => {
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
};