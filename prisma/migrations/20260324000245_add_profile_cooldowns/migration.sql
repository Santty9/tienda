-- AlterTable
ALTER TABLE "User" ADD COLUMN     "nameChangedAt" TIMESTAMP(3),
ADD COLUMN     "passwordChangedAt" TIMESTAMP(3),
ADD COLUMN     "usernameChangedAt" TIMESTAMP(3);
