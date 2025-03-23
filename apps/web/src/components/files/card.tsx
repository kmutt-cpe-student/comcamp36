import { Button } from "@/components/ui/button";
import { formatBytes } from "@/libs/utils";
import { FileText, X } from "lucide-react";
import Image from "next/image";

interface FileCardProps {
  file: File;
  onRemove: () => void;
  disabled?: boolean;
  noPreview?: boolean;
}

export function FileCard({
  file,
  onRemove,
  disabled,
  noPreview,
}: FileCardProps) {
  return (
    <div className="relative flex items-center gap-2.5">
      <div className="flex flex-1 gap-2.5">
        <FilePreview file={file} />
        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-col gap-px">
            <a
              onClick={() => {
                if (noPreview) {
                  return;
                }

                window.open(URL.createObjectURL(file), "_blank");
              }}
              className="text-charcoal-special line-clamp-1 cursor-pointer text-sm font-medium hover:underline"
            >
              {file.name}
            </a>
            <p className="text-dimgray-special text-xs">
              {formatBytes(file.size)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={onRemove}
          size="icon"
          variant="ghost"
          disabled={disabled}
        >
          <X className="size-4" aria-hidden="true" />
          <span className="sr-only">Remove file</span>
        </Button>
      </div>
    </div>
  );
}

interface FilePreviewProps {
  file: File;
}

export function FilePreview({ file }: FilePreviewProps) {
  if (file.type.startsWith("image/")) {
    return (
      <Image
        src={URL.createObjectURL(file)}
        alt={file.name}
        width={48}
        height={48}
        loading="lazy"
        className="aspect-square shrink-0 rounded-md object-cover"
      />
    );
  }

  return (
    <FileText className="text-dimgray-special size-10" aria-hidden="true" />
  );
}
