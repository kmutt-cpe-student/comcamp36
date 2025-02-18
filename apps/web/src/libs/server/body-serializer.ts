function JsonToFormData(body: {
  [key: string]:
    | string
    | Blob
    | object
    | boolean
    | File
    | File[]
    | number
    | null;
}) {
  const formData = new FormData();
  for (const key in body) {
    if (body[key] === null) {
      continue;
    }

    if (
      Array.isArray(body[key]) &&
      body[key].every((item) => item instanceof File)
    ) {
      body[key].forEach((file) =>
        formData.append(key, file, encodeURIComponent(file.name)),
      );
      continue;
    }

    if (body[key] instanceof File) {
      formData.append(key, body[key], encodeURIComponent(body[key].name));
      continue;
    }

    if (typeof body[key] === "object" || typeof body[key] === "boolean") {
      formData.append(key, JSON.stringify(body[key]));
      continue;
    }

    if (typeof body[key] === "number") {
      formData.append(key, body[key].toString());
      continue;
    }

    formData.append(key, body[key]);
  }

  return formData;
}

export default JsonToFormData;
