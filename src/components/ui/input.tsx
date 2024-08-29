import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        placeholder="Subscribe via email"
        type={type}
        className={cn(
          "block h-9 w-full appearance-none rounded-md border border-transparent bg-transparent bg-white px-3 py-2 pl-12 pr-3 text-sm leading-5 text-slate-900 shadow ring-1 ring-slate-900/5 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-700/20 dark:text-white dark:ring-slate-200/20 dark:focus:ring-sky-500 sm:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
