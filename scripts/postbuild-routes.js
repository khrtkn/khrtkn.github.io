const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, '..', 'build');
const indexFile = path.join(buildDir, 'index.html');

const projectSlugs = [
  'modoru-mirai-ya',
  'TalkingMuseum',
  'listen-to-your-neighbors',
  'interactive-museum',
  'lets-speak-with-hands',
  'finca',
];

const routes = [
  'works',
  'about',
  ...projectSlugs.map((slug) => `works/${slug}`),
  'en',
  'en/works',
  'en/about',
  ...projectSlugs.map((slug) => `en/works/${slug}`),
];

fs.copyFileSync(indexFile, path.join(buildDir, '404.html'));

routes.forEach((route) => {
  const routeDir = path.join(buildDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(indexFile, path.join(routeDir, 'index.html'));
});
