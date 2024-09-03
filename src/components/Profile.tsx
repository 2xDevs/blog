import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import cover from "../../public/2x-blog-cover.jpeg";

const Profile = ({ user }: any) => {
  return (
    <section className="relative pt-48" id="profile">
      <Image
        className="absolute top-0 -z-20 h-64 w-full"
        src={cover}
        height={1920}
        width={1080}
        alt="cover-image"
      />
      <div className="relative mx-auto h-full max-w-2xl rounded-2xl bg-foreground p-8 pt-20 text-background shadow-xl shadow-zinc-700">
        <div className="mx-auto max-w-fit space-y-8">
          <div className="absolute -top-16 left-1/2 mx-auto h-36 w-36 max-w-fit -translate-x-1/2 rounded-full shadow-equal-lg shadow-background">
            <Image
              alt="Profile Pic"
              width={1920}
              height={1080}
              className="rounded-full"
              src={user.avatar}
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-display-6 font-bold leading-none lg:text-4xl">
              {user.name}
            </h3>
            <Link
              href={"/"}
              className={cn(
                buttonVariants({ variant: "link" }),
                "mx-auto h-fit w-full p-0 text-lg text-primary",
              )}
            >
              @{user.email}
            </Link>
          </div>
          <div className="flex gap-4">
            <Link className="flex flex-1 justify-center" href={"#"}>
              <Icons.gitHub
                className={cn(
                  buttonVariants({ variant: "link", size: "icon" }),
                  "text-background",
                )}
              />
            </Link>
            <Link className="flex flex-1 justify-center" href={"#"}>
              <Icons.linkedIn
                className={cn(
                  buttonVariants({ variant: "link", size: "icon" }),
                  "text-background",
                )}
              />
            </Link>
          </div>
        </div>
        <p className="mt-8 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae
          ea non corrupti eveniet quibusdam, dolorem pariatur perferendis
          recusandae illum minima aut eligendi neque tenetur est suscipit
          laborum odio consectetur.
        </p>
      </div>
    </section>
  );
};

export { Profile };
