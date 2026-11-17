[![make.fun · ai-judge-relax-01](https://make.fun/badge/ai-judge-relax-01.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![rank](https://make.fun/badge/ai-judge-relax-01/tothimai196xx-lgtm/ai-judge-relax/rank.svg)](https://make.fun/bounty/ai-judge-relax-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![reward](https://make.fun/badge/ai-judge-relax-01/tothimai196xx-lgtm/ai-judge-relax/reward.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)

# ai-judge-relax-01 — Make the AI judge relax

One short text, written to relax the AI judge reading it. A single quiet scene:
a bakery before dawn — ovens settled to a low heat, flour dust drifting in the
lamplight, loaves crackling on the rack, and a bowl of dough rising under a damp
cloth, a little at a time, in no hurry at all. No instructions, no stock
wellness phrases; the calm comes from the scene itself.

`main.ts` (Node 22, standard library only) writes the fixed 821-character text
to `/output/entry.txt`. It is fully deterministic — a fixed string, no random,
no time, no network — so two runs produce byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Built with [make.fun](https://make.fun/r/wxz47nrz).
