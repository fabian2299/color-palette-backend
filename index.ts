import { PrismaClient } from "@prisma/client";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import colorPaletteRoutes from "./routes/colorPaletteRoutes";

const PORT = process.env.PORT || 4000;
const app: Express = express();
export const prisma = new PrismaClient();

// Middlewares
app.use(express.json());
dotenv.config();
app.use(cors());

// Routing
app.use("/api", colorPaletteRoutes);

// App listening
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
