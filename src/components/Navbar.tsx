"use client";

import { Icons } from "@/components/Icons";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import { LogOutIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center overflow-hidden">
        <div className="flex w-[108rem] flex-none justify-end">
          <picture>
            <source
              srcSet="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
              type="image/avif"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
              alt=""
              className="-z-50 w-[71.75rem] max-w-none flex-none dark:hidden"
              decoding="async"
            />
          </picture>
          <picture>
            <source
              srcSet="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
              type="image/avif"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
              alt=""
              className="hidden w-[90rem] max-w-none flex-none dark:block"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <header
        className="sticky left-0 right-0 top-0 z-50 border-b py-4 backdrop-blur-md"
        id="Navbar"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <Link href="/">
            <div className="flex gap-2">
              <Icons.logo className="h-10 w-10 bg-black" />
            </div>
          </Link>
          <nav className="flex h-fit items-center gap-4">
            {session?.user.email && (
              <>
                <Link
                  href={"/blog/new"}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "border-primary px-3 hover:bg-primary",
                  )}
                >
                  New
                  <span className="ml-1">
                    <PlusIcon />
                  </span>
                </Link>
              </>
            )}
            <Link
              className="text-lg font-semibold"
              href="https://github.com/2xdevs/blog"
            >
              <GitHubLogoIcon className="h-6 w-6" />
            </Link>
            <ModeToggle />
            {session?.user.email && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="cursor-pointer">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={session.user.image!} />
                      <AvatarFallback>
                        {session?.user
                          .name!.split(" ")
                          .map((word) => word.charAt(0))
                          .join("")
                          .toLocaleUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="sr-only">Profile</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link className="w-full" href={`/${session.user.id}`}>
                      <PersonIcon className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="p-0">
                    <Button
                      onClick={async () => await signOut()}
                      variant={"ghost"}
                      className="h-fit w-full justify-start py-1.5 pl-2 font-normal hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <LogOutIcon className="mr-2 h-4 w-4" />
                      Signout
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};
