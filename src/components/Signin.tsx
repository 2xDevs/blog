"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/Icons";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { Logo } from "@/components/Logo";

const Signin = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <>
      <div className="relative flex h-[calc(100dvh-80px)]">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
          <Logo />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <SigninForm />
        </div>
      </div>
    </>
  );
};

const SigninForm = () => {
  return (
    <div className="max-w-sm space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
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
        <Button
          onClick={async () => {
            await signIn("google", { callbackUrl: "/" });
          }}
          className="w-full"
          variant="outline"
          type="button"
        >
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

export { Signin };
