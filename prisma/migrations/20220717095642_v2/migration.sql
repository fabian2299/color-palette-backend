/*
  Warnings:

  - The `paletteId` column on the `Circle` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Palette` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Palette` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Circle" DROP CONSTRAINT "Circle_paletteId_fkey";

-- AlterTable
ALTER TABLE "Circle" DROP COLUMN "paletteId",
ADD COLUMN     "paletteId" INTEGER;

-- AlterTable
ALTER TABLE "Palette" DROP CONSTRAINT "Palette_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Palette_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Circle" ADD CONSTRAINT "Circle_paletteId_fkey" FOREIGN KEY ("paletteId") REFERENCES "Palette"("id") ON DELETE SET NULL ON UPDATE CASCADE;
