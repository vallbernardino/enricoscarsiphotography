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
- Keep migrated official-site service content in `src/lib/service-pages.ts` and render details through `/services/$slug`; this preserves homepage content while centralizing source-truth service pages.
- Keep verbatim official Italian long-form material in `src/lib/official-content.ts`; service pages append mapped source blocks without visitor-facing provenance labels.
