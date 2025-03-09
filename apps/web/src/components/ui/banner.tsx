import { Button } from "@/components/ui/button";
import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";
import { MagicCard } from "../card/magic-card";

const bannerVariants = cva("w-full h-fit", {
  variants: {
    variant: {
      default: "bg-gradient-to-r from-rose-400 to-red-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  icon?: React.ReactNode;
  action?: React.ReactNode;
  isClosable?: boolean;
  layout?: "row" | "center" | "complex";
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      className,
      variant,
      icon,
      action,
      isClosable,
      layout = "row",
      children,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const accept = () => {
      setIsOpen(false);
      const expires = new Date();
      expires.setHours(expires.getHours() + 12);
      document.cookie = `countdown=true; expires=${expires.toUTCString()}; path=/`;
    };

    React.useEffect(() => {
      try {
        setIsOpen(true);
        if (document.cookie.includes("countdown=true")) {
          setIsOpen(false);
        }
      } catch {}
    }, []);

    const innerContent = (
      <div
        className={cn(
          "flex gap-2",
          layout === "center" && "justify-center",
          layout === "complex" && "md:items-center",
        )}
      >
        {layout === "complex" ? (
          <div className="flex grow gap-3 md:items-center">
            {icon && (
              <div className="flex shrink-0 items-center gap-3 max-md:mt-0.5">
                {icon}
              </div>
            )}
            <div
              className={cn(
                "flex grow",
                layout === "complex" &&
                  "flex-col justify-between gap-3 md:flex-row md:items-center",
              )}
            >
              {children}
            </div>
          </div>
        ) : (
          <>
            {icon && (
              <div className="flex shrink-0 items-center gap-3">{icon}</div>
            )}
            <div className="flex grow items-center justify-between gap-3">
              {children}
            </div>
          </>
        )}
        {(action || isClosable) && (
          <div className="flex items-center gap-3">
            {action}
            {isClosable && (
              <Button
                variant="ghost"
                className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                onClick={() => {
                  accept();
                }}
                aria-label="Close banner"
              >
                <X
                  size={16}
                  strokeWidth={2}
                  className="opacity-60 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Button>
            )}
          </div>
        )}
      </div>
    );

    if (!isOpen) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(bannerVariants({ variant }), className)}
        {...props}
      >
        <MagicCard className="h-fit w-full rounded-none px-4 py-4">
          {innerContent}
        </MagicCard>
      </div>
    );
  },
);
Banner.displayName = "Banner";

export { Banner, type BannerProps };
