import { prisma } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { id } = await req.json();
    const blogs = await prisma.blog.findMany({
      where: {
        authorId: id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to Get blogs" }, { status: 500 });
  }
}
