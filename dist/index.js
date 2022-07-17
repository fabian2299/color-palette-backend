"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
var client_1 = require("@prisma/client");
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var colorPaletteRoutes_1 = __importDefault(require("./routes/colorPaletteRoutes"));
var PORT = process.env.PORT || 4000;
var app = (0, express_1.default)();
exports.prisma = new client_1.PrismaClient();
// Middlewares
app.use(express_1.default.json());
dotenv_1.default.config();
app.use((0, cors_1.default)());
// Routing
app.use("/api", colorPaletteRoutes_1.default);
// App listening
app.listen(PORT, function () { return console.log("Running on ".concat(PORT, " \u26A1")); });
