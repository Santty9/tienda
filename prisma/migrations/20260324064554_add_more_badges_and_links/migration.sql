/*
  Warnings:

  - You are about to drop the column `statusText` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "statusText",
ADD COLUMN     "customBadgeColor" TEXT,
ADD COLUMN     "customBadgeText" TEXT,
ADD COLUMN     "customBadgeTextColor" TEXT,
ADD COLUMN     "is10k" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isDev" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isGifter" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isOg" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isStaff" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "roblox" TEXT,
ADD COLUMN     "valorantTracker" TEXT;
