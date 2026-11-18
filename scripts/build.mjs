import { rm, mkdir, cp, writeFile, readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'source');
const output = join(root, 'build');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
await writeFile(join(output, '.nojekyll'), '');

// Fail the build if a local image/script/stylesheet used by index.html is absent.
const markup = await readFile(join(output, 'index.html'), 'utf8');
const refs = [...markup.matchAll(/(?:src|href)="(assets\/[^"?#]+)"/g)].map((m) => m[1]);
for (const ref of refs) await stat(join(output, ref));
console.log(`Built ${refs.length} linked local assets into build/.`);
