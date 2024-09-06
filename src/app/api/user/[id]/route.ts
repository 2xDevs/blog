import { prisma } from "@/server/db";
import { type BlogContent } from "@/types/types";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = params.id;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        blogs: {
          select: {
            id: true,
            title: true,
            content: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 3,
        },
      },
    });
    if (!user) {
      return NextResponse.json({ error: "User not Found" }, { status: 404 });
    }
    // Get total number of blogs for the user
    const blogCount = await prisma.blog.count({
      where: {
        authorId: id,
      },
    });
    const formattedBlogs = user.blogs.map((blog) => {
      const paragraphs = (blog.content as unknown as BlogContent).content
        .filter((item) => item.type === "paragraph")
        .slice(0, 5)
        .map((paragraph) =>
          paragraph.content.map((contentItem) => contentItem.text).join(" "),
        )
        .join("\n\n");

      return {
        ...blog,
        content: paragraphs,
      };
    });
    return NextResponse.json(
      { ...user, blogs: formattedBlogs, blogCount },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Falied to Get User" }, { status: 500 });
  }
}
