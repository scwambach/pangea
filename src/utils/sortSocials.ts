type SocialEntry = {
  url: string;
  handle: string;
};

type SortedSocials = {
  [platform: string]: SocialEntry[];
};

export function sortSocials(socials: (string | null)[]): SortedSocials {
  const result: SortedSocials = {};

  socials.forEach((url) => {
    if (!url) return;

    try {
      const parsed = new URL(url);
      const hostnameParts = parsed.hostname.split(".");
      const platform = hostnameParts.includes("facebook")
        ? "facebook"
        : hostnameParts.includes("instagram")
          ? "instagram"
          : "other";

      const handle = parsed.pathname.replace(/^\/+/, ""); // remove leading slashes

      if (!result[platform]) {
        result[platform] = [];
      }

      result[platform].push({
        url,
        handle,
      });
    } catch (e: any) {
      console.error("Invalid URL:", url, e);
      // Invalid URL, skip
    }
  });

  return result;
}
