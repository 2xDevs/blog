"use client";

import { BackButton } from "@/components/BackButton";
import Editor from "@/components/editor/advanced-editor";
import { ImageUploader } from "@/components/ImageUploader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BlogProps } from "@/types/types";
import { JSONContent } from "novel";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export const EditBlog = ({ InitialBlog }: { InitialBlog: BlogProps }) => {
  const [blog, setBlog] = useState(InitialBlog);
  const [title, setTitle] = useState(blog.title);
  const [image, setImage] = useState(blog.image);
  const [content, setContent] = useState(blog.content);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [title]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleImageUpload = (newImage: string) => {
    setImage(newImage);
  };

  const handleEditorChange = (newContent: JSONContent | any) => {
    setContent(newContent);
  };

  const handleSaveBlog = async () => {
    try {
      const responce = await fetch(`/api/blogs/${blog.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          authorId: blog.author,
          title,
          image,
          content,
        }),
      });
      if (!responce.ok) {
        throw new Error("Failed to Update Blog");
      } else {
        const data = await responce.json();
        setBlog(data);
        toast("Blog Updated Sucessfully", {
          dismissible: true,
          duration: 3000,
          action: {
            label: "Done",
            onClick: () => {},
          },
        });
      }
    } catch (error) {
      toast.error("Failed to Update Blog", {
        description: "Please try again later...",
        dismissible: true,
        duration: 3000,
      });
    }
  };

  return (
    blog && (
      <div className="mx-auto mb-8 flex max-w-6xl flex-col space-y-4 px-4 pt-8 sm:px-8">
        <div className="mb-4 flex max-h-fit items-center justify-between">
          <BackButton />
          <Button onClick={handleSaveBlog}>Save</Button>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            <div className="text-xs text-muted-foreground">
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
            <textarea
              ref={textareaRef}
              value={title}
              onChange={handleTitleChange}
              rows={1}
              className="w-full resize-none overflow-hidden border-0 bg-transparent text-display-5 font-bold text-foreground focus:ring-0 focus-visible:outline-none lg:text-4xl"
              placeholder="Untitled"
            />
            <div className="flex gap-2">
              <Avatar>
                <AvatarImage src={blog.author.avatar} />
                <AvatarFallback>
                  {blog.author.name
                    .split(" ")
                    .map((word) => word.charAt(0))
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="">
                <p className="text-sm font-semibold">{blog.author.name}</p>
                <p className="text-sm text-primary">
                  @{blog.author.name.split(" ")[0]}
                </p>
              </div>
            </div>
          </div>
          <ImageUploader imageLink={image} onUpload={handleImageUpload} />
          <Editor
            editable={true}
            initialValue={content}
            onChange={handleEditorChange}
          />
        </div>
      </div>
    )
  );
};
