/*
  Warnings:

  - You are about to drop the column `document_url` on the `Doctor` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "ReviewerType" ADD VALUE 'admin';

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "document_url",
ADD COLUMN     "documentUrl" TEXT[];
