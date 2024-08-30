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

-- CreateEnum
CREATE TYPE "Mode" AS ENUM ('ONLINE', 'OFFLINE', 'HYBRID');

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "user_name" VARCHAR(30) NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "phone_no" TEXT NOT NULL,
    "user_type" VARCHAR(30) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "doctor_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "speciality" VARCHAR(100) NOT NULL,
    "experience_yrs" INTEGER NOT NULL,
    "fname" VARCHAR(30) NOT NULL,
    "lname" VARCHAR(30) NOT NULL,
    "license_no" BIGINT NOT NULL,
    "document_url" VARCHAR(100) NOT NULL,
    "profile_pic" VARCHAR(100) NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("doctor_id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "patient_id" TEXT NOT NULL,
    "patient_fname" VARCHAR(30) NOT NULL,
    "patient_lname" VARCHAR(30) NOT NULL,
    "user_id" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "age" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "gender" VARCHAR(10) NOT NULL,
    "city" VARCHAR(30) NOT NULL,
    "state" VARCHAR(30) NOT NULL,
    "other_phone_no" BIGINT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("patient_id")
);

-- CreateTable
CREATE TABLE "AppointmentSchedule" (
    "appointment_schedule_id" TEXT NOT NULL,
    "doctor_availability_id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "appointment_date" TIMESTAMP(3) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "mode" "Mode" NOT NULL,
    "work_location_id" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "AppointmentSchedule_pkey" PRIMARY KEY ("appointment_schedule_id")
);

-- CreateTable
CREATE TABLE "Allergies" (
    "allergies_id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "allergy_name" VARCHAR(100) NOT NULL,
    "allergy_description" TEXT NOT NULL,

    CONSTRAINT "Allergies_pkey" PRIMARY KEY ("allergies_id")
);

-- CreateTable
CREATE TABLE "DiagnosticCentre" (
    "diagnostic_centre_id" TEXT NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "city" VARCHAR(30) NOT NULL,
    "state" VARCHAR(30) NOT NULL,
    "contact_no" BIGINT NOT NULL,
    "email" VARCHAR(30) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "DiagnosticCentre_pkey" PRIMARY KEY ("diagnostic_centre_id")
);

-- CreateTable
CREATE TABLE "DoctorWorkLocation" (
    "doctor_work_location_id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "location_type" "LocationType" NOT NULL,
    "location_name" VARCHAR(30) NOT NULL,
    "city" VARCHAR(30) NOT NULL,
    "state" VARCHAR(30) NOT NULL,

    CONSTRAINT "DoctorWorkLocation_pkey" PRIMARY KEY ("doctor_work_location_id")
);

-- CreateTable
CREATE TABLE "DoctorTimeTable" (
    "doctor_time_table_id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "doctor_work_location_id" TEXT NOT NULL,
    "day" "Day" NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoctorTimeTable_pkey" PRIMARY KEY ("doctor_time_table_id")
);

-- CreateTable
CREATE TABLE "DoctorAvailability" (
    "doctor_availability_id" TEXT NOT NULL,
    "doctor_time_table_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "is_available" "Availability" NOT NULL DEFAULT 'yes',

    CONSTRAINT "DoctorAvailability_pkey" PRIMARY KEY ("doctor_availability_id")
);

-- CreateTable
CREATE TABLE "DoctorReference" (
    "reference_id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "referred_to_doctor_id" TEXT NOT NULL,
    "reference_date_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DoctorReference_pkey" PRIMARY KEY ("reference_id")
);

-- CreateTable
CREATE TABLE "Medications" (
    "medications_id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "medication_name" VARCHAR(255) NOT NULL,
    "medication_dosage" VARCHAR(255) NOT NULL,
    "medication_frequency" VARCHAR(255) NOT NULL,

    CONSTRAINT "Medications_pkey" PRIMARY KEY ("medications_id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "notification_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "message" VARCHAR(50) NOT NULL,
    "notification_type" "NotificationType" NOT NULL,
    "read_status" BOOLEAN NOT NULL DEFAULT false,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("notification_id")
);

-- CreateTable
CREATE TABLE "PatientHistory" (
    "history_id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "appointment_date" TIMESTAMP(3) NOT NULL,
    "chief_complaint" VARCHAR(40) NOT NULL,

    CONSTRAINT "PatientHistory_pkey" PRIMARY KEY ("history_id")
);

-- CreateTable
CREATE TABLE "PaymentTransactions" (
    "transaction_id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL,
    "payment_amount" DECIMAL(10,2) NOT NULL,
    "payment_method" VARCHAR(50) NOT NULL,

    CONSTRAINT "PaymentTransactions_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "Review" (
    "review_id" TEXT NOT NULL,
    "appointment_schedule_id" TEXT NOT NULL,
    "reviewer_type" "ReviewerType" NOT NULL,
    "rating" TEXT NOT NULL,
    "review_text" VARCHAR(100) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "SurgicalHistory" (
    "surgical_history_id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "surgical_history_type" VARCHAR(255) NOT NULL,
    "surgical_history_description" TEXT NOT NULL,

    CONSTRAINT "SurgicalHistory_pkey" PRIMARY KEY ("surgical_history_id")
);

-- CreateTable
CREATE TABLE "EmbeddedPost" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "embedding" vector(384) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmbeddedPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "embeddedPost" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "embeddedPost_pkey" PRIMARY KEY ("id")
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
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

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
