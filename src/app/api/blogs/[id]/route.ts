import { prisma } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = params.id;
    const blog = await prisma.blog.findUnique({
      where: { id },
      include: {
        author: {
          select: { name: true, avatar: true },
        },
      },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to Get blog" }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = params.id;
    const {
      authorId,
      title,
      content,
      image,
    }: { authorId: string; title?: string; content?: string; image?: string } =
      await req.json();
    if (!authorId) {
      return NextResponse.json({ error: "Missing credentials" });
    }
    const updatedBlog = await prisma.blog.update({
      where: { id, authorId },
      data: {
        title,
        content,
        image,
      },
    });

    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to Update blog" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = params.id;
    const { authorId }: { authorId: string } = await req.json();
    if (!authorId) {
      return NextResponse.json({ error: "Missing credentials" });
    }
    await prisma.blog.delete({
      where: { id, authorId },
    });

    return NextResponse.json(
      { message: "Blog Deleted Successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 },
    );
  }
}
