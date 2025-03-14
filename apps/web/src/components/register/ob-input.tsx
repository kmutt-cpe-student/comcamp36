import { cn } from "@/libs/utils";
import React from "react";

const OrangeBorderInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "border-vermilion-1/70 focus-visible:ring-vermilion flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:hidden placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

OrangeBorderInput.displayName = "OrangeBorderInput";

export { OrangeBorderInput };
