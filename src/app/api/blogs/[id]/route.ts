import { prisma } from "@/server/db";
import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

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
    console.log(error);
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
      (await req.json()) as {
        authorId: string;
        title?: string;
        content?: string;
        image?: string;
      };
    if (!authorId) {
      return NextResponse.json({ error: "Missing credentials" });
    }
    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        title,
        content,
        image,
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
    revalidatePath(`/blog/${id}`);
    revalidatePath(`/blog/${id}/edit`);
    revalidateTag("blogs");
    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    console.log(error);
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
    const { authorId }: { authorId: string } = (await req.json()) as {
      authorId: string;
    };
    if (!authorId) {
      return NextResponse.json({ error: "Missing credentials" });
    }
    await prisma.blog.delete({
      where: { id, authorId },
    });
    revalidatePath(`/blog/${id}`);
    revalidatePath(`/blog/${id}/edit`);
    revalidateTag("blogs");

    return NextResponse.json(
      { message: "Blog Deleted Successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 },
    );
  }
}
