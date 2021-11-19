"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coleccionesPermitidas = exports.existeTelefono = exports.existeHistorialporId = void 0;
var cliente_1 = __importDefault(require("../models/cliente"));
var historiale_1 = __importDefault(require("../models/historiale"));
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
var existeHistorialporId = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var existeHistorial;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, historiale_1.default.findById(id)];
            case 1:
                existeHistorial = _a.sent();
                if (!existeHistorial) {
                    throw new Error("El id no existe " + id);
                }
                return [2 /*return*/];
        }
    });
}); };
exports.existeHistorialporId = existeHistorialporId;
var existeTelefono = function (telefono) { return __awaiter(void 0, void 0, void 0, function () {
    var existeCliente;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cliente_1.default.findOne({ telefono: telefono })];
            case 1:
                existeCliente = _a.sent();
                if (existeCliente) {
                    throw new Error("El tel\u00E9fono " + telefono + " ya existe.");
                }
                return [2 /*return*/];
        }
    });
}); };
exports.existeTelefono = existeTelefono;
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
exports.coleccionesPermitidas = coleccionesPermitidas;
//# sourceMappingURL=db-validators.js.map