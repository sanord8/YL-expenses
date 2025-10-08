# YoungLife Expense Report Generator

A free, offline-capable web application for generating professional PDF expense reports with receipt attachments. Created for **[YoungLife](https://younglife.org)** volunteers and staff.

## Overview

This tool simplifies expense report submission for YoungLife camps, mission trips, and events. Track expenses and kilometers, upload receipt photos, and generate branded PDFs - all without an internet connection.

**Privacy:** Your data never leaves your device. Everything is stored locally in your browser.

## Quick Start

1. **Login**: Enter password (you can change your hash i'm not sharing mine)
2. **Profile**: Enter your name and select your area
3. **Add Expenses**: Choose department, enter amount and description
4. **Add KM**: Track driving separately with kilometers
5. **Upload Receipts**: Use camera or upload images
6. **Generate PDF**: Download your complete report


## Technical Details

### Tech Stack
- Pure HTML/CSS/JavaScript (no build tools)
- Tailwind CSS for styling
- jsPDF for PDF generation
- Service Workers for offline support
- LocalStorage for data persistence

### Customization
- Modify KM rate in `app.js` (0.26€/km)
- Add translations in `i18n.js`
- Change colors in `index.html` Tailwind config
- Update department list or area codes as needed

### File Structure
```
├── index.html          # Main app structure
├── styles.css          # Custom styling & dark mode
├── app.js              # Core functionality
├── i18n.js             # Translations (EN/ES/CA)
├── pdf-generator.js    # PDF creation logic
├── sw.js               # Service worker
├── manifest.json       # PWA configuration
└── LICENSE             # MIT License
```

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this software.

## Support

This is a community tool for YoungLife volunteers. For issues or questions, please check the code or create an issue in the repository.

Consider supporting YoungLife's mission at [younglife.org](https://younglife.org).
