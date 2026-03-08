

Replace the current profile image (`src/assets/profile.png`) with the user's uploaded photo.

**Changes:**
1. Copy `user-uploads://Mubarak_Image_2026-01-10_at_9.01.23_AM.jpeg` to `src/assets/profile.png` (overwrite existing)
2. Update the import in `Hero.tsx` to reference the `.jpeg` extension (or keep `.png` name by copying as `.png`)

Simplest approach: copy the uploaded image to `src/assets/profile.jpg` and update the import in `Hero.tsx`.

