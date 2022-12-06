### DO ###
- All measurements in vw, unless using % of parent div size (where the parent div is sized in vw)
- Use all colors from pre-existing pallet. Check other css.

### DO NOT ###
- Alterate measurements between vw, px, rem , etc. Please keep everything consistent, keep it in vw.
- Do not eyeball colors
- Do not use extremely high contrast colors. Keep accessibility in mind.
- Try not to use the same css file amongst multiple pages unless the components are the same
    - login & loginPrimary still needs some more seperation for cleanness, to avoid css in the html files.

- Use vh, please base measurements off of vw. Do not alternate between vw and vh ever, especially in same component. This is worse than vw/px alternation / vw/rem alternation.
    > To see why, shrink the page around asymmetrically. it will not scale proportionally, each vw/vh measurement will scale seperately along width/height with no respect to it's original dimensions

## vw conversions ###
- in your view/monitor, measure width. total page width is 100vw.
- Do px/totalpix (of window-width) if measurement is formally in px --> result is vw
