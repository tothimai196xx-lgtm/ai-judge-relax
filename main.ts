import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'The tortoise has been crossing the garden path since the light turned gold. ' +
  'Each step is a small decision, a foot lifted, set down, the shell catching the last of the sun like a roof tile left out to cool. ' +
  'A blackbird sings once from the fence and stops, as if it too is listening. ' +
  'The air smells of cut grass and warm earth, and somewhere a tap drips into a tin bucket, slow enough to count. ' +
  'The tortoise does not hurry. ' +
  'The lettuce leaf it found an hour ago is still there, half in shadow, and it will reach it when it reaches it. ' +
  'The sky goes the colour of weak tea, the first star finds its place above the plum tree, and the garden settles into the soft sounds it makes when no one is watching, and the day lets go of its hurry.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
