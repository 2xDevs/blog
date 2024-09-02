import { EditBlog } from "@/components/EditBlog";
import { authOptions } from "@/server/auth";
import { BlogProps } from "@/types/types";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const getBlog = async (params: { id: string }) => {
  const { id } = params;
  try {
    const responce = await fetch(`http://localhost:3000/api/blogs/${id}`);
    if (!responce.ok) {
      throw new Error(`Failed to get Blog: ${id}`);
    }
    return responce.json();
  } catch (error) {
    return new Error(`Failed to get Blog: ${id}`);
  }
};

const Blog = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  const { id } = params;
  const blog: BlogProps = await getBlog({ id });
  if (!blog || blog.authorId !== session?.user.id) redirect(`/blog/${blog.id}`);

  return <EditBlog InitialBlog={blog} />;
};

export default Blog;
