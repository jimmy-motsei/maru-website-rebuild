import type { MetadataRoute } from "next";
import { listPageSlugs } from "@/lib/mdx";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const pages = await listPageSlugs();
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    ...pages.map((slug) => ({
      url: `${base}/${slug.join("/")}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
