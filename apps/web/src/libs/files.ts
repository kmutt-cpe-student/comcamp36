import { fetchClient } from "@/libs/server/client";

export function getFiles(filesPath: string | null | undefined): File[] {
  if (!filesPath) {
    return [];
  }

  const isImage = filesPath.endsWith(".png") || filesPath.endsWith(".jpg");
  if (!isImage) {
    return [];
  }

  const fileName = filesPath.split("/").pop() || filesPath;

  return [new File(["content"], fileName, { type: "" })];
}

export async function getReceipt(filePath: string | null): Promise<File[]> {
  if (!filePath) {
    return [];
  }

  const { data } = await fetchClient.POST("/files/get-receipt", {
    body: {
      receipt_key: filePath,
    },
  });

  if (data && data.receipt_path) {
    const response = await fetch(data.receipt_path);
    const blob = await response.blob();
    const fileName = data.receipt_path.split("/").pop()?.split("?")[0] || "";
    const file = new File([blob], fileName, {
      type: blob.type,
    });
    return [file];
  }

  return [];
}
