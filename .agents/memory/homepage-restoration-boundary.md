---
name: Homepage restoration boundary
description: Scope rule for future homepage maintenance on the compiled QMark Creative site.
---

The compiled React bundle contains the original homepage copy, links, media, state, responsive behavior, and animation behavior. The enhancement layer may add explicitly requested visual structure around those existing nodes, including layout wrappers and decorative elements, but must not replace content, handlers, media, or navigation behavior.

**Why:** The Diwali reference required a split hero, floating offering panel, structured card grids, and a multi-block footer that could not be achieved reliably with color and shadow overrides alone.

**How to apply:** Keep the bundle as the content source of truth, add stable classes or decorative DOM nodes only for requested visual composition, scope styling to the relevant section IDs, and verify downstream content/functionality remains unchanged.