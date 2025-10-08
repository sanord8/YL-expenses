# Changelog - YoungLife Expense Generator

## v2.1 (Latest) - Mobile Camera & PDF Improvements

### 📸 Camera Capture Feature
- **New**: Take photos directly from your device camera
- **Mobile-Optimized**: Automatically uses back camera on phones
- **Live Preview**: See exactly what you're capturing
- **Retake Option**: Not happy with the photo? Retake it instantly
- **Battery Efficient**: Camera stops after capture to save power
- Works on:
  - iOS Safari (iPhone/iPad)
  - Android Chrome
  - Desktop browsers with webcam

### 📄 Enhanced PDF Generation
- **Fixed**: Logo now displays correctly in PDFs
- **Table Borders**: Professional bordered tables with alternating rows
- **Better Layout**: 2 receipts per page instead of 1
- **Larger Total**: Bold 16pt total amount in green banner
- **Receipt Borders**: Each receipt has a styled border and label
- **Professional Look**: Improved spacing, colors, and typography

### 🎨 UI Improvements
- **Two Clear Options**: "Take Photo" 📸 and "Upload Files" 📁 buttons
- **Better Organization**: Receipt upload section redesigned
- **Visual Feedback**: Pulsing animation on capture button
- **Error Handling**: Clear error messages if camera unavailable

### 🔧 Technical Improvements
- SVG to PNG conversion for logo compatibility with jsPDF
- `getUserMedia` API for camera access
- High-resolution capture (1920x1080)
- Optimized image compression (JPEG 90% quality)

## v2.0 - Major Redesign

### Core Features
- YoungLife brand colors (#003a5b, #91c83e)
- Tailwind CSS framework
- Flatpickr date picker
- User profiles (name + area)
- Smart PDF naming
- PWA with offline support
- Progress indicator
- Drag & drop receipts
- Multi-language (EN/ES/CA)

### Files Structure
```
├── index.html          # UI with camera modal
├── styles.css          # Brand colors + camera styles
├── app.js              # Camera capture logic
├── i18n.js             # Camera translations
├── pdf-generator.js    # Enhanced PDF with logo
├── sw.js               # Offline support
├── manifest.json       # PWA config
├── young-life-5.svg    # Logo
└── README.md           # Documentation
```

## Usage Examples

### Taking a Photo (New!)
1. Click **"Take Photo"** 📸
2. Grant camera permission
3. Point at receipt
4. Click **"Capture"** 📷
5. Review photo
6. Click **"Use Photo"** or **"Retake"**

### Uploading Files
1. Click **"Upload Files"** 📁
2. Select images from device
3. Or drag & drop into the zone

### Generating PDF
1. Add expenses
2. Add receipts (camera or upload)
3. Click **"Generate PDF Report"**
4. PDF downloads as: `YourName-YourArea-gastos-2025-10-08.pdf`

## Browser Compatibility

✅ **Camera Support:**
- iOS Safari 11+
- Android Chrome 53+
- Desktop Chrome/Edge/Firefox
- Safari 11+ (macOS)

⚠️ **HTTPS Required:** Camera only works on:
- localhost (development)
- HTTPS domains (production)

## Known Limitations

- Camera requires HTTPS (except localhost)
- Some older browsers may not support camera
- File upload always available as fallback

## Future Enhancements

- [ ] Front/back camera switch button
- [ ] Flash/torch control
- [ ] Photo filters or adjustments
- [ ] Multiple photos in one session
- [ ] Save drafts locally

---

**Developer**: Santiago
**Version**: 2.1
**Last Updated**: 2025-10-08
