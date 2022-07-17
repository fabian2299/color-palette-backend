import { Router } from "express";
import {
  eliminarPalette,
  nuevoPalette,
  obtenerPalettes,
} from "../controllers/colorPaletteController";

const router = Router();

router.route("/").get(obtenerPalettes).post(nuevoPalette);

router.route("/:id").delete(eliminarPalette);

export default router;
