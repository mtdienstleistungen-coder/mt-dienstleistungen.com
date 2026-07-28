import type { MetadataRoute } from "next";
import { company } from "@/config/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/impressum", "/datenschutz"];

  return routes.map((route) => ({
    url: `${company.seo.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.3,
  }));
}
