# MAXTRON Racing Club — Website

A dark, blue-accented racing-themed website for MAXTRON Racing Club (NMIT), built with
plain HTML/CSS/JS — no build step, no framework, works on GitHub Pages for free.

## File structure

```
maxtron-site/
├── index.html          ← page structure only (rarely needs editing)
├── css/style.css        ← all colors, fonts, spacing (theme lives at the top as CSS variables)
├── js/content.js         ← ALL EDITABLE TEXT & DATA lives here (edit this for updates)
├── js/main.js            ← renders content.js into the page (no need to touch this)
└── assets/images/        ← put your real photos/logos here
```

## How to edit content later

Open **`js/content.js`** in any text editor (or directly in GitHub's web editor) and change
the values inside the quotes:

- Hero text, tagline, mission & vision → top of the file
- "Domains we offer" cards → `domains: [...]`
- Roadmap timeline → `roadmap.stages`
- Technical specs table → `technicalSpecs`
- Rulebook regulation summaries → `regulations`
- Budget numbers/percentages → `budgetCategories`, `budgetTotal`, `budgetAsk`
- Team members → `team: [...]` (add/remove objects freely)
- Sponsor slots, footer, contact email/address → bottom of the file

Save the file and refresh the page — no rebuild needed.

To restyle (colors, fonts), edit the `:root { ... }` variables at the top of `css/style.css`.

## Adding real images

Drop photos into `assets/images/` (e.g. `bike.jpg`, `team-photo.jpg`) then reference them
in `index.html` or `css/style.css` with a relative path like `assets/images/bike.jpg`.
The hero currently uses a drawn SVG motorcycle icon so the site works immediately with
zero images required.

## Publish it live on GitHub Pages (free, ~5 minutes)

1. Create a new repository on GitHub (e.g. `maxtron-racing-club`), keep it **Public**.
2. Upload every file in this folder to that repository, preserving the folder structure
   (`css/`, `js/`, `assets/` must stay as sub-folders). Easiest way:
   - On the repo page, click **Add file → Upload files**, drag in the whole `maxtron-site`
     folder contents, and commit.
   - Or, from a terminal with git installed:
     ```
     git init
     git add .
     git commit -m "Initial MAXTRON Racing Club site"
     git branch -M main
     git remote add origin https://github.com/<your-username>/maxtron-racing-club.git
     git push -u origin main
     ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, select `main` and folder `/ (root)`, then **Save**.
6. Wait 1–2 minutes. GitHub will show your live URL, typically:
   `https://<your-username>.github.io/maxtron-racing-club/`

Every time you edit `js/content.js` (or any file) and push/commit the change, GitHub Pages
automatically redeploys the live site within a minute or two.

## Optional: custom domain

If the club later buys a domain (e.g. `maxtronracing.club`), add a `CNAME` file containing
just that domain name to the repo root, and point the domain's DNS at GitHub Pages per
GitHub's custom-domain docs.
