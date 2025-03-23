export function GET() {
    const baseUrl = "https://ydev-eight.vercel.app/";

    const pages = [
        "/",
        "/#about",
        "/projects",
        "/contact"
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages.map(page => `
            <url>
                <loc>${baseUrl}${page}</loc>
                <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
                <priority>0.8</priority>
            </url>
        `).join("")}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml"
        }
    });
}