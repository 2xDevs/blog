import { prisma } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = Number(params.id);
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

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = Number(params.id);
    const { title, content, image } = await req.json();
    const updatedBlog = await prisma.blog.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        image,
      },
    });
    return NextResponse.json(updatedBlog, { status: 201 });
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
    const id = Number(params.id);
    await prisma.blog.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ message: "Blog Deleted Sucessfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 },
    );
  }
}
