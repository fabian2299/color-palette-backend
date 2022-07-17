import { Request, Response } from "express";
import { prisma } from "../index";

export const obtenerPalettes = async (req: Request, res: Response) => {
  const palettes = await prisma.palette.findMany({
    include: {
      circles: true,
    },
  });
  return res.status(200).json(palettes);
};

export const nuevoPalette = async (req: Request, res: Response) => {
  const { nameList, circles } = req.body;
  try {
    const palette = await prisma.palette.create({
      data: {
        nameList,
        circles: {
          create: circles,
        },
      },
      include: {
        circles: true,
      },
    });
    return res.status(201).json(palette);
  } catch (error) {
    console.log(error);
  }
};

export const eliminarPalette = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.palette.findFirst({
    where: {
      id: Number(id),
    },
  });
  try {
    await prisma.palette.delete({
      where: {
        id: Number(id),
      },
    });
    return res.status(200).json({
      msg: "palette eliminado",
    });
  } catch (error) {
    console.log(error);
  }
};
