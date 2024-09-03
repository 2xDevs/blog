import { Profile } from "@/components/Profile";

const getUser = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/user/${id}`);

  return response.json();
};

const ProfilePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  console.log(id);
  //cm0gs7jqu0000lttwssv6nmx4
  const user = await getUser(id);

  return <Profile user={user} />;
};

export default ProfilePage;
