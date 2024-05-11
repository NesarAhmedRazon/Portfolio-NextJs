// sitemap index
export async function GET() {
  const hostname = process.env.NEXT_PUBLIC_BASE_URL;
  const sitemap = `
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${hostname}/sitemaps/pages.xml</loc>
      </sitemap>
      <sitemap>
        <loc>${hostname}/sitemaps/products.xml</loc>
      </sitemap>
      <sitemap>
        <loc>${hostname}/sitemaps/product-categories.xml</loc>
      </sitemap>
      <sitemap>
        <loc>${hostname}/sitemaps/blogs.xml</loc>
      </sitemap>
    </sitemapindex>
  `;
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
