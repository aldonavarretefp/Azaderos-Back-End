import {Schema,model} from 'mongoose';

const clienteSchema = new Schema({
    nombre: {
        type:String,
        default: "Sin_nombre",
    },
    telefono: {
        type:String,
        default: "Sin_telefono"
    },
    sobrenombre: {
        type:String
    },
    estado: {
        type: Boolean,
        default:true,
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
    },
    ubicacion:{
        type: String,
    }
    
});

clienteSchema.methods.toJSON = function(){
    //Desestructurando el objeto quitandole lo que no quiero
    // que se vea en el response
    const {__v,password,...cliente} = this.toObject();
    return cliente
}

export default model('Cliente',clienteSchema);