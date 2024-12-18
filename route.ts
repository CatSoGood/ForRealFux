import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const tickets = await prisma.form.findMany({
      select: {
        id: true,
        workName: true,
        category: true,
        createdAt: true,
        user: {
          select: {
            name: true, // ดึงชื่อของ User
          },
        },
      },
    });

    return NextResponse.json(tickets);
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return NextResponse.json({ error: "Failed to fetch tickets" }, { status: 500 });
  }
}