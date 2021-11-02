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
var express_1 = require("express");
var router = (0, express_1.Router)();
var cliente_1 = __importDefault(require("../models/cliente"));
var historiale_1 = __importDefault(require("../models/historiale"));
// const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');
// const { esRoleValido, existeEmail, existeUsuarioporId } = require('../helpers/db-validators');
// const { validarCampos } = require('../middlewares/validar-campos');
//Endpoints:
//Obtener info
// router.get('/', usuariosGet);
// //Actualizando data
// router.put('/:id',[
//     check('id','ID_INVALIDO').isMongoId(),
//     check('id').custom(existeUsuarioporId),
//     check('rol').custom(esRoleValido),
//     validarCampos
// ],usuariosPut)
// //Crear nuevos recursos
// router.post('/',[
//     body("correo","CORREO_INVALIDO").isEmail(),
//     body("correo").custom(existeEmail),
//     body("password","CONTRASENIA MAYOR A 6 CARACTERES").isLength({min:5})
//     .matches(/\d/).withMessage("DEBE CONTENER UN NUMERO"),
//     body("nombre","NOMBRE ES OBLIGATORIO").not().isEmpty(),
//     body('rol').custom(esRoleValido),
//     validarCampos
// ],usuariosPost);
// //Borrar, marcandolo nadamas
// router.delete('/:id',[
//     check('id','ID_INVALIDO').isMongoId(),
//     check('id').custom(existeUsuarioporId),
//     validarCampos
// ], usuariosDelete)
// router.patch('/', usuariosPatch);
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, limite, _c, desde, condition, _d, historiales, total;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = req.query, _b = _a.limite, limite = _b === void 0 ? 5 : _b, _c = _a.desde, desde = _c === void 0 ? 0 : _c;
                condition = { estado: true };
                if (Number(desde) >= Number(limite)) {
                    res.json({ msg: "SINTAXIS_INVALIDA" });
                    return [2 /*return*/];
                }
                ;
                return [4 /*yield*/, Promise.all([
                        historiale_1.default.find(condition)
                            .limit(Number(limite))
                            .skip(Number(desde))
                            .populate('cliente'),
                        historiale_1.default.countDocuments(condition)
                    ])];
            case 1:
                _d = _e.sent(), historiales = _d[0], total = _d[1];
                res.status(200).json({
                    total: total,
                    historiales: historiales
                });
                return [2 /*return*/];
        }
    });
}); });
router.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
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
}); });
router.post('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, cliente, historial, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, cliente_1.default.findById({
                        _id: id,
                        estado: true
                    })];
            case 1:
                cliente = _a.sent();
                if (!cliente) {
                    res.status(404).json({ msg: "CLIENTE_NO_ENCONTRADO" });
                    return [2 /*return*/];
                }
                ;
                historial = new historiale_1.default({
                    cliente: cliente._id,
                });
                return [4 /*yield*/, historial.save()];
            case 2:
                _a.sent();
                res.status(200).json(historial);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.log(error_2);
                res.status(500).json({ msg: "ERROR_SERVIDOR" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// //Actualizando data
// router.put('/:id',[
//     check('id','ID_INVALIDO').isMongoId(),
//     check('id').custom(existeUsuarioporId),
//     check('rol').custom(esRoleValido),
//     validarCampos
// ],usuariosPut)
// //Crear nuevos recursos
// router.post('/',[
//     body("correo","CORREO_INVALIDO").isEmail(),
//     body("correo").custom(existeEmail),
//     body("password","CONTRASENIA MAYOR A 6 CARACTERES").isLength({min:5})
//     .matches(/\d/).withMessage("DEBE CONTENER UN NUMERO"),
//     body("nombre","NOMBRE ES OBLIGATORIO").not().isEmpty(),
//     body('rol').custom(esRoleValido),
//     validarCampos
// ],usuariosPost);
// //Borrar, marcandolo nadamas
// router.delete('/:id',[
//     check('id','ID_INVALIDO').isMongoId(),
//     check('id').custom(existeUsuarioporId),
//     validarCampos
// ], usuariosDelete)
// router.patch('/', usuariosPatch);
module.exports = router;
//# sourceMappingURL=historiales.js.map