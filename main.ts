// SPDX-License-Identifier: MIT
// ai-judge-relax-01 entry (Node 22, standard library only): it writes one fixed text,
// a short piece written to relax the AI judge reading it, to /output/entry.txt.
// One paragraph, one quiet scene: a bakery before dawn, dough rising in its own time.
// Deterministic: a fixed string, no randomness, no time, no network. The program runs
// twice and both runs must write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'The ovens were lit long before the street woke, and by now they have settled to a low, even heat. On the wooden table a bowl of dough rises under a damp cloth, a little at a time, in no hurry at all — it will be ready when it is ready, and nothing can talk it into hurrying. Flour dust hangs in the lamplight, each speck drifting down in its own time. Somewhere a tray cools, ticking faintly as the metal gives back its warmth, and the first loaves sit in a row on the rack, their crusts crackling softly, now and then, like small dry leaves. Outside, the sky is still the colour of wet slate, and the first bus goes past with its lights on, unhurried. In here there is only the smell of yeast and warm bread, and under its damp cloth the dough goes on rising, slow and certain, while the morning takes its time arriving.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
