import type { MetadataRoute } from "next";
import { citySlugs } from "@/lib/cities";
import { routeSlugs } from "@/lib/routes";

const base = "https://www.royalmaharajacab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/locations",
    "/routes",
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

  const cabRoutes = routeSlugs.map((slug) => ({
    url: `${base}/routes/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...cityRoutes, ...cabRoutes];
}
