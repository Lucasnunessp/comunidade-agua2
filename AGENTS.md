<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
 
- Keep brand images as real files in src/assets (no CDN pointers) so the Git repository is self-contained; derive the favicon from the same mark so header and browser identity stay consistent.
- Keep project details on the dedicated /projetos route and use typed navigation from the homepage; this allows opening the complete content independently.
- Use the shared site Button for new actions so navigation controls follow the existing site palette.
- Keep the five menu destinations as separate content routes with the shared Navbar; reuse existing sections without removing homepage content.
