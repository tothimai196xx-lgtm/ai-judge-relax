// Round 2 entry for ai-judge-relax-01 (Node 22, standard library only).
// Writes one fixed relaxing text to /output/entry.txt (or MAKEFUN_OUTPUT_DIR
// when run locally). Deterministic: no network, no randomness, no time.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = 'The slow train leaves the town just as the light turns the color of weak tea, and it does not hurry. The wheels find their rhythm over the joints in the track, a soft double knock, again and again, like a heart with nothing to prove. Fields slide past the window, green giving way to gold, then to a blue so deep it feels like the inside of a held breath. Far off, chimney smoke thins into the evening until it is only air. The air through the open window smells of cut grass and rain that fell hours ago and never quite dried. Across the aisle, a woman reads a paperback with a folded corner, and the man beside her sleeps with his cheek against the glass, waking now and then to look out and smile. Outside, the first lamps come on in the houses along the line, one by one, small warm squares in the darkening fields. There is nowhere to be that cannot wait for this, and the miles pass the way good hours do, quietly, uncounted.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
