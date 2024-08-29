"use client";
import { defaultValue } from "@/app/default-value";
import Editor from "@/components/editor/advanced-editor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { blogsData } from "@/test/data";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { JSONContent } from "novel";
import { useState } from "react";

const Blog = ({ params }: { params: { id: string } }) => {
  const [value, setValue] = useState<JSONContent>(defaultValue);
  const blog = blogsData.filter((blog) => blog.id.toString() === params.id)[0];

  if (!blog) {
    return (
      <div> Error fetching blog or no blod available with id: {params.id} </div>
    );
  }
  return (
    <div className="mx-auto mb-8 flex max-w-screen-lg flex-col space-y-5 px-4 pt-10 sm:px-8">
      <Link
        href={"/"}
        className="-ml-3 mb-5 flex w-fit items-center text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
      >
        <ChevronLeftIcon className="h-4" />
        Go Back
      </Link>
      <div className="space-y-2">
        <div className="text-xs text-muted-foreground">
          {new Date(blog.createdAt).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <h1 className="text-4xl font-semibold leading-normal">{blog.title}</h1>
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
      <div className="not-prose relative my-12 overflow-hidden rounded-2xl py-5 first:mt-0 last:mb-0 [a:not(:first-child)>&]:mt-12 [a:not(:last-child)>&]:mb-12 [figure>&]:my-0">
        <img src={blog.image} alt="Blog Image" />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-white/10"></div>
      </div>
      <Editor initialValue={value} onChange={setValue} />
    </div>
  );
};

export default Blog;
