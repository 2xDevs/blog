import { blogsData } from "@/test/data";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Blog = ({ params }: { params: { id: string } }) => {
  const blog = blogsData.filter((blog) => blog.id.toString() === params.id)[0];

  if (!blog) {
    return (
      <div> Error fetching blog or no blod available with id: {params.id} </div>
    );
  }

  return (
    <div className="flex h-52 gap-16">
      <div className="w-32 pt-5">
        {new Date(blog.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </div>
      <div className="relative flex h-full justify-center pt-7">
        <div className="h-3 w-3 rounded-full bg-primary"></div>
        <hr className="absolute left-1/2 h-full w-[1px] -translate-x-1/2 border-none bg-primary" />
      </div>
      <div className="h-full w-full">
        <Link href={`/blog/${blog.id}`}>
          <div className="space-y-3 rounded-2xl px-8 py-5 hover:bg-muted">
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
  );
};

export default Blog;
