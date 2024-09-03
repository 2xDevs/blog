import { prisma } from "@/server/db";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = params.id;
    const blogs = await prisma.blog.findMany({
      where: {
        authorId: id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (blogs.length == 0) {
      return NextResponse.json({ error: "Blogs Not Found" }, { status: 404 });
    }
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to Get blogs" }, { status: 500 });
  }
}
