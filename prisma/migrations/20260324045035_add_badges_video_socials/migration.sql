-- AlterTable
ALTER TABLE "User" ADD COLUMN     "backgroundType" TEXT DEFAULT 'image',
ADD COLUMN     "github" TEXT,
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "isBooster" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isOwner" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "kick" TEXT,
ADD COLUMN     "spotify" TEXT,
ADD COLUMN     "twitter" TEXT;
