---
name: Homepage restoration boundary
description: Scope rule for future homepage maintenance on the compiled QMark Creative site.
---

The compiled React bundle contains the original homepage and footer structure, copy, links, media, state, responsive behavior, and animation behavior. The enhancement layer must preserve that structure and may only add explicitly requested hero artwork or corner framing; it must not add layout wrappers, labels, decorative DOM, or footer changes.

**Why:** The supplied instructions explicitly rejected invented diya/ornament/offerings layers and required the original homepage and footer structure to be restored exactly; later corner framing was explicitly requested as a hero-only visual treatment.

**How to apply:** Keep the compiled bundle and footer untouched, remove any unrequested DOM/CSS decorations, and scope new visual layers to explicitly requested treatments on the native `#home` hero only.