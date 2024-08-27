/*
  Warnings:

  - The primary key for the `Allergies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `AppointmentSchedule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DiagnosticCentre` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Doctor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DoctorAvailability` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DoctorReference` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DoctorTimeTable` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DoctorWorkLocation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Medications` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Notifications` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Patient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PatientHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PaymentTransactions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SurgicalHistory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Allergies" DROP CONSTRAINT "Allergies_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "AppointmentSchedule" DROP CONSTRAINT "AppointmentSchedule_doctor_availability_id_fkey";

-- DropForeignKey
ALTER TABLE "AppointmentSchedule" DROP CONSTRAINT "AppointmentSchedule_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "AppointmentSchedule" DROP CONSTRAINT "AppointmentSchedule_work_location_id_fkey";

-- DropForeignKey
ALTER TABLE "DiagnosticCentre" DROP CONSTRAINT "DiagnosticCentre_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_user_id_fkey";

-- DropForeignKey
ALTER TABLE "DoctorAvailability" DROP CONSTRAINT "DoctorAvailability_doctor_time_table_id_fkey";

-- DropForeignKey
ALTER TABLE "DoctorReference" DROP CONSTRAINT "DoctorReference_doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "DoctorReference" DROP CONSTRAINT "DoctorReference_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "DoctorReference" DROP CONSTRAINT "DoctorReference_referred_to_doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "DoctorTimeTable" DROP CONSTRAINT "DoctorTimeTable_doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "DoctorTimeTable" DROP CONSTRAINT "DoctorTimeTable_doctor_work_location_id_fkey";

-- DropForeignKey
ALTER TABLE "DoctorWorkLocation" DROP CONSTRAINT "DoctorWorkLocation_doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "Medications" DROP CONSTRAINT "Medications_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "Notifications" DROP CONSTRAINT "Notifications_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_user_id_fkey";

-- DropForeignKey
ALTER TABLE "PatientHistory" DROP CONSTRAINT "PatientHistory_doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "PatientHistory" DROP CONSTRAINT "PatientHistory_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "PaymentTransactions" DROP CONSTRAINT "PaymentTransactions_doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "PaymentTransactions" DROP CONSTRAINT "PaymentTransactions_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_appointment_schedule_id_fkey";

-- DropForeignKey
ALTER TABLE "SurgicalHistory" DROP CONSTRAINT "SurgicalHistory_patient_id_fkey";

-- AlterTable
ALTER TABLE "Allergies" DROP CONSTRAINT "Allergies_pkey",
ALTER COLUMN "allergies_id" DROP DEFAULT,
ALTER COLUMN "allergies_id" SET DATA TYPE TEXT,
ALTER COLUMN "patient_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Allergies_pkey" PRIMARY KEY ("allergies_id");
DROP SEQUENCE "Allergies_allergies_id_seq";

-- AlterTable
ALTER TABLE "AppointmentSchedule" DROP CONSTRAINT "AppointmentSchedule_pkey",
ALTER COLUMN "appointment_schedule_id" DROP DEFAULT,
ALTER COLUMN "appointment_schedule_id" SET DATA TYPE TEXT,
ALTER COLUMN "doctor_availability_id" SET DATA TYPE TEXT,
ALTER COLUMN "patient_id" SET DATA TYPE TEXT,
ALTER COLUMN "work_location_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "AppointmentSchedule_pkey" PRIMARY KEY ("appointment_schedule_id");
DROP SEQUENCE "AppointmentSchedule_appointment_schedule_id_seq";

-- AlterTable
ALTER TABLE "DiagnosticCentre" DROP CONSTRAINT "DiagnosticCentre_pkey",
ALTER COLUMN "diagnostic_centre_id" DROP DEFAULT,
ALTER COLUMN "diagnostic_centre_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "DiagnosticCentre_pkey" PRIMARY KEY ("diagnostic_centre_id");
DROP SEQUENCE "DiagnosticCentre_diagnostic_centre_id_seq";

-- AlterTable
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_pkey",
ALTER COLUMN "doctor_id" DROP DEFAULT,
ALTER COLUMN "doctor_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Doctor_pkey" PRIMARY KEY ("doctor_id");
DROP SEQUENCE "Doctor_doctor_id_seq";

-- AlterTable
ALTER TABLE "DoctorAvailability" DROP CONSTRAINT "DoctorAvailability_pkey",
ALTER COLUMN "doctor_availability_id" DROP DEFAULT,
ALTER COLUMN "doctor_availability_id" SET DATA TYPE TEXT,
ALTER COLUMN "doctor_time_table_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "DoctorAvailability_pkey" PRIMARY KEY ("doctor_availability_id");
DROP SEQUENCE "DoctorAvailability_doctor_availability_id_seq";

-- AlterTable
ALTER TABLE "DoctorReference" DROP CONSTRAINT "DoctorReference_pkey",
ALTER COLUMN "reference_id" DROP DEFAULT,
ALTER COLUMN "reference_id" SET DATA TYPE TEXT,
ALTER COLUMN "patient_id" SET DATA TYPE TEXT,
ALTER COLUMN "doctor_id" SET DATA TYPE TEXT,
ALTER COLUMN "referred_to_doctor_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "DoctorReference_pkey" PRIMARY KEY ("reference_id");
DROP SEQUENCE "DoctorReference_reference_id_seq";

-- AlterTable
ALTER TABLE "DoctorTimeTable" DROP CONSTRAINT "DoctorTimeTable_pkey",
ALTER COLUMN "doctor_time_table_id" DROP DEFAULT,
ALTER COLUMN "doctor_time_table_id" SET DATA TYPE TEXT,
ALTER COLUMN "doctor_id" SET DATA TYPE TEXT,
ALTER COLUMN "doctor_work_location_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "DoctorTimeTable_pkey" PRIMARY KEY ("doctor_time_table_id");
DROP SEQUENCE "DoctorTimeTable_doctor_time_table_id_seq";

-- AlterTable
ALTER TABLE "DoctorWorkLocation" DROP CONSTRAINT "DoctorWorkLocation_pkey",
ALTER COLUMN "doctor_work_location_id" DROP DEFAULT,
ALTER COLUMN "doctor_work_location_id" SET DATA TYPE TEXT,
ALTER COLUMN "doctor_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "DoctorWorkLocation_pkey" PRIMARY KEY ("doctor_work_location_id");
DROP SEQUENCE "DoctorWorkLocation_doctor_work_location_id_seq";

-- AlterTable
ALTER TABLE "Medications" DROP CONSTRAINT "Medications_pkey",
ALTER COLUMN "medications_id" DROP DEFAULT,
ALTER COLUMN "medications_id" SET DATA TYPE TEXT,
ALTER COLUMN "patient_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Medications_pkey" PRIMARY KEY ("medications_id");
DROP SEQUENCE "Medications_medications_id_seq";

-- AlterTable
ALTER TABLE "Notifications" DROP CONSTRAINT "Notifications_pkey",
ALTER COLUMN "notification_id" DROP DEFAULT,
ALTER COLUMN "notification_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Notifications_pkey" PRIMARY KEY ("notification_id");
DROP SEQUENCE "Notifications_notification_id_seq";

-- AlterTable
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_pkey",
ALTER COLUMN "patient_id" DROP DEFAULT,
ALTER COLUMN "patient_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Patient_pkey" PRIMARY KEY ("patient_id");
DROP SEQUENCE "Patient_patient_id_seq";

-- AlterTable
ALTER TABLE "PatientHistory" DROP CONSTRAINT "PatientHistory_pkey",
ALTER COLUMN "history_id" DROP DEFAULT,
ALTER COLUMN "history_id" SET DATA TYPE TEXT,
ALTER COLUMN "patient_id" SET DATA TYPE TEXT,
ALTER COLUMN "doctor_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "PatientHistory_pkey" PRIMARY KEY ("history_id");
DROP SEQUENCE "PatientHistory_history_id_seq";

-- AlterTable
ALTER TABLE "PaymentTransactions" DROP CONSTRAINT "PaymentTransactions_pkey",
ALTER COLUMN "transaction_id" DROP DEFAULT,
ALTER COLUMN "transaction_id" SET DATA TYPE TEXT,
ALTER COLUMN "patient_id" SET DATA TYPE TEXT,
ALTER COLUMN "doctor_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "PaymentTransactions_pkey" PRIMARY KEY ("transaction_id");
DROP SEQUENCE "PaymentTransactions_transaction_id_seq";

-- AlterTable
ALTER TABLE "Review" DROP CONSTRAINT "Review_pkey",
ALTER COLUMN "review_id" DROP DEFAULT,
ALTER COLUMN "review_id" SET DATA TYPE TEXT,
ALTER COLUMN "appointment_schedule_id" SET DATA TYPE TEXT,
ALTER COLUMN "rating" SET DATA TYPE TEXT,
ADD CONSTRAINT "Review_pkey" PRIMARY KEY ("review_id");
DROP SEQUENCE "Review_review_id_seq";

-- AlterTable
ALTER TABLE "SurgicalHistory" DROP CONSTRAINT "SurgicalHistory_pkey",
ALTER COLUMN "surgical_history_id" DROP DEFAULT,
ALTER COLUMN "surgical_history_id" SET DATA TYPE TEXT,
ALTER COLUMN "patient_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SurgicalHistory_pkey" PRIMARY KEY ("surgical_history_id");
DROP SEQUENCE "SurgicalHistory_surgical_history_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "user_id" DROP DEFAULT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");
DROP SEQUENCE "User_user_id_seq";

-- CreateTable
CREATE TABLE "EmbeddedPost" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "embedding" vector(384) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmbeddedPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentSchedule" ADD CONSTRAINT "AppointmentSchedule_doctor_availability_id_fkey" FOREIGN KEY ("doctor_availability_id") REFERENCES "DoctorAvailability"("doctor_availability_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentSchedule" ADD CONSTRAINT "AppointmentSchedule_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentSchedule" ADD CONSTRAINT "AppointmentSchedule_work_location_id_fkey" FOREIGN KEY ("work_location_id") REFERENCES "DoctorWorkLocation"("doctor_work_location_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allergies" ADD CONSTRAINT "Allergies_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiagnosticCentre" ADD CONSTRAINT "DiagnosticCentre_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorWorkLocation" ADD CONSTRAINT "DoctorWorkLocation_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctor"("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorTimeTable" ADD CONSTRAINT "DoctorTimeTable_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctor"("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorTimeTable" ADD CONSTRAINT "DoctorTimeTable_doctor_work_location_id_fkey" FOREIGN KEY ("doctor_work_location_id") REFERENCES "DoctorWorkLocation"("doctor_work_location_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorAvailability" ADD CONSTRAINT "DoctorAvailability_doctor_time_table_id_fkey" FOREIGN KEY ("doctor_time_table_id") REFERENCES "DoctorTimeTable"("doctor_time_table_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorReference" ADD CONSTRAINT "DoctorReference_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorReference" ADD CONSTRAINT "DoctorReference_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctor"("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorReference" ADD CONSTRAINT "DoctorReference_referred_to_doctor_id_fkey" FOREIGN KEY ("referred_to_doctor_id") REFERENCES "Doctor"("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medications" ADD CONSTRAINT "Medications_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientHistory" ADD CONSTRAINT "PatientHistory_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientHistory" ADD CONSTRAINT "PatientHistory_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctor"("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentTransactions" ADD CONSTRAINT "PaymentTransactions_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentTransactions" ADD CONSTRAINT "PaymentTransactions_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctor"("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_appointment_schedule_id_fkey" FOREIGN KEY ("appointment_schedule_id") REFERENCES "AppointmentSchedule"("appointment_schedule_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SurgicalHistory" ADD CONSTRAINT "SurgicalHistory_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE;
