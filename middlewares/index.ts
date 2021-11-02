

import validarCampos from './validar-campos';
// const validarJWT   = require('./validar-jwt');
// const validaRoles  = require('./validar-roles');
import validarArchivoSubir from './validar-archivo';

module.exports = {
    ...validarCampos,
    // ...validarJWT,
    // ...validaRoles,
    ...validarArchivoSubir, 
}