import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const username = String(body?.username ?? "")
      .trim()
      .replace(/^@+/, "");

    if (!username) {
      return NextResponse.json(
        { error: "Username inválido." },
        { status: 400 }
      );
    }

    const user = await prisma.user.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuario no encontrado." },
        { status: 404 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        profileViews: {
          increment: 1,
        },
      },
      select: {
        profileViews: true,
      },
    });

    return NextResponse.json({
      ok: true,
      views: updatedUser.profileViews,
    });
  } catch (error) {
    console.error("PROFILE VIEW ERROR:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}