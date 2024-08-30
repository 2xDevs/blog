"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      variant={"link"}
      onClick={() => router.back()}
      className="-ml-4 flex h-fit w-fit items-center text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
    >
      <ChevronLeftIcon className="-ml-2 h-4 sm:-ml-4" />
      Go Back
    </Button>
  );
};
