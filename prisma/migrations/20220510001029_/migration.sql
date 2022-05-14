-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Configuration" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "telegram_channel_id" BIGINT,
    "max_triggers" INTEGER NOT NULL DEFAULT 10,

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trigger" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "sequence" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "win_message" TEXT,
    "loss_message" TEXT,
    "user_id" TEXT NOT NULL,
    "win_colors" TEXT NOT NULL,
    "gales" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Trigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Signal" (
    "id" TEXT NOT NULL,
    "trigger_id" TEXT NOT NULL,
    "count_gale" INTEGER NOT NULL,
    "has_won" BOOLEAN NOT NULL,

    CONSTRAINT "Signal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Configuration_user_id_key" ON "Configuration"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Signal_trigger_id_key" ON "Signal"("trigger_id");

-- AddForeignKey
ALTER TABLE "Configuration" ADD CONSTRAINT "Configuration_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signal" ADD CONSTRAINT "Signal_trigger_id_fkey" FOREIGN KEY ("trigger_id") REFERENCES "Trigger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
