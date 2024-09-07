/*
  Warnings:

  - Added the required column `coordinates` to the `DoctorWorkLocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `DoctorWorkLocation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pincode` to the `DoctorWorkLocation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DoctorWorkLocation" ADD COLUMN     "coordinates" VARCHAR(100) NOT NULL,
ADD COLUMN     "country" VARCHAR(30) NOT NULL,
ADD COLUMN     "pincode" VARCHAR(30) NOT NULL;
