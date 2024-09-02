import { CreateBlog } from "@/components/CreateBlog";
import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Blog = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) redirect(`/`);

  return <CreateBlog />;
};

export default Blog;
