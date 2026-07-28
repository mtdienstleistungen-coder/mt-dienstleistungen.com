import type { MetadataRoute } from "next";
import { company } from "@/config/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/impressum", "/datenschutz"],
    },
    sitemap: `${company.seo.siteUrl}/sitemap.xml`,
  };
}
