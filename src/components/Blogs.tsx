"use client";

import { BlogProps } from "@/types/types";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Blogs = ({ blogs }: { blogs: BlogProps[] }) => {
  const router = useRouter();
  return (
    <section id="Blogs" className="w-full sm:px-4 sm:pb-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        {blogs.map((blog, index) => (
          <div key={index} className="flex h-52 gap-4 md:gap-8">
            <div className="hidden w-32 pt-5 lg:block">
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>

            <div className="hidden sm:relative sm:flex sm:h-full sm:justify-center sm:pt-7">
              <hr className="left-1/2 -z-10 hidden h-full w-px -translate-x-1/2 bg-primary sm:absolute sm:block" />
              <div className="hidden h-3 w-3 rounded-full bg-primary sm:block"></div>
            </div>

            <div className="h-full w-full">
              <Link href={`/blog/${blog.id}`}>
                <div className="space-y-3 px-4 py-4 hover:bg-muted sm:rounded-2xl sm:px-6 sm:py-5">
                  <h3 className="text-2xl font-semibold leading-normal">
                    {blog.title}
                  </h3>
                  <p className="line-clamp-2 text-lg text-secondary-foreground">
                    {blog.content}
                  </p>
                  <div className="flex items-center gap-1 text-primary">
                    <p className="text-base leading-normal">Read more</p>
                    <ChevronRightIcon />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
