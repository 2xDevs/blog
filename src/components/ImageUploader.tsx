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

export const ImageUploader = ({ imageLink }: { imageLink: string }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(imageLink);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [urlInput, setUrlInput] = useState<string>("");
  const [showUploader, setShowUploader] = useState<boolean>(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (allowedTypes.includes(file.type)) {
        setImageFile(file);
        setImageUrl(URL.createObjectURL(file));
        setShowUploader(false);
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
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

    // Check if URL ends with a common image extension
    if (url && imageExtensions.some((ext) => url.toLowerCase().endsWith(ext))) {
      setImageUrl(url);
      setImageFile(null);
      setShowUploader(false);
    } else {
      toast.error("URL upload failed", {
        description: "Please provide a valid image URL",
        dismissible: true,
        duration: 3000,
      });
    }
  };

  const handleDeleteClick = () => {
    setImageUrl(null);
    setImageFile(null);
    setShowUploader(false);
    setUrlInput("");
  };

  return (
    <div className="max-w-full">
      {imageUrl && (
        <div className="relative my-10 overflow-hidden rounded-2xl">
          <img src={imageUrl} alt="Uploaded" className="h-auto w-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant={"default"}
              onClick={() => setShowUploader(true)}
              className="absolute bottom-4 left-4"
            >
              Edit
            </Button>
            <Button
              variant={"destructive"}
              onClick={handleDeleteClick}
              className="absolute bottom-4 right-4"
            >
              Delete
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
        <div className="mt-4 flex aspect-video w-full items-center justify-center rounded-2xl bg-accent">
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
