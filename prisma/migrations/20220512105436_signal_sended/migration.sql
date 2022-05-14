-- AlterTable
ALTER TABLE "Trigger" ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "signal_sended" BOOLEAN NOT NULL DEFAULT false;
