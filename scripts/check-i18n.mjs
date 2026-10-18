/**
 * Fails the build if en.ts and id.ts drift apart.
 * A missing key renders as empty text on the language toggle — silent and ugly.
 * Run: npm test
 */
import { en } from '../src/i18n/en.ts';
import { id } from '../src/i18n/id.ts';

const keysOf = (o) => Object.keys(o).sort();

const enKeys = keysOf(en);
const idKeys = keysOf(id);

const missingInId = enKeys.filter((k) => !idKeys.includes(k));
const extraInId = idKeys.filter((k) => !enKeys.includes(k));

if (missingInId.length === 0 && extraInId.length === 0) {
  console.log(`i18n OK — ${enKeys.length} keys, en and id match.`);
} else {
  if (missingInId.length) console.error('Missing in id.ts:\n  ' + missingInId.join('\n  '));
  if (extraInId.length) console.error('Extra in id.ts:\n  ' + extraInId.join('\n  '));
  process.exit(1);
}