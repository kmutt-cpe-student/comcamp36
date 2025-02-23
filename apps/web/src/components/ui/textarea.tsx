import * as React from "react";

import { cn } from "@/libs/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea"> & {
    maxLength?: number;
  }
>(({ className, maxLength, defaultValue, value, ...props }, ref) => {
  const [charCount, setCharCount] = React.useState(0);

  React.useEffect(() => {
    const initialValue = value || defaultValue || "";
    setCharCount(String(initialValue).length);
  }, [value, defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    props.onChange?.(e);
  };

  return (
    <div className="relative">
      <textarea
        className={cn(
          "font-noto-sans-thai-looped border-vermilion-1/30 focus-visible:ring-vermilion/60 flex min-h-[200px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        onChange={handleChange}
        defaultValue={defaultValue}
        value={value}
        ref={ref}
        {...props}
      />
      {maxLength && (
        <div className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1 rounded bg-black/10 px-2 py-1 text-xs backdrop-blur-sm">
          <span
            className={cn(
              "transition-colors",
              charCount > maxLength
                ? "text-red-400"
                : charCount > maxLength * 0.7
                  ? "text-yellow-400"
                  : "text-gray-400",
            )}
          >
            {charCount}
          </span>
          <span className="text-gray-400">/{maxLength}</span>
        </div>
      )}
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
