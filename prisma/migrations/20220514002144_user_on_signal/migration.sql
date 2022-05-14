-- AlterTable
ALTER TABLE "Signal" ADD COLUMN     "user_id" TEXT;

-- AddForeignKey
ALTER TABLE "Signal" ADD CONSTRAINT "Signal_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
