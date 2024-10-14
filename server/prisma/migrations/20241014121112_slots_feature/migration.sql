-- AlterTable
ALTER TABLE "AppointmentSchedule" ADD COLUMN     "currentAppointments" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "maxAppointments" INTEGER NOT NULL DEFAULT 10;
