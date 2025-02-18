/*
  Warnings:

  - The `chess_score` column on the `AnswerAcademic` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "AnswerAcademic" DROP COLUMN "chess_score",
ADD COLUMN     "chess_score" INTEGER;
