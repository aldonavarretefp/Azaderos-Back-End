import {Schema,model} from 'mongoose';

const usuarioSchema = new Schema({
    nombre: {
        type:String,
        required: [true,"Nombre obligatorio"]
    },
    email: {
        type: String,
        required: [true,"Correo obligatorio"],
    },
    password: {
        type: String,
        required: [true,"Password obligatorio"],
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    estado: {
        type: Boolean,
        default:true,
    },
    google: {
        type: Boolean,
        default:false,

    }
});

usuarioSchema.methods.toJSON = function(){
    //Desestructurando el objeto quitandole lo que no quiero
    // que se vea en el response
    const {__v,password,...usuario} = this.toObject();
    return usuario
}

export default model('Usuario',usuarioSchema);