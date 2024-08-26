import { prisma } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const blogs = await prisma.blog.findMany({
      include: {
        author: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Falied to retrive blogs" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { authorId, title, content, image } = await req.json();
    const newBlog = await prisma.blog.create({
      data: {
        authorId,
        title,
        content,
        image,
      },
    });
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Falied to create blogs" },
      { status: 500 },
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, title, content, image } = await req.json();
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

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
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
