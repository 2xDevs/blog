"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Icons } from "@/components/Icons";

const Signup = () => {
  return (
    <>
      <div className="flex h-[calc(100dvh-72px)]">
        <div className="flex-1">
          <Icons.logo className="h-full w-full" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <SignupForm />
        </div>
      </div>
    </>
  );
};

const SignupForm = () => {
  return (
    <div className="max-w-sm space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create your account
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
          />
        </div>
        <Button
          className="w-full"
          onClick={() =>
            toast.error("Error", {
              description: "We do not allow signin/signup at the moment",
            })
          }
        >
          Sign In with Email
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="w-full space-y-4">
        <Button className="w-full" variant="outline" type="button">
          <Icons.google className="mr-2 h-4 w-4" />
          <span>Login with Google</span>
        </Button>
        <Button
          className="w-full"
          onClick={() =>
            toast.error("Error", {
              description: "We do not allow signin/signup at the moment",
            })
          }
          variant="outline"
          type="button"
        >
          <Icons.gitHub className="mr-2 h-5 w-5" />
          <span>Login with GitHub</span>
        </Button>
      </div>
    </div>
  );
};

export { Signup };
