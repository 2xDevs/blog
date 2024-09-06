"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { BookOpenIcon, CalendarDays, ThumbsUp } from "lucide-react";
import { type UserProps } from "@/types/types";
import Link from "next/link";

const Profile = ({ user }: { user: UserProps }) => {
  return (
    <div className="container mx-auto max-w-3xl space-y-4 px-4 py-8">
      <Card className="overflow-hidden">
        <CardHeader className="">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <Avatar className="h-32 w-32 sm:h-48 sm:w-48">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <CardTitle className="text-3xl sm:text-4xl">
                {user.name}
              </CardTitle>
              <CardContent className="mb-3 p-0 text-primary">
                @{user.name.split(" ")[0]}
              </CardContent>
              <div className="mb-4 flex justify-center space-x-4 sm:justify-start">
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href={"/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <GitHubLogoIcon className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href={"/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedInLogoIcon className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="flex justify-center space-x-4 sm:justify-start">
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  <BookOpenIcon className="mr-1 h-4 w-4" />
                  {user.blogCount} Blogs
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  <ThumbsUp className="mr-1 h-4 w-4" />
                  {101} Likes
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">About Me</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem atque
            possimus ducimus officia perspiciatis odit doloremque perferendis
            consectetur qui esse? Incidunt itaque deserunt aperiam modi.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {user.blogs.map((blog) => (
              <Link
                href={`/blog/${blog.id}`}
                key={blog.id}
                className="flex items-center space-x-4"
              >
                <div className="space-y-1">
                  <h3 className="line-clamp-1 font-medium leading-tight">
                    {blog.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {blog.content}
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
