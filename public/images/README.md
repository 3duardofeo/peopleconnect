# Images Folder

This folder is for storing profile pictures and other images for your People Connect app.

## How to Add Images:

1. **Add your image files** to this folder (e.g., `eduardo.jpg`, `marina.png`)
2. **Update the person data** in `src/data/peopleData.js`:
   ```javascript
   {
     id: 16,
     name: "Eduardo Feo",
     // ... other fields
     avatar: "/images/eduardo.jpg"  // Reference your image here
   }
   ```

## Supported Formats:
- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.webp`

## Recommended Image Specs:
- **Size**: 150x150 pixels (square)
- **Format**: JPG or PNG
- **Quality**: High resolution for crisp display
- **Style**: Professional headshots work best

## Example Usage:
```javascript
// In peopleData.js
{
  name: "Eduardo Feo",
  avatar: "/images/eduardo.jpg"  // Points to public/images/eduardo.jpg
}
```

## Notes:
- Images in the `public` folder are served directly by the web server
- Use `/images/filename.jpg` in your avatar URLs
- The app will automatically fall back to initials if an image fails to load
