/**
 * One-shot generator for the social preview card.
 * sharp is already installed as an Astro dependency — no new package.
 * Run: node scripts/make-og.mjs
 */
import sharp from 'sharp';

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#f2f3f3"/>
  <rect x="0" y="0" width="14" height="${H}" fill="#16181a"/>

  <g font-family="Segoe UI, Arial, Helvetica, sans-serif">
    <text x="96" y="150" font-size="21" letter-spacing="4.5" fill="#6b7073">OGI BASTIAN</text>
    <line x1="96" y1="188" x2="${W - 96}" y2="188" stroke="#dee1e2" stroke-width="1"/>

    <text x="96" y="330" font-size="76" font-weight="500" letter-spacing="-2.4" fill="#16181a">Learning fast and</text>
    <text x="96" y="416" font-size="76" font-weight="500" letter-spacing="-2.4" fill="#16181a">shipping anyway.</text>

    <line x1="96" y1="472" x2="${W - 96}" y2="472" stroke="#dee1e2" stroke-width="1"/>
    <text x="96" y="524" font-size="21" letter-spacing="1.2" fill="#6b7073">Full-Stack Development Learner — Pekalongan, Indonesia</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png({ quality: 92 }).toFile('public/og.png');
console.log('public/og.png written (1200x630)');