-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accentColor" TEXT DEFAULT 'violet',
ADD COLUMN     "backgroundUrl" TEXT,
ADD COLUMN     "profileLayout" TEXT DEFAULT 'card',
ADD COLUMN     "profileSongTitle" TEXT,
ADD COLUMN     "profileSongUrl" TEXT,
ADD COLUMN     "profileTheme" TEXT DEFAULT 'dark',
ADD COLUMN     "showEmail" BOOLEAN NOT NULL DEFAULT false;
