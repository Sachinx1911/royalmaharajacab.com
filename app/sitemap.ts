import type { MetadataRoute } from "next";
import { citySlugs } from "@/lib/cities";

const base = "https://www.royalmaharajacab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/locations",
    "/contact",
    "/terms",
    "/cancellation-policy",
    "/privacy-policy",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const cityRoutes = citySlugs.map((slug) => ({
    url: `${base}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...cityRoutes];
}
