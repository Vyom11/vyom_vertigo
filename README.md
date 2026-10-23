# Vyom Vertigo

Portfolio of Vyom Pandya: case studies, essays and contact. A static Jekyll site,
published to GitHub Pages at https://vyom11.github.io/vyom_vertigo/ by the workflow in
`.github/workflows/jekyll.yml` on every push to `main`.

## Preview locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://127.0.0.1:4000/. Edits to pages, CSS and data files reload on refresh.

## Where things live

| What | Where |
| --- | --- |
| Case studies | `_case_studies/` (one Markdown file each) |
| Essays | `_posts/` |
| Each project's colour | `_data/case_colors.yml` |
| Each essay's colour | `_data/essay_colors.yml` |
| The cassettes beside the headline | `_data/roles.yml` |
| Top 4 films | `_data/top4.yml` |
| Director's commentary lines (CC) | `_data/commentary.yml` |
| Styles and scripts | `assets/css/main.css`, `assets/js/site.js` |
