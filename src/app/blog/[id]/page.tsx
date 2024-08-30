"use client";
import { blog1 } from "@/app/default-value";
import Editor from "@/components/editor/advanced-editor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
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
      <div className="mb-4 flex max-h-fit items-center justify-between">
        <Link
          href={"/"}
          className="flex h-fit w-fit items-center text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
        >
          <ChevronLeftIcon className="-ml-2 h-4 sm:-ml-4" />
          Go Back
        </Link>
        <Link className={buttonVariants()} href={`/blog/${blog.id}/edit`}>
          Edit blog
        </Link>
      </div>

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
          <h1 className="text-display-5 font-semibold leading-normal lg:text-4xl">
            {blog.title}
          </h1>
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
        <div className="not-prose relative my-10 overflow-hidden rounded-2xl first:mt-0 last:mb-0 [a:not(:first-child)>&]:mt-10 [a:not(:last-child)>&]:mb-10 [figure>&]:my-0">
          <img src={blog.image} alt="Blog Image" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-white/10"></div>
        </div>
        <Editor editable={false} initialValue={value} onChange={setValue} />
      </div>
    </div>
  );
};

export default Blog;
