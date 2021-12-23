"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var usuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio"]
    },
    email: {
        type: String,
        required: [true, "Correo obligatorio"],
    },
    password: {
        type: String,
        required: [true, "Password obligatorio"],
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    }
});
usuarioSchema.methods.toJSON = function () {
    //Desestructurando el objeto quitandole lo que no quiero
    // que se vea en el response
    var _a = this.toObject(), __v = _a.__v, password = _a.password, usuario = __rest(_a, ["__v", "password"]);
    return usuario;
};
exports.default = (0, mongoose_1.model)('Usuario', usuarioSchema);
//# sourceMappingURL=usuario.js.map