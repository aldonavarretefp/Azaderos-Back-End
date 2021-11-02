"use strict";
var Role = require('../models/role');
var Cliente = require('../models').Cliente;
// const esRoleValido = async(rol = '') => {
//     const existeRol = await Role.findOne({ rol });
//     if ( !existeRol ) {
//         throw new Error(`El rol ${ rol } no está registrado en la BD`);
//     }
// }
// const emailExiste = async( correo = '' ) => {
//     // Verificar si el correo existe
//     const existeEmail = await Usuario.findOne({ correo });
//     if ( existeEmail ) {
//         throw new Error(`El correo: ${ correo }, ya está registrado`);
//     }
// }
// const existeUsuarioPorId = async( id ) => {
//     // Verificar si el correo existe
//     const existeUsuario = await Usuario.findById(id);
//     if ( !existeUsuario ) {
//         throw new Error(`El id no existe ${ id }`);
//     }
// }
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
var coleccionesPermitidas = function (coleccion, colecciones) {
    if (coleccion === void 0) { coleccion = ''; }
    if (colecciones === void 0) { colecciones = []; }
    var incluida = colecciones.includes(coleccion);
    if (!incluida) {
        throw new Error("La colecci\u00F3n " + coleccion + " no es permitida, " + colecciones);
    }
    return true;
};
module.exports = {
    // esRoleValido,
    // emailExiste,
    // existeUsuarioPorId,
    // existeCategoriaPorId,
    // existeProductoPorId,
    coleccionesPermitidas: coleccionesPermitidas
};
//# sourceMappingURL=db-validators.js.map