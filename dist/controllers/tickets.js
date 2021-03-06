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
exports.createTicket = exports.getTickets = void 0;
var ticket_1 = __importDefault(require("../models/ticket"));
var historiale_1 = __importDefault(require("../models/historiale"));
var getTickets = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, limite, _c, desde, options, _d, tickets, total;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = req.query, _b = _a.limite, limite = _b === void 0 ? 5 : _b, _c = _a.desde, desde = _c === void 0 ? 0 : _c;
                if (Number(desde) >= Number(limite)) {
                    res.json({ msg: "SINTAXIS_INVALIDA" });
                    return [2 /*return*/];
                }
                ;
                options = {
                    estado: true
                };
                return [4 /*yield*/, Promise.all([
                        ticket_1.default.find(options).sort({ createdAt: -1 }),
                        ticket_1.default.countDocuments(options)
                    ])];
            case 1:
                _d = _e.sent(), tickets = _d[0], total = _d[1];
                res.status(200).json({
                    total: total,
                    tickets: tickets
                });
                return [2 /*return*/];
        }
    });
}); };
exports.getTickets = getTickets;
var createTicket = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, historial, ticket, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, historiale_1.default.findById({
                        _id: id,
                        estado: true
                    })];
            case 1:
                historial = _a.sent();
                if (!historial) {
                    res.status(404).json({ msg: "HISTORIAL_NO_ENCONTRADO" });
                    return [2 /*return*/];
                }
                ;
                ticket = new ticket_1.default();
                return [4 /*yield*/, ticket.save()];
            case 2:
                _a.sent();
                res.status(200).json(ticket);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                res.status(500).json({ msg: "ERROR_SERVIDOR" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createTicket = createTicket;
//# sourceMappingURL=tickets.js.map