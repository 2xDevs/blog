"use client";

import { XIcon } from "lucide-react";
import { useState, useRef } from "react";

export const ImageUploader = ({ imageLink }: { imageLink: string }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(imageLink);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [urlInput, setUrlInput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showUploader, setShowUploader] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (allowedTypes.includes(file.type)) {
        setImageFile(file);
        setImageUrl(URL.createObjectURL(file));
        setError(null);
        setShowUploader(false);
      } else {
        setError("Please upload a valid image file (JPG, PNG, or GIF).");
        setTimeout(() => {
          setError(null);
        }, 2000);
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
      setError(null);
      setShowUploader(false);
    } else {
      setError("Please enter a valid image URL.");
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  const handleEditClick = () => {
    setShowUploader(true);
  };

  const handleDeleteClick = () => {
    setImageUrl(null);
    setImageFile(null);
    setError(null);
    setShowUploader(false);
    setUrlInput("");
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl space-y-6">
      {imageUrl && (
        <div className="relative my-10 overflow-hidden rounded-2xl">
          <img src={imageUrl} alt="Uploaded" className="h-auto w-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handleEditClick}
              className="absolute bottom-4 left-4 inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteClick}
              className="absolute bottom-4 right-4 inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            >
              Delete
            </button>
          </div>
          {showUploader && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-75">
              <div className="w-full max-w-md rounded-lg bg-card p-6 shadow-lg">
                <div className="flex">
                  <h2 className="mb-4 flex-1 text-2xl font-bold">
                    Image Uploader
                  </h2>
                  <button
                    onClick={() => setShowUploader(false)}
                    className="rounded-md border border-transparent bg-red-600 px-1 text-sm text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                  >
                    <XIcon />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="file"
                      className="block text-sm font-medium text-card-foreground"
                    >
                      Upload Image
                    </label>
                    <div className="mt-1 flex items-center">
                      <input
                        id="file"
                        type="file"
                        ref={fileInputRef}
                        className="block w-full text-sm text-card-foreground file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground hover:file:bg-primary/90"
                        onChange={handleFileUpload}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="url"
                      className="block text-sm font-medium text-card-foreground"
                    >
                      Or enter an image URL
                    </label>
                    <div className="mt-1 flex items-center">
                      <input
                        id="url"
                        type="text"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        placeholder="https://example.com/image.jpg"
                        className="block w-full rounded-md border-input bg-background text-card-foreground shadow-sm focus:border-primary focus:ring-primary"
                      />
                      <button
                        type="button"
                        onClick={handleUrlUpload}
                        className="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {!imageUrl && !showUploader && (
        <div className="mx-auto w-full max-w-md rounded-lg bg-card p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Image Uploader</h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="file"
                className="block text-sm font-medium text-card-foreground"
              >
                Upload Image
              </label>
              <div className="mt-1 flex items-center">
                <input
                  id="file"
                  type="file"
                  ref={fileInputRef}
                  className="block w-full text-sm text-card-foreground file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground hover:file:bg-primary/90"
                  onChange={handleFileUpload}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="url"
                className="block text-sm font-medium text-card-foreground"
              >
                Or enter an image URL
              </label>
              <div className="mt-1 flex items-center">
                <input
                  id="url"
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="block w-full rounded-md border-input bg-background text-card-foreground shadow-sm focus:border-primary focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={handleUrlUpload}
                  className="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="rounded-lg bg-red-500 p-4 text-red-100">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
