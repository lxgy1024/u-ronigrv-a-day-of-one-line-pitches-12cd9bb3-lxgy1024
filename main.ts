import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, written fresh for a friend who has never coded:
// describe the app idea in plain words, an AI agent on make.fun
// builds a real first version to try, no coding needed.
const PITCH =
  "You've had that app idea for years \u2014 just describe it in plain words and an AI agent on make.fun will build you a real first version to try, no coding needed, and you keep every say in what it becomes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate requires 1 to 240 characters of real text: fail loudly
// rather than ever writing an invalid entry.
const length = [...PITCH].length;
if (length < 1 || length > 240) {
  throw new Error(`pitch must be 1-240 characters, got ${length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
