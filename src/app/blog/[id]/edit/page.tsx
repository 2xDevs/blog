"use client";
import { blog1, defaultValue } from "@/app/default-value";
import Editor from "@/components/editor/advanced-editor";
import imageUploader, { ImageUploader } from "@/components/ImageUploader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { blogsData } from "@/test/data";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { JSONContent } from "novel";
import { useState } from "react";

const Blog = ({ params }: { params: { id: string } }) => {
  const [value, setValue] = useState<JSONContent>(blog1);
  const blog = blogsData.filter((blog) => blog.id.toString() === params.id)[0];

  if (!blog) {
    return (
      <div> Error fetching blog or no blod available with id: {params.id} </div>
    );
  }
  return (
    <div className="mx-auto mb-8 flex max-w-6xl flex-col space-y-4 px-4 pt-8 sm:px-8">
      <Link
        href={"/"}
        className="mb-4 flex w-fit items-center text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
      >
        <ChevronLeftIcon className="-ml-2 h-4 sm:-ml-4" />
        Go Back
      </Link>
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
          <input
            type="text"
            className="bg-none text-display-5 font-semibold leading-normal lg:text-4xl"
            defaultValue={blog.title}
          />
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>
                {blog.author
                  .split(" ")
                  .map((word) => word.charAt(0))
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="">
              <p className="text-sm font-semibold">{blog.author}</p>
              <p className="text-sm text-primary">@{blog.author}</p>
            </div>
          </div>
        </div>
        <ImageUploader imageLink={blog.image} />
        <Editor editable={true} initialValue={value} onChange={setValue} />
      </div>
    </div>
  );
};

export default Blog;
