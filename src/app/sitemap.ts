import { MetadataRoute } from "next";

const base = "https://www.fluxiqo.com";
const lastModified = new Date("2026-05-18");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/#services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#process`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#reviews`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
