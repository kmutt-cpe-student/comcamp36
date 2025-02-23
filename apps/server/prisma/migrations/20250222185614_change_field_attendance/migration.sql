/*
  Warnings:

  - You are about to drop the column `everyday_attendence` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "everyday_attendence",
ADD COLUMN     "everyday_attendance" BOOLEAN;
