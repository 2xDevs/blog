import { prisma } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { id } = await req.json();
    const blog = await prisma.blog.findUnique({
      where: {
        id,
      },
      include: {
        author: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
    });
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to Get blog" }, { status: 500 });
  }
}
