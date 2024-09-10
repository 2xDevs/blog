/* eslint-disable @next/next/no-img-element */
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import { toast } from "sonner";

interface ImageUpoaderProps {
  imageLink: string;
  onUpload: (value: string) => void;
}

export const ImageUploader = ({ imageLink, onUpload }: ImageUpoaderProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(imageLink);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [urlInput, setUrlInput] = useState<string>("");
  const [showUploader, setShowUploader] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setShowUploader(false);
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (allowedTypes.includes(file.type)) {
        setImageUrl(URL.createObjectURL(file));
        setLoading(true);
        const formdata = new FormData();
        formdata.append("file", file);
        const responce = await fetch("http://localhost:3000/api/upload", {
          method: "POST",
          body: formdata,
        });
        const data = (await responce.json()) as string;
        setImageUrl(data);
        setLoading(false);
        onUpload(data);
      } else {
        toast.error("File upload failed", {
          description: "Please upload a valid image file (JPG, PNG, or GIF).",
          dismissible: true,
          duration: 3000,
        });
      }
    }
  };

  const handleUrlUpload = () => {
    const url = urlInput;
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve(true);
        setImageUrl(url);
        onUpload(url);
        setShowUploader(false);
      }; // Image loaded successfully
      img.onerror = () => {
        resolve(false);
        toast.error("URL upload failed", {
          description: "Please provide a valid image URL",
          dismissible: true,
          duration: 3000,
        });
      }; // Error loading image
      img.src = url;
    });
  };

  return (
    <div className="max-w-full">
      {imageUrl && (
        <div className="relative my-10 overflow-hidden rounded-2xl">
          {loading && (
            <>
              <div className="absolute flex h-full w-full items-center justify-center backdrop-brightness-50 backdrop-filter">
                <Icons.spinner className="animate-spin" />
              </div>
            </>
          )}
          <img src={imageUrl} alt="Uploaded" className="h-auto w-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant={"default"}
              onClick={() => setShowUploader(true)}
              className="absolute right-4 top-4"
            >
              Edit
            </Button>
          </div>
          <Dialog open={showUploader}>
            <DialogContent className="max-w-md">
              <DialogClose
                onClick={() => setShowUploader(false)}
                className="absolute right-4 top-4"
              >
                <Cross2Icon className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
              <DialogHeader>
                <DialogTitle className="mb-4 text-3xl font-bold">
                  Image Uploader
                </DialogTitle>
                <DialogDescription>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="file">Upload Image</Label>
                      <div className="mt-1 flex items-center">
                        <Input
                          className="mr-4 block h-fit w-full border-none px-0 text-sm text-card-foreground file:mr-4 file:rounded-full file:bg-primary file:px-4 file:py-2 file:font-semibold file:text-primary-foreground hover:file:bg-primary/90"
                          onChange={handleFileUpload}
                          id="file"
                          ref={fileInputRef}
                          type="file"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="url">Or enter an image URL</Label>
                      <div className="mt-1 flex items-center">
                        <Input
                          id="url"
                          type="text"
                          onChange={(e) => setUrlInput(e.target.value)}
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={handleUrlUpload}
                      className="w-full"
                      type="button"
                    >
                      Upload
                    </Button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      )}
      {!imageUrl && !showUploader && (
        <div className="my-10 mt-4 flex aspect-video max-w-[48rem] items-center justify-center rounded-2xl bg-accent">
          <Card className="w-full max-w-md p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">Image Uploader</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="file">Upload Image</Label>
                <div className="mt-1 flex items-center">
                  <Input
                    id="file"
                    onChange={handleFileUpload}
                    ref={fileInputRef}
                    className="mr-4 block h-fit w-full border-none px-0 text-sm text-card-foreground file:mr-4 file:rounded-full file:bg-primary file:px-4 file:py-2 file:font-semibold file:text-primary-foreground hover:file:bg-primary/90"
                    type="file"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="url">Or enter an image URL</Label>
                <div className="mt-1 flex items-center">
                  <Input
                    id="url"
                    type="text"
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
              <Button
                onClick={handleUrlUpload}
                className="w-full"
                type="button"
              >
                Upload
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
