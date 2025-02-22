/*
  Warnings:

  - You are about to drop the column `has_submit_answer` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "has_submit_answer",
ADD COLUMN     "academic_done" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "files_done" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "info_done" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "regis_done" BOOLEAN NOT NULL DEFAULT false;
