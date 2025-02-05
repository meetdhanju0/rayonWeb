const fs = require('fs');

// Base domain for your site
const baseUrl = 'https://rayonweb.com';

// Static paths for your site
const staticPaths = [
  '/',
  '/about',
  '/service',
  '/portfolio',
  '/contact',
  '/privacy-policy',
  '/career',
  '/training',
  '/services/python',
  '/services/php',
  '/services/react',
  '/services/vue',
  '/services/devops',
  '/services/aws-s3',
  '/services/aws-ec2',
  '/services/aws-lambda',
];

// Generate the XML content for the sitemap
function generateSitemap() {
  const urls = staticPaths
    .map((path) => {
      return `<url><loc>${baseUrl}${path}</loc></url>`;
    })
    .join('\n');

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  // Write the sitemap to the public directory
  fs.writeFileSync('./public/sitemap.xml', sitemapContent, 'utf8');
  console.log('✅ Sitemap successfully created at public/sitemap.xml');
}

generateSitemap();
