-- AlterTable
ALTER TABLE "User" ADD COLUMN     "autoplayMusic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "backgroundDim" INTEGER DEFAULT 55,
ADD COLUMN     "cardRadius" INTEGER DEFAULT 32,
ADD COLUMN     "glowStrength" INTEGER DEFAULT 35,
ADD COLUMN     "profileBlur" INTEGER DEFAULT 18,
ADD COLUMN     "profileOpacity" INTEGER DEFAULT 18,
ADD COLUMN     "profileSongCover" TEXT,
ADD COLUMN     "showMusicControls" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "showSocialHeaders" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "statusText" TEXT;
