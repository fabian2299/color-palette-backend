"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var colorPaletteController_1 = require("../controllers/colorPaletteController");
var router = (0, express_1.Router)();
router.route("/").get(colorPaletteController_1.obtenerPalettes).post(colorPaletteController_1.nuevoPalette);
router.route("/:id").delete(colorPaletteController_1.eliminarPalette);
exports.default = router;
