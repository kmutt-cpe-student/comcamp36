/*
  Warnings:

  - You are about to drop the column `perfer_food` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "perfer_food",
ADD COLUMN     "prefer_food" TEXT;
