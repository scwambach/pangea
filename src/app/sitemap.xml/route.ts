import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { type NextRequest } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  const baseUrl = process.env.SITE_URL || "https://yourdomain.com";

  const posts = await client.fetch(groq`
    *[_type == "post" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }
  `);

  const restaurants = await client.fetch(groq`
    *[_type == "restaurant" && defined(slug.current)]{
      "slug": slug.current,
      isActive,
      _updatedAt
    }
  `);

  const staticRoutes = [
    { path: "", lastmod: new Date().toISOString() },
    { path: "blog", lastmod: new Date().toISOString() },
  ];

  const dynamicRoutes = [
    ...posts.map((post: any) => ({
      path: `blog/${post.slug}`,
      lastmod: post._updatedAt,
    })),
    ...restaurants
      .filter((rest: any) => rest.isActive)
      .map((restaurant: any) => ({
        path: `${restaurant.slug}`,
        lastmod: restaurant._updatedAt,
      })),
  ];

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(({ path, lastmod }) => {
    return `<url>
  <loc>${baseUrl}/${path}</loc>
  <lastmod>${new Date(lastmod).toISOString()}</lastmod>
</url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
