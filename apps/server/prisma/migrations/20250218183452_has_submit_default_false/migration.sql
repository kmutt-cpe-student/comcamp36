/*
  Warnings:

  - Made the column `has_submit_answer` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "has_submit_answer" SET NOT NULL,
ALTER COLUMN "has_submit_answer" SET DEFAULT false;
