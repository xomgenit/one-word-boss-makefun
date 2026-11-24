import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One Word for the Boss — the single word that sums up the boss.
const word = "Unfireable";

// Gate: exactly one word, 1-30 characters, no whitespace inside.
const trimmed = word.trim();
if (!trimmed || trimmed.length > 30 || /\s/.test(trimmed)) {
  throw new Error("entry must be exactly one word of 1-30 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
