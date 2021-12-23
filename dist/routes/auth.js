"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router = require('express').Router();
var express_validator_1 = require("express-validator");
var auth_1 = require("../controllers/auth");
var validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
router.post('/login', [
    (0, express_validator_1.check)('email', 'Introduce un correo válido').isEmail(),
    (0, express_validator_1.check)('password', 'Introduce contraseña').not().isEmpty(),
    validar_campos_1.default
], auth_1.login);
module.exports = router;
//# sourceMappingURL=auth.js.map