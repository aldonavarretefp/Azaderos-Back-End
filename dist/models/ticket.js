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
var ticketSchema = new mongoose_1.Schema({
    estado: {
        type: Boolean,
        default: true,
    },
    fecha: {
        type: Date
    },
    articulos: {
        type: [{
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'Articulo'
            }],
    },
    total: {
        type: Number,
    }
});
ticketSchema.methods.toJSON = function () {
    //Desestructurando el objeto quitandole lo que no quiero
    // que se vea en el response
    var _a = this.toObject(), __v = _a.__v, ticket = __rest(_a, ["__v"]);
    return ticket;
};
exports.default = (0, mongoose_1.model)('Ticket', ticketSchema);
//# sourceMappingURL=ticket.js.map