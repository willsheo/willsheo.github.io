# Writing blog posts

Create a Markdown file in `src/content/blog/`. Use `first-post.md` as a template.

- `title`: post title.
- `description`: short summary for the blog index and metadata.
- `date`: publication date in YYYY-MM-DD format.
- `language`: en, ko, or ar.
- `category`: policy, academic, or reflections.
- `slug`: unique URL name within that language, using lowercase letters, numbers, and hyphens.
- `draft`: keep true while writing; set false when ready to include it in the build.

Draft posts are excluded from both the index and generated pages, including local previews. To preview an article locally, temporarily set draft to false and return it to true before committing or deploying unfinished work. Draft source files are still visible if committed to the public GitHub repository.

Posts appear at `/blog/slug/`, `/ko/blog/slug/`, or `/ar/blog/slug/`. The language switcher currently goes to the other language's blog index for these posts; it does not assume a translation exists.

Standard Markdown supports headings, links, lists, and tables. Use `$...$` for inline equations and `$$...$$` for displayed equations. Place figures in `public/images/blog/` and use descriptive alt text. Everything in public is publicly accessible after deployment.

The existing English and Arabic UAE policy summaries remain under Research, separate from the Blog. Edit those summaries in `src/pages/publications/policy/` and `src/pages/ar/publications/policy/`.

Run `npm run dev` for local preview and `npm run build` to validate before deployment. A push to main deploys the site.
