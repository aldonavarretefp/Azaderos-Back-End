import {Schema,model} from 'mongoose';

const ticketSchema = new Schema({

    estado:{
        type: Boolean,
        default:true,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    articulos:{
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Articulo'
        }],
        default:[]
    },
    total:{
        type:Number,
    }    
});

ticketSchema.methods.toJSON = function(){
    //Desestructurando el objeto quitandole lo que no quiero
    // que se vea en el response
    const {__v,...ticket} = this.toObject();
    return ticket
}

export default model('Ticket',ticketSchema);