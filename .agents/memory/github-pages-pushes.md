---
name: GitHub Pages pushes
description: Non-obvious authentication behavior when pushing the static GitHub Pages repository from this workspace.
---

For this repository, the secure GitHub token was valid for the GitHub API but the workspace Git push helper had no source-control credential, and a bearer HTTP header was rejected by GitHub's Git endpoint. A standard HTTPS basic-auth extraheader using the token as the password successfully pushed without force-pushing.

**Why:** The workspace secret and GitHub API access can be healthy even when the managed Git integration is unavailable, while GitHub's Git transport expects the standard token-as-password form.

**How to apply:** Keep the remote/history intact, use a normal non-force push, and never print or persist the token value.