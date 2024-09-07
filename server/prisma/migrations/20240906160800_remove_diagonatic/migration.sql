/*
  Warnings:

  - You are about to drop the column `user_type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `DiagnosticCentre` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userType` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "userType" AS ENUM ('doctor', 'patient', 'admin');

-- DropForeignKey
ALTER TABLE "DiagnosticCentre" DROP CONSTRAINT "DiagnosticCentre_user_id_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "user_type",
ADD COLUMN     "userType" "userType" NOT NULL;

-- DropTable
DROP TABLE "DiagnosticCentre";
