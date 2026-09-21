# Weekly Budget — setup guide

Your app is 4 things: `index.html`, `manifest.webmanifest`, `sw.js`, and the `icons` folder.
Keep them together exactly as they are.

## 1. Put it online with GitHub Pages (free, ~10 minutes)

1. Go to **github.com** and create a free account (skip if you have one).
2. Click the **+** (top right) → **New repository**.
   - Name: `weekly-budget`
   - Set it to **Public** (free GitHub Pages needs this; your expense data is NOT uploaded, it stays on your phone)
   - Tick **Add a README file** → **Create repository**.
3. In the new repo, click **Add file → Upload files**.
4. Unzip `weekly-budget.zip` on your Mac, open the folder, select **everything inside it**
   (index.html, manifest.webmanifest, sw.js, the icons folder) and drag it into the upload box.
   Make sure the `icons` folder uploads too.
5. Click **Commit changes**.
6. Go to **Settings** (repo tab) → **Pages** (left sidebar).
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)** → **Save**.
7. Wait 1–2 minutes, refresh the page. You'll see:
   **"Your site is live at https://YOUR-USERNAME.github.io/weekly-budget/"**

## 2. Add it to your iPhone home screen

1. Open that link in **Safari** (must be Safari).
2. Wait for it to load fully once. This caches it (and the charts) for offline use.
3. Tap the **Share** button (square with an up-arrow).
4. Scroll down → **Add to Home Screen** → name it "Budget" → **Add**.
5. Open it from the home screen icon from now on. It runs full-screen and works offline.

## 3. Using it

- **+** button: type amount → tap category → Save. (Note and date are optional.)
- Tap any expense to edit or delete it. Use ‹ › at the top to browse past weeks.
- Every Monday, last week's leftover goes into Savings automatically. Overspending comes
  out of Savings (it never goes below S$0, and you'll get a warning).
- **Settings → Show sample data** to preview with 12 made-up weeks. Your real data stays separate.

## 4. Backups (important)

Your data lives only inside the home-screen app on your phone. It's lost if you delete the
app or clear Safari website data. Back it up:

- **Settings → Export backup** → save to Files / iCloud Drive / email it to yourself.
- To restore (or move to a new phone): **Settings → Import backup** → pick the file.
- The app nudges you if it's been over 30 days.

Note: the home-screen app and the Safari tab keep **separate** data on iPhone. Always use the
home-screen icon.

## 5. Updating the app later

1. Edit the files, then in `sw.js` change `weekly-budget-v1` to `weekly-budget-v2`.
2. Upload the changed files to GitHub the same way (they replace the old ones).
3. Open the app twice (the first time it downloads the update, the second time it uses it).

Your expenses are not affected by updates.
