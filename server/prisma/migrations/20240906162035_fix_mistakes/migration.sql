/*
  Warnings:

  - The values [ONLINE,OFFLINE,HYBRID] on the enum `Mode` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `age` on the `Patient` table. All the data in the column will be lost.
  - Changed the type of `rating` on the `Review` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Mode_new" AS ENUM ('online', 'offline', 'hybrid');
ALTER TABLE "AppointmentSchedule" ALTER COLUMN "mode" TYPE "Mode_new" USING ("mode"::text::"Mode_new");
ALTER TYPE "Mode" RENAME TO "Mode_old";
ALTER TYPE "Mode_new" RENAME TO "Mode";
DROP TYPE "Mode_old";
COMMIT;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "age";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER NOT NULL;
