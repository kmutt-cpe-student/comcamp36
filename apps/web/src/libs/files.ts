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
