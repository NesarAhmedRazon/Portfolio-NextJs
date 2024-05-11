export default function robots() {
  const { NEXT_PUBLIC_BASE_URL, NOINDEX } = process.env;

  if (NOINDEX === "true") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/"
      },
      sitemap: `${NEXT_PUBLIC_BASE_URL}/sitemap.xml`
    };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/preview/",
        "/admin/",
        "/_next/",
        "/auth/",
        "/dashboard*"
      ]
    },
    sitemap: `${NEXT_PUBLIC_BASE_URL}/sitemap.xml`
  };
}
