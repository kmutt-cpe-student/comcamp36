-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "google_id" TEXT NOT NULL,
    "fullname" TEXT,
    "age" INTEGER,
    "birth" TIMESTAMP(3),
    "gender" TEXT,
    "religion" TEXT,
    "blood_group" TEXT,
    "graduation" TEXT,
    "school" TEXT,
    "course" TEXT,
    "telephone" TEXT,
    "email" TEXT NOT NULL,
    "medical_coverage" TEXT,
    "chronic_disease" TEXT,
    "self_medicine" TEXT,
    "drug_allergic" TEXT,
    "food_allergic" TEXT,
    "perfer_food" TEXT,
    "address" TEXT,
    "home_phone_tel" TEXT,
    "comcamp_attendance" BOOLEAN,
    "shirt_size" TEXT,
    "everyday_attendence" BOOLEAN,
    "has_laptop" BOOLEAN,
    "travel" TEXT,
    "parent_fullname" TEXT,
    "parent_relation" TEXT,
    "parent_phone" TEXT,
    "has_submit_answer" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "face_photo_filepath" TEXT,
    "thai_nationalid_copy_filepath" TEXT,
    "parent_permission_filepath" TEXT,
    "p1_filepath" TEXT,
    "p7_filepath" TEXT,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerRegis" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "answer1" TEXT,
    "answer2" TEXT,
    "answer3" TEXT,
    "answer4" TEXT,
    "answer5" TEXT,
    "answer6_1" TEXT,
    "answer6_2" TEXT,

    CONSTRAINT "AnswerRegis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerAcademic" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "algo_answer" TEXT,
    "chess_notation" TEXT,
    "chess_score" INTEGER,

    CONSTRAINT "AnswerAcademic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_google_id_key" ON "User"("google_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "File_userId_key" ON "File"("userId");

-- CreateIndex
CREATE INDEX "File_userId_idx" ON "File"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AnswerRegis_userId_key" ON "AnswerRegis"("userId");

-- CreateIndex
CREATE INDEX "AnswerRegis_userId_idx" ON "AnswerRegis"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AnswerAcademic_userId_key" ON "AnswerAcademic"("userId");

-- CreateIndex
CREATE INDEX "AnswerAcademic_userId_idx" ON "AnswerAcademic"("userId");

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerRegis" ADD CONSTRAINT "AnswerRegis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerAcademic" ADD CONSTRAINT "AnswerAcademic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
