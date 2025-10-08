# YoungLife Expense Report Generator

This is a simple, free tool created for the amazing folks at **[YoungLife](https://younglife.org)** - a nonprofit organization dedicated to introducing adolescents to Jesus Christ and helping them grow in their faith.

## What is this?

Ever had to submit expense reports after a YoungLife camp, mission trip, or event? collecting receipts, organizing everything, and creating a proper report can be a pain. That's why this tool exists!

This is a **completely free, offline-capable web app** that helps YoungLife volunteers and staff create PDF expense reports in seconds. 

## Who can use this?

**Everyone!** This project is completely free and open source. While it was created specifically for YoungLife, anyone in nonprofit work or who needs to track expenses can use it. It's licensed under the MIT License (see [LICENSE](LICENSE)), which means you can use it, modify it, share it, whatever you need!

**Best part?** Your data never leaves your device. Everything is stored locally in your browser - no servers, no tracking, no accounts needed!

## 🚀 How to Use It?

### Online (Easiest!)

Just visit the deployed website and you're ready to go! After your first visit, it'll work even without internet.

### Want to Host It Yourself?

Super easy! You can deploy it to GitHub Pages for free:

1. Fork or download this repository
2. Upload all files to a new GitHub repository
3. Go to Settings → Pages → Enable GitHub Pages
4. Visit your URL: `https://yourusername.github.io/repository-name/`
5. That's it! 🎉

**Or just open `index.html` in your browser** - it works locally too!

### Using the App

1. **Login**: Use password (you only need to do this once) (honestly we could remove this, but its john316) it's just to prevent bot traffic.
2. **Set Your Profile**: Add your name and area (used for PDF filenames)
3. **Add Expenses**: Click "Add Expense," fill in the details, choose a category
4. **Add Receipts**: Upload photos or take pictures with your phone's camera
5. **Generate PDF**: Click the big green button and download your report!

**Pro tip:** The app remembers everything locally, so you can work on your report over several days if needed!


## 🛠️ For Developers

Want to customize this for your organization? Go for it! Here's what you need to know:

### Tech Stack
- Pure HTML/CSS/JavaScript (no build tools needed!)
- Tailwind CSS for styling
- jsPDF for PDF generation
- Service Workers for offline support
- LocalStorage for data persistence

### Customization Ideas
- Modify the driving rate in `app.js` (line 134)
- Add more languages in `i18n.js`
- Change colors in `index.html` Tailwind config

### File Structure
```
├── index.html          # Main app structure
├── styles.css          # Custom styling & dark mode
├── app.js              # Core functionality
├── i18n.js             # Translations (EN/ES/CA)
├── pdf-generator.js    # PDF creation logic
├── sw.js               # Service worker (offline support)
├── manifest.json       # PWA configuration
└── young-life-5.svg    # YoungLife logo
```

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**TL;DR:** You can use it, modify it, share it, whatever.

## 🙏 Credits

Built with love (and some autistic tendencies) by **Santi** for the YoungLife community.
---

**Remember:** This is a community tool, consider supporting YoungLife's mission at [younglife.org](https://younglife.org)!
