export const slugify = (text: string) => {
  // if text is NOT a string, return an empty string
  if (typeof text !== "string") {
    return "";
  }

  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};
