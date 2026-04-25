# Deploy fotisdelis.com — step-by-step

This is a one-time setup. Once done, future updates are just `git push`.

The local repo is already committed to a `main` branch with everything wired up. What's left is creating the remote, pushing, and pointing DNS.

---

## 1. Create the GitHub repo

`gh` CLI is not installed on your machine, so do this in the browser:

1. Open <https://github.com/new>.
2. Fields:
   - **Owner:** `fntel7`
   - **Repository name:** `fntel7.github.io` (must be exactly this — that's how GitHub Pages serves a user-site at `https://fntel7.github.io`)
   - **Visibility:** Public
   - **Initialize:** *Leave everything unchecked* (no README, no .gitignore, no license — we already have these)
3. Click **Create repository**.

GitHub will show a "quick setup" page. Ignore it; we'll push from the existing local repo.

---

## 2. Push the local repo

From a terminal in `C:\Users\user\Desktop\fntel7.github.io`:

```bash
git remote add origin https://github.com/fntel7/fntel7.github.io.git
git push -u origin main
```

If git asks for credentials, use a [Personal Access Token](https://github.com/settings/tokens) (classic, scope `repo`) as the password. The same approach already works for the `profit-shifting-explorer` repo.

---

## 3. Watch the GitHub Action build

The `main`-branch push triggers `.github/workflows/deploy.yml`, which:

- builds the site with Jekyll,
- purges unused CSS,
- deploys the built `_site` to a `gh-pages` branch.

Watch progress at:
`https://github.com/fntel7/fntel7.github.io/actions`

The first build takes ~3–5 minutes. Wait for the green check.

---

## 4. Enable GitHub Pages on the `gh-pages` branch

1. Repo → **Settings** → **Pages**.
2. **Source:** `Deploy from a branch`.
3. **Branch:** `gh-pages`, folder `/ (root)`. Click **Save**.
4. The site is now live at <https://fntel7.github.io>. Open it and confirm:
   - About page shows the bio + news.
   - Research page renders publications from `papers.bib`.
   - Interactive tools shows the explorer iframe.
   - Contact page shows the email and profile links.
5. Note any layout / link issues and tell Claude in the next session.

---

## 5. Point `fotisdelis.com` at GitHub Pages (GoDaddy DNS)

In the GoDaddy DNS panel for `fotisdelis.com`:

**Add four `A` records, host `@`, pointing to GitHub Pages IPs:**

| Type | Host | Value             | TTL   |
|------|------|-------------------|-------|
| A    | @    | 185.199.108.153   | 600s  |
| A    | @    | 185.199.109.153   | 600s  |
| A    | @    | 185.199.110.153   | 600s  |
| A    | @    | 185.199.111.153   | 600s  |

**Add one `CNAME` record for `www`:**

| Type  | Host | Value                | TTL   |
|-------|------|----------------------|-------|
| CNAME | www  | fntel7.github.io     | 600s  |

If GoDaddy already has a parking/forwarding record for `@`, **delete it** before adding the four `A` records.

DNS propagation takes 10 minutes to a few hours.

---

## 6. Tell GitHub the custom domain

1. Repo → **Settings** → **Pages** → **Custom domain** → enter `fotisdelis.com` → **Save**.
2. GitHub will validate the DNS. If it errors, wait a few minutes and retry — DNS may not have propagated yet. Run `nslookup fotisdelis.com 8.8.8.8` in a terminal; if you see four `185.199.x.x` IPs, DNS is ready.
3. Once validation passes, tick **Enforce HTTPS**. The TLS certificate is issued automatically and usually appears within an hour.
4. Open <https://fotisdelis.com>. Done.

The repo already contains a `CNAME` file with `fotisdelis.com`, so the action's deploy step will preserve the custom domain on subsequent pushes (without it, the domain would get cleared on each rebuild).

---

## 7. Deprecate the Google Site

Once <https://fotisdelis.com> is live and you're happy with it:

1. Open <https://sites.google.com/view/fotisdelis/home>.
2. Replace the homepage with a one-line note: *"This site has moved to <https://fotisdelis.com>."*
3. Keep the Google Site live at that URL for ~1 month so old links resolve, then remove.

Update profile links to point to `fotisdelis.com`:

- Google Scholar — Profile → edit → Homepage
- SSRN — author profile → edit
- CEPR — request update via your CEPR contact
- JRC — internal profile page → request update
- LinkedIn — Featured / Contact info

---

## 8. Future updates

Day-to-day:

```bash
# edit content
git add .
git commit -m "Add new working paper to bib"
git push
```

The deploy action runs automatically on every push to `main`. Site updates in ~3–5 minutes.

---

## Troubleshooting

**Action fails on first run.** Read the error in the Actions tab. Common causes: a typo in `_config.yml` (YAML is whitespace-sensitive), or a malformed BibTeX entry in `papers.bib`. Roll back the offending change, push again.

**`fotisdelis.com` shows 404 after DNS is set.** Check that the `CNAME` file in the repo root contains `fotisdelis.com` exactly (no trailing `www`, no protocol). Confirm the GitHub Pages settings show the custom domain in green.

**HTTPS lock missing.** Wait an hour after enabling "Enforce HTTPS"; if still missing, toggle it off and on again — GitHub will re-issue the cert.

**Pages page says "Branch `gh-pages` does not exist".** The deploy action hasn't completed yet. Check Actions tab; if it failed, fix and push again.
