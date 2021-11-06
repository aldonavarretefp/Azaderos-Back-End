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
var clienteSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio"]
    },
    telefono: {
        type: String,
        required: [true, "Telefono obligatorio"]
    },
    sobrenombre: {
        type: String
    },
    estado: {
        type: Boolean,
        default: true,
    },
    direccion: {
        type: String,
    },
    referencias: {
        type: String,
    },
    correo: {
        type: String,
        unique: true,
    },
    img: {
        type: String
    },
    google: {
        type: Boolean,
        default: false,
    },
    ubicacion: {
        type: String,
    }
});
clienteSchema.methods.toJSON = function () {
    //Desestructurando el objeto quitandole lo que no quiero
    // que se vea en el response
    var _a = this.toObject(), __v = _a.__v, password = _a.password, cliente = __rest(_a, ["__v", "password"]);
    return cliente;
};
exports.default = (0, mongoose_1.model)('Cliente', clienteSchema);
//# sourceMappingURL=cliente.js.map