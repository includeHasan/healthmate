/*
  Warnings:

  - You are about to drop the column `clinic_id` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `license_number` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `specialization` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `date_of_birth` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `emergency_contact` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to drop the `Appointment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Clinic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DiagnosticCenter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DiagnosticTest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FamilyMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MedicalRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `document_url` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experience_yrs` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fname` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `license_no` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lname` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_pic` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speciality` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dob` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `other_phone_no` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patient_fname` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patient_lname` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `gender` on the `Patient` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `phone_no` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_type` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Mode" AS ENUM ('in_person', 'video', 'phone');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'booked', 'cancelled', 'completed');

-- CreateEnum
CREATE TYPE "Availability" AS ENUM ('yes', 'no');

-- CreateEnum
CREATE TYPE "Day" AS ENUM ('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');

-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('hospital', 'clinic');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('appointment', 'reminder', 'update', 'referral');

-- CreateEnum
CREATE TYPE "ReviewerType" AS ENUM ('patient', 'doctor');

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_clinic_id_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_family_member_id_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "Clinic" DROP CONSTRAINT "Clinic_user_id_fkey";

-- DropForeignKey
ALTER TABLE "DiagnosticCenter" DROP CONSTRAINT "DiagnosticCenter_user_id_fkey";

-- DropForeignKey
ALTER TABLE "DiagnosticTest" DROP CONSTRAINT "DiagnosticTest_center_id_fkey";

-- DropForeignKey
ALTER TABLE "DiagnosticTest" DROP CONSTRAINT "DiagnosticTest_family_member_id_fkey";

-- DropForeignKey
ALTER TABLE "DiagnosticTest" DROP CONSTRAINT "DiagnosticTest_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_clinic_id_fkey";

-- DropForeignKey
ALTER TABLE "FamilyMember" DROP CONSTRAINT "FamilyMember_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "MedicalRecord" DROP CONSTRAINT "MedicalRecord_clinic_id_fkey";

-- DropForeignKey
ALTER TABLE "MedicalRecord" DROP CONSTRAINT "MedicalRecord_doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "MedicalRecord" DROP CONSTRAINT "MedicalRecord_family_member_id_fkey";

-- DropForeignKey
ALTER TABLE "MedicalRecord" DROP CONSTRAINT "MedicalRecord_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_receiver_id_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_sender_id_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_user_id_fkey";

-- DropIndex
DROP INDEX "Doctor_user_id_key";

-- DropIndex
DROP INDEX "Patient_user_id_key";

-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "Doctor" DROP COLUMN "clinic_id",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
DROP COLUMN "license_number",
DROP COLUMN "specialization",
ADD COLUMN     "document_url" VARCHAR(100) NOT NULL,
ADD COLUMN     "experience_yrs" INTEGER NOT NULL,
ADD COLUMN     "fname" VARCHAR(30) NOT NULL,
ADD COLUMN     "license_no" BIGINT NOT NULL,
ADD COLUMN     "lname" VARCHAR(30) NOT NULL,
ADD COLUMN     "profile_pic" VARCHAR(100) NOT NULL,
ADD COLUMN     "speciality" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "address",
DROP COLUMN "date_of_birth",
DROP COLUMN "emergency_contact",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "city" VARCHAR(30) NOT NULL,
ADD COLUMN     "dob" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "height" INTEGER NOT NULL,
ADD COLUMN     "other_phone_no" BIGINT NOT NULL,
ADD COLUMN     "patient_fname" VARCHAR(30) NOT NULL,
ADD COLUMN     "patient_lname" VARCHAR(30) NOT NULL,
ADD COLUMN     "state" VARCHAR(30) NOT NULL,
ADD COLUMN     "weight" INTEGER NOT NULL,
DROP COLUMN "gender",
ADD COLUMN     "gender" VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "phone_number",
DROP COLUMN "role",
DROP COLUMN "username",
ADD COLUMN     "phone_no" BIGINT NOT NULL,
ADD COLUMN     "user_name" VARCHAR(30) NOT NULL,
ADD COLUMN     "user_type" VARCHAR(30) NOT NULL,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(40);

-- DropTable
DROP TABLE "Appointment";

-- DropTable
DROP TABLE "Clinic";

-- DropTable
DROP TABLE "DiagnosticCenter";

-- DropTable
DROP TABLE "DiagnosticTest";

-- DropTable
DROP TABLE "FamilyMember";

-- DropTable
DROP TABLE "MedicalRecord";

-- DropTable
DROP TABLE "Message";

-- DropTable
DROP TABLE "Notification";

-- DropEnum
DROP TYPE "AppointmentStatus";

-- DropEnum
DROP TYPE "Gender";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "AppointmentSchedule" (
    "appointment_schedule_id" SERIAL NOT NULL,
    "doctor_availability_id" INTEGER NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "appointment_date" TIMESTAMP(3) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "mode" "Mode" NOT NULL,
    "work_location_id" INTEGER NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "AppointmentSchedule_pkey" PRIMARY KEY ("appointment_schedule_id")
);

-- CreateTable
CREATE TABLE "Allergies" (
    "allergies_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "allergy_name" VARCHAR(100) NOT NULL,
    "allergy_description" TEXT NOT NULL,

    CONSTRAINT "Allergies_pkey" PRIMARY KEY ("allergies_id")
);

-- CreateTable
CREATE TABLE "DiagnosticCentre" (
    "diagnostic_centre_id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "city" VARCHAR(30) NOT NULL,
    "state" VARCHAR(30) NOT NULL,
    "contact_no" BIGINT NOT NULL,
    "email" VARCHAR(30) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "DiagnosticCentre_pkey" PRIMARY KEY ("diagnostic_centre_id")
);

-- CreateTable
CREATE TABLE "DoctorWorkLocation" (
    "doctor_work_location_id" SERIAL NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "location_type" "LocationType" NOT NULL,
    "location_name" VARCHAR(30) NOT NULL,
    "city" VARCHAR(30) NOT NULL,
    "state" VARCHAR(30) NOT NULL,

    CONSTRAINT "DoctorWorkLocation_pkey" PRIMARY KEY ("doctor_work_location_id")
);

-- CreateTable
CREATE TABLE "DoctorTimeTable" (
    "doctor_time_table_id" SERIAL NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "doctor_work_location_id" INTEGER NOT NULL,
    "day" "Day" NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoctorTimeTable_pkey" PRIMARY KEY ("doctor_time_table_id")
);

-- CreateTable
CREATE TABLE "DoctorAvailability" (
    "doctor_availability_id" SERIAL NOT NULL,
    "doctor_time_table_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "is_available" "Availability" NOT NULL DEFAULT 'yes',

    CONSTRAINT "DoctorAvailability_pkey" PRIMARY KEY ("doctor_availability_id")
);

-- CreateTable
CREATE TABLE "DoctorReference" (
    "reference_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "referred_to_doctor_id" INTEGER NOT NULL,
    "reference_date_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoctorReference_pkey" PRIMARY KEY ("reference_id")
);

-- CreateTable
CREATE TABLE "Medications" (
    "medications_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "medication_name" VARCHAR(255) NOT NULL,
    "medication_dosage" VARCHAR(255) NOT NULL,
    "medication_frequency" VARCHAR(255) NOT NULL,

    CONSTRAINT "Medications_pkey" PRIMARY KEY ("medications_id")
);

-- CreateTable
CREATE TABLE "Notifications" (
    "notification_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "message" VARCHAR(50) NOT NULL,
    "notification_type" "NotificationType" NOT NULL,
    "read_status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("notification_id")
);

-- CreateTable
CREATE TABLE "PatientHistory" (
    "history_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "appointment_date" TIMESTAMP(3) NOT NULL,
    "chief_complaint" VARCHAR(40) NOT NULL,

    CONSTRAINT "PatientHistory_pkey" PRIMARY KEY ("history_id")
);

-- CreateTable
CREATE TABLE "PaymentTransactions" (
    "transaction_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "payment_amount" DECIMAL(10,2) NOT NULL,
    "payment_method" VARCHAR(50) NOT NULL,

    CONSTRAINT "PaymentTransactions_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "Review" (
    "review_id" SERIAL NOT NULL,
    "appointment_schedule_id" INTEGER NOT NULL,
    "reviewer_type" "ReviewerType" NOT NULL,
    "rating" INTEGER NOT NULL,
    "review_text" VARCHAR(100) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "SurgicalHistory" (
    "surgical_history_id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "surgical_history_type" VARCHAR(255) NOT NULL,
    "surgical_history_description" TEXT NOT NULL,

    CONSTRAINT "SurgicalHistory_pkey" PRIMARY KEY ("surgical_history_id")
);

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
