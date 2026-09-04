Drop project images here.

Expected files (see the `image` field on each entry in src/content.js):
- naj26.png — screenshot or hero shot of the NAJ26 site
- trashsense.png — screenshot of TrashSense
- footypredictor.png — screenshot of Footy Predictor
- liminalexp.png — Liminal Experience 1st Edition promo art
- mygxs.png — MY G XS Live Concert promo art
- liminalexp-2.png — Liminal Experience 2nd Edition promo art

Dev-tab cards fall back to a solid color if a file's missing — the design-tab
carousel (DepthCarousel) does not have that fallback, since it renders a
plain <img>, so a missing file there shows a broken-image icon instead of
just looking plain. Worth adding these three before you ship the design tab.

Recommended: portrait orientation for the three design ones (the carousel's
cards default to 300x380, roughly 4:5) — landscape 1600x900-ish for the
three dev ones. JPG, PNG, or WebP, keep each under ~300KB.
