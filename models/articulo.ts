import {Schema,model} from 'mongoose';

const articuloSchema = new Schema({
    categoria:{
        type:Schema.Types.ObjectId,
        ref:'Categoria',
        required:true
    },
    tickets: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Ticket'
        }],
        default: []
        
    },
    estado: {
        type: Boolean,
        default:true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
    
});

articuloSchema.methods.toJSON = function(){
    //Desestructurando el objeto quitandole lo que no quiero
    // que se vea en el response
    const {__v,...articulo} = this.toObject();
    return articulo
}

export default model('Articulo',articuloSchema);