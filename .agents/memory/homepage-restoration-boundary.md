---
name: Homepage restoration boundary
description: Scope rule for future homepage maintenance on the compiled QMark Creative site.
---

The compiled React bundle contains the original homepage layout, copy, responsive structure, and animation behavior. The enhancement layer should only make explicitly requested, narrowly scoped changes such as a navbar asset swap; it must not rewrite hero content or mutate Services, Portfolio, Contact, Footer, or navigation behavior.

**Why:** Replacing the compiled hero through the enhancement layer caused the page to diverge from the original premium reference experience and introduced unrelated behavior changes.

**How to apply:** Restore or preserve the bundle’s native hero first. Scope any optional homepage-only styling to `#home`, and verify downstream sections remain untouched.