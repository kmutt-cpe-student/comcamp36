-- CreateTable
CREATE TABLE "Session" (
    "sid" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expire" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("sid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_user_id_key" ON "Session"("user_id");

-- CreateIndex
CREATE INDEX "IDX_session_expire" ON "Session"("expire");
