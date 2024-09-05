import { EditBlog } from "@/components/EditBlog";
import { env } from "@/env";
import { authOptions } from "@/server/auth";
import { type BlogProps } from "@/types/types";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const getBlog = async (params: { id: string }) => {
  const { id } = params;
  try {
    const responce = await fetch(`${env.NEXT_API_URL}/api/blogs/${id}`);
    if (!responce.ok) {
      throw new Error(`Failed to get Blog: ${id}`);
    }
    const data: BlogProps = (await responce.json()) as BlogProps;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Blog = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  const { id } = params;
  const blog = await getBlog({ id });
  if (!blog || blog.authorId !== session?.user.id) redirect(`/blog/${id}`);

  return <EditBlog InitialBlog={blog} />;
};

export default Blog;
