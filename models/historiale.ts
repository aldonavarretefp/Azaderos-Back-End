import {Schema,model} from 'mongoose';

const historialeSchema = new Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
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

historialeSchema.methods.toJSON = function(){
    //Desestructurando el objeto quitandole lo que no quiero
    // que se vea en el response
    const {__v,...historiale} = this.toObject();
    return historiale
}

export default model('Historiale',historialeSchema);