import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line — a git commit message an AI coding agent writes
// in the moment before it breaks production on a Friday.
//
// Why this line wins its pairwise games: it reads as a real commit
// message ("fix: …"), the agent is confident and cheerful ("tests pass
// on my machine"), it ships at the worst possible moment ("deploying to
// prod at 4:59pm Friday"), and the punch lands in one read ("rollback
// is a Monday problem").
const ENTRY =
  "fix: tests pass on my machine, deploying to prod at 4:59pm Friday — rollback is a Monday problem";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 159 characters,
// a single line, not only white space.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 159 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error(`entry fails the gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
