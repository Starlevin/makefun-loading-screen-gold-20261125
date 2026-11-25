import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const tip = 'Read the first error before patching six files. The other 47 just hit "Reply All."';
const outputDir = process.argv[2] ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), tip, "utf8");
console.log(tip);
