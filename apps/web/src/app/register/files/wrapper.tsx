import { useEffect, useState } from "react";
import { z } from "zod";
import { RegisterFormSkeletonBody } from "../skeleton";
import FilesForm, { formSchema } from "./form";

interface FileItems {
  face_photo: {
    file: File;
    name: string;
  };
  thai_nationalid_copy: {
    file: File;
    name: string;
  };
  parent_permission: {
    file: File;
    name: string;
  };
  p1: {
    file: File;
    name: string;
  };
  p7: {
    file: File;
    name: string;
  };
}

interface WrapperProps {
  data: {
    face_photo: {
      url: string;
      name: string;
    };
    thai_nationalid_copy: {
      url: string;
      name: string;
    };
    parent_permission: {
      url: string;
      name: string;
    };
    p1: {
      url: string;
      name: string;
    };
    p7: {
      url: string;
      name: string;
    };
  };
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  isPending?: boolean;
  hasSubmit: boolean;
}

function Wrapper({ data, onSubmit, isPending, hasSubmit }: WrapperProps) {
  const [files, setFiles] = useState<FileItems | undefined>(undefined);

  useEffect(() => {
    const convertDataToFiles = async () => {
      const entries = Object.entries(data) as [
        keyof FileItems,
        { url: string; name: string },
      ][];
      const fileItems: Partial<FileItems> = {};

      for (const [key, value] of entries) {
        const response = await fetch(value.url);
        const blob = await response.blob();
        const file = new File([blob], value.name, { type: blob.type });
        if (value.name.endsWith(".pdf")) {
          fileItems[key] = { file: file, name: value.name };
        } else {
          fileItems[key] = { file: file, name: value.name };
        }
        fileItems[key] = { file: file, name: value.name };
      }

      setFiles(fileItems as FileItems);
    };

    convertDataToFiles();
  }, [data]);

  if (!files) {
    return <RegisterFormSkeletonBody />;
  }

  return (
    <FilesForm
      data={{
        face_photo: [files.face_photo.file],
        thai_nationalid_copy: [files.thai_nationalid_copy.file],
        parent_permission: [files.parent_permission.file],
        p1: [files.p1.file],
        p7: [files.p7.file],
      }}
      onSubmit={onSubmit}
      isPending={isPending}
      hasSubmit={hasSubmit}
    />
  );
}
export default Wrapper;
