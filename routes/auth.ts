const router = require('express').Router();
import { check } from 'express-validator';

import { login } from '../controllers/auth';
import validarCampos from '../middlewares/validar-campos';


router.post('/login',   
[
    check('email','Introduce un correo válido').isEmail(),
    check('password','Introduce contraseña').not().isEmpty(),
    validarCampos
],login);

module.exports = router;

