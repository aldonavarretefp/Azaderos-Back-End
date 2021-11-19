"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var cliente_1 = __importDefault(require("../models/cliente"));
var getClientes = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var condition, _a, clientes, total;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                condition = { estado: true };
                return [4 /*yield*/, Promise.all([
                        cliente_1.default.find(condition).sort({ _id: -1 }),
                        cliente_1.default.countDocuments(condition)
                    ])];
            case 1:
                _a = _b.sent(), clientes = _a[0], total = _a[1];
                res.status(200).json({
                    total: total,
                    clientes: clientes
                });
                return [2 /*return*/];
        }
    });
}); };
var getCliente = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, cliente, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, cliente_1.default.findById(id)];
            case 1:
                cliente = _a.sent();
                if (!cliente) {
                    res.status(404).json({ msg: "CLIENTE_NO_ENCONTRADO" });
                    return [2 /*return*/];
                }
                ;
                res.status(200).json(cliente);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                res.status(500).json({ msg: "ERROR_SERVIDOR" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var postCliente = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nombre, sobrenombre, telefono, direccion, referencias, ubicacion, cliente;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, nombre = _a.nombre, sobrenombre = _a.sobrenombre, telefono = _a.telefono, direccion = _a.direccion, referencias = _a.referencias, ubicacion = _a.ubicacion;
                cliente = new cliente_1.default({ nombre: nombre, telefono: telefono, direccion: direccion, referencias: referencias, sobrenombre: sobrenombre, ubicacion: ubicacion });
                // unique index telefono
                return [4 /*yield*/, cliente.createIndex({ telefono: 1 }, { unique: true })];
            case 1:
                // unique index telefono
                _b.sent();
                return [4 /*yield*/, cliente.save()];
            case 2:
                _b.sent();
                res.json({
                    cliente: cliente
                });
                return [2 /*return*/];
        }
    });
}); };
var putCliente = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, _id, google, correo, restoCliente, cliente;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, _id = _a._id, google = _a.google, correo = _a.correo, restoCliente = __rest(_a, ["_id", "google", "correo"]);
                return [4 /*yield*/, cliente_1.default.findByIdAndUpdate(id, __assign(__assign({}, restoCliente), { estado: true }))];
            case 1:
                cliente = _b.sent();
                return [4 /*yield*/, cliente.save()];
            case 2:
                _b.sent();
                res.status(200).json({
                    cliente: cliente
                });
                return [2 /*return*/];
        }
    });
}); };
var delCliente = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, filter, update, cliente;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                filter = { _id: id, estado: true };
                update = { estado: false };
                return [4 /*yield*/, cliente_1.default.findOneAndUpdate(filter, update)];
            case 1:
                cliente = _a.sent();
                if (!cliente) {
                    res.json({
                        msg: "CLIENTE_NO_ENCONTRADO"
                    });
                    return [2 /*return*/];
                }
                res.json({
                    cliente: cliente
                });
                return [2 /*return*/];
        }
    });
}); };
module.exports = {
    getClientes: getClientes,
    getCliente: getCliente,
    postCliente: postCliente,
    putCliente: putCliente,
    delCliente: delCliente
};
//# sourceMappingURL=clientes.js.map