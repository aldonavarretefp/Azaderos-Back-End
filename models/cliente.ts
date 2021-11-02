import {Schema,model} from 'mongoose';

const clienteSchema = new Schema({
    nombre: {
        type:String,
        required: [true,"Nombre obligatorio"]
    },
    sobrenombre: {
        type:String
    },
    estado: {
        type: Boolean,
        default:true,
    },
    telefono: {
        type:String,
        required: [true,"Telefono obligatorio"]
    },
    direccion: {
        type:String,
    },
    referencias: {
        type:String,
    },
    correo: {
        type: String,
        unique:true,
    },
    img: {
        type: String
    },    
    google: {
        type: Boolean,
        default:false,
    }
    
    
});

clienteSchema.methods.toJSON = function(){
    //Desestructurando el objeto quitandole lo que no quiero
    // que se vea en el response
    const {__v,password,...cliente} = this.toObject();
    return cliente
}

export default model('Cliente',clienteSchema);