import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PublicProfileView from "@/components/PublicProfileView";

type Props = {
  params: Promise<{ username: string }>;
};

export default async function PublicProfilePage({ params }: Props) {
  const { username } = await params;
  const cleanUsername = username.replace(/^@+/, "");

  const user = await prisma.user.findFirst({
    where: {
      username: {
        equals: cleanUsername,
        mode: "insensitive",
      },
    },
  });

  if (!user) {
    notFound();
  }

  return <PublicProfileView user={user} />;
}