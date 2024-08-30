"use client";
import { BackButton } from "@/components/BackButton";
import Editor from "@/components/editor/advanced-editor";
import { ImageUploader } from "@/components/ImageUploader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogContent, BlogProps } from "@/types/types";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { JSONContent } from "novel";
import { useEffect, useState } from "react";

const Blog = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [blog, setBlog] = useState<BlogProps>();
  useEffect(() => {
    async function fetchBlog() {
      const responce = await fetch(`/api/blogs/${id}`, {
        next: { revalidate: 3600 },
      });
      if (!responce.ok) {
        throw new Error(
          `Error fetching blog or no blog available with id: ${id}`,
        );
      }
      const data: BlogProps = await responce.json();
      setBlog(data);
    }
    fetchBlog();
  }, []);

  const [value, setValue] = useState<JSONContent>();

  if (!blog) {
    return <div> Error fetching blog or no blog available with id: {id} </div>;
  }

  // const autoGrow = (element: HTMLTextAreaElement) => {
  //   element.style.height = "5px";
  //   element.style.height = `${element.scrollHeight}px`;
  // };

  return (
    <div className="mx-auto mb-8 flex max-w-6xl flex-col space-y-4 px-4 pt-8 sm:px-8">
      <BackButton />
      <div className="mx-auto max-w-3xl">
        <div className="space-y-4">
          <div className="text-xs text-muted-foreground">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
          <div
            aria-placeholder="Untitled"
            className="py-2 text-display-5 font-bold text-foreground ring-0 focus-visible:outline-0 aria-[placeholder]:text-muted-foreground lg:text-4xl"
            contentEditable
          >
            {blog.title}
          </div>
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                {blog.author.name
                  .split(" ")
                  .map((word) => word.charAt(0))
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="">
              <p className="text-sm font-semibold">{blog.author.name}</p>
              <p className="text-sm text-primary">
                @{blog.author.name.split(" ")[0]}
              </p>
            </div>
          </div>
        </div>
        <ImageUploader imageLink={blog.image} />
        <Editor
          editable={true}
          initialValue={blog.content}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default Blog;
