# Fotis Delis website (al-folio)

This is the Jekyll / al-folio repo that serves **https://fotisdelis.com**.

## Five tabs (navbar order set via `nav_order` in `_pages/*.md`)

1. About — `_pages/about.md` (uses `layout: about`; renders bio + news + selected publications + socials).
2. Research — `_pages/publications.md` (renders `_bibliography/papers.bib` via jekyll-scholar).
3. Data — `_pages/data.md` (links to public CSVs in the explorer repo).
4. Interactive tools — `_pages/projects.md` (lists cards from `_projects/*.md`; the first card iframes the explorer).
5. Contact — `_pages/contact.md`.

## How content gets edited

- **New publication or working paper** → add a BibTeX entry to `_bibliography/papers.bib`. Don't paste prose into the Research page.
- **News item** → new file in `_news/YYYY-MM-DD-*.md` with `layout: post`, `inline: true`. Newest sorts first on the About page.
- **New interactive tool** → new file in `_projects/*.md` with frontmatter (`title`, `description`, `img`, `importance`, `category: research`). Add an iframe or content body.

## House rules (from Fotis)

- Profit-shifting estimates are **non-directional** group aggregates. Never use arrows / "from X to Y".
- JRC disclaimer wording is fixed: *"The views expressed here are those of the author and do not represent those of the European Commission or the Joint Research Centre."* Do not introduce "necessarily".
- No Google Analytics or trackers.
- No citation counts / h-index on the site.
- Never commit `.dta` files — raw data stays off the public repo.

## Deployment

- Push to `main`. The `.github/workflows/deploy.yml` action runs `bundle exec jekyll build` and deploys `_site` to the `gh-pages` branch.
- GitHub Pages serves `gh-pages`. Custom domain `fotisdelis.com` is set via `CNAME` (in repo root) plus repo Settings → Pages → Custom domain.
- DNS at GoDaddy: A records for `@` to GitHub's four Pages IPs; `www` CNAME → `fntel7.github.io`.

## Local preview

Ruby/Jekyll local preview is impractical on Fotis's Windows machine. Two ways to preview:

- **Live**: push to a branch and let the GitHub Action build it, or to a draft repo.
- **Docker** (if installed later): `docker compose up` — al-folio ships a `docker-compose.yml`.

Treat the GitHub Action build log as the verification step until a local preview is available.

## Sister repo

The interactive explorer is a separate repo: `fntel7/profit-shifting-explorer`, served at `https://fntel7.github.io/profit-shifting-explorer/`. Edits to it happen there, not here. The al-folio site only iframes it.
