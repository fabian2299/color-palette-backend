-- CreateTable
CREATE TABLE "Palette" (
    "id" TEXT NOT NULL,
    "nameList" TEXT NOT NULL,

    CONSTRAINT "Palette_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Circle" (
    "id" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "paletteId" TEXT,

    CONSTRAINT "Circle_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Circle" ADD CONSTRAINT "Circle_paletteId_fkey" FOREIGN KEY ("paletteId") REFERENCES "Palette"("id") ON DELETE SET NULL ON UPDATE CASCADE;
