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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var usuario_1 = __importDefault(require("../models/usuario"));
var usuariosGet = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, limite, _c, desde, query, _d, usuarios, total;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = req.query, _b = _a.limite, limite = _b === void 0 ? 5 : _b, _c = _a.desde, desde = _c === void 0 ? 0 : _c;
                query = { estado: true };
                if (Number(desde) >= Number(limite)) {
                    res.json({ msg: "SINTAXIS_INVALIDA" });
                    return [2 /*return*/];
                }
                ;
                return [4 /*yield*/, Promise.all([
                        usuario_1.default.find(query)
                            .limit(Number(limite))
                            .skip(Number(desde)),
                        usuario_1.default.countDocuments(query)
                    ])];
            case 1:
                _d = _e.sent(), usuarios = _d[0], total = _d[1];
                res.json({
                    msg: "users:",
                    total: total,
                    usuarios: usuarios
                });
                return [2 /*return*/];
        }
    });
}); };
var usuariosPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nombre, correo, password, rol, google, usuario, salt;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, nombre = _a.nombre, correo = _a.correo, password = _a.password, rol = _a.rol, google = _a.google;
                usuario = new usuario_1.default({ nombre: nombre, correo: correo, password: password, rol: rol, google: google });
                salt = bcrypt_1.default.genSaltSync(10);
                usuario.password = bcrypt_1.default.hashSync(password, salt);
                //Graba en db
                return [4 /*yield*/, usuario.save()];
            case 1:
                //Graba en db
                _b.sent();
                res.json({
                    msg: "createdUser",
                    usuario: usuario
                });
                return [2 /*return*/];
        }
    });
}); };
var usuariosPut = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, _id, password, google, correo, restoUsuario, salt, usuario;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, _id = _a._id, password = _a.password, google = _a.google, correo = _a.correo, restoUsuario = __rest(_a, ["_id", "password", "google", "correo"]);
                if (password) {
                    salt = bcrypt_1.default.genSaltSync(10);
                    restoUsuario.password = bcrypt_1.default.hashSync(password, salt);
                }
                return [4 /*yield*/, usuario_1.default.findByIdAndUpdate(id, restoUsuario)];
            case 1:
                usuario = _b.sent();
                res.json({
                    msg: "updatedUser",
                    usuario: usuario,
                    id: id
                });
                return [2 /*return*/];
        }
    });
}); };
var usuariosPatch = function (req, res) {
    res.json({
        msg: "patch API - Controlador"
    });
};
var usuariosDelete = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, filter, update, usuario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                filter = { _id: id, estado: true };
                update = { estado: false };
                return [4 /*yield*/, usuario_1.default.findOneAndUpdate(filter, update)];
            case 1:
                usuario = _a.sent();
                if (!usuario) {
                    res.json({
                        msg: "NO SE ENCONTRO NINGUN USUARIO ACTIVO",
                    });
                    return [2 /*return*/];
                }
                res.json({
                    msg: "deletedUser:",
                    id: id,
                    usuario: usuario
                });
                return [2 /*return*/];
        }
    });
}); };
module.exports = {
    usuariosGet: usuariosGet,
    usuariosPost: usuariosPost,
    usuariosPatch: usuariosPatch,
    usuariosPut: usuariosPut,
    usuariosDelete: usuariosDelete
};
//# sourceMappingURL=usuarios.js.map