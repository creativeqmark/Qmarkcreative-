---
name: Homepage restoration boundary
description: Scope rule for future homepage maintenance on the compiled QMark Creative site.
---

The compiled React bundle contains the original homepage and footer structure, copy, links, media, state, responsive behavior, and animation behavior. The enhancement layer must preserve that structure and may only add the single explicitly requested hero artwork; it must not add layout wrappers, labels, decorative DOM, or footer changes.

**Why:** The supplied instructions explicitly rejected the earlier invented diya/ornament/offerings layers and required the original homepage and footer structure to be restored exactly.

**How to apply:** Keep the compiled bundle and footer untouched, remove any unrequested DOM/CSS decorations, and scope the only new visual layer to the native `#home` hero artwork.