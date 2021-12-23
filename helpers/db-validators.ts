import Cliente from '../models/cliente';
import Historial from '../models/historiale';
import Role from '../models/role';
import Usuario from '../models/usuario';

export const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`);
    }
}

export const existeEmail = async( email = '' ) => {

    //validar que el email No exista en la BD
    const existeEmail = await Usuario.findOne({ email, estado: true });
    console.log(existeEmail);
    if (existeEmail ) {
        throw new Error(`El email ${ email } ya está registrado en la BD`);
    }

}

export const existeHistorialporId = async( id:string ) => {

    // Verificar si el correo existe
    const existeHistorial = await Historial.findById(id);
    if ( !existeHistorial ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

export const existeTelefono = async( telefono:string ) => {

    // Verificar si el correo existe
    const existeCliente = await Cliente.findOne({ telefono });
    // Si el telefono es diferente de "Sin_telefono"
    if ( existeCliente && existeCliente.telefono !== "Sin_telefono" ) {
        throw new Error(`El telefono: ${ telefono }, ya está registrado`);
    }
}


/**
 * Categorias
 */
// const existeCategoriaPorId = async( id ) => {

//     // Verificar si el correo existe
//     const existeCategoria = await Categoria.findById(id);
//     if ( !existeCategoria ) {
//         throw new Error(`El id no existe ${ id }`);
//     }
// }

/**
 * Productos
 */
// const existeProductoPorId = async( id ) => {

//     // Verificar si el correo existe
//     const existeProducto = await Producto.findById(id);
//     if ( !existeProducto ) {
//         throw new Error(`El id no existe ${ id }`);
//     }
// }

/**
 * Validar colecciones permitidas
 */
export const coleccionesPermitidas = ( coleccion:string = '', colecciones:string[] = []) => {

    const incluida = colecciones.includes( coleccion );
    if ( !incluida ) {
        throw new Error(`La colección ${ coleccion } no es permitida, ${ colecciones }`);
    }
    return true;
}
