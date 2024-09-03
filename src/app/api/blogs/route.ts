import { prisma } from "@/server/db";
import { type BlogContent } from "@/types/types";
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { type JSONContent } from "novel";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const skip = Number(url.searchParams.get("skip")) || 0;
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        createdAt: true,
        content: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: skip,
      take: 10,
    });
    const formattedBlogs = blogs.map((blog) => {
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
    return NextResponse.json(formattedBlogs, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Falied to retrive blogs" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const {
      authorId,
      title,
      content,
      image,
    }: {
      authorId: string;
      title: string;
      content: JSONContent;
      image: string;
    } = (await req.json()) as {
      authorId: string;
      title: string;
      content: JSONContent;
      image: string;
    };
    const newBlog = await prisma.blog.create({
      data: {
        authorId,
        title,
        content,
        image,
      },
    });
    revalidateTag("blogs");
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Falied to create blogs" },
      { status: 500 },
    );
  }
}
