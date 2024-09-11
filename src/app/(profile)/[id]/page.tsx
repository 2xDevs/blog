import Profile from "@/components/Profile";
import { env } from "@/env";
import { type UserProps } from "@/types/types";
const getUser = async (id: string) => {
  const response = await fetch(`${env.NEXT_API_URL}/api/user/${id}`);
  const data: UserProps = (await response.json()) as UserProps;
  return data;
};

const ProfilePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const user = await getUser(id);
  return <Profile user={user} />;
};

export default ProfilePage;
