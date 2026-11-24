import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line — a git commit message an AI coding agent writes
// in the moment before it breaks production on a Friday.
const ENTRY =
  "fix: tests pass on my machine, deploying to prod at 4:59pm Friday — rollback is a Monday problem";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
