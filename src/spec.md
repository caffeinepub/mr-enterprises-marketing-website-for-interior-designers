# Specification

## Summary
**Goal:** Remove 6 specific images from the Gallery grid so they no longer appear and the grid reflows without empty slots.

**Planned changes:**
- Remove the 6 specified image `src` entries from `frontend/src/data/galleryImages.ts` so they no longer render in the Gallery grid.
- Ensure the Gallery grid reflows naturally with no blank placeholders and the modal viewer continues to work for remaining images.

**User-visible outcome:** The Gallery section no longer shows the 6 selected images; the remaining images shift to fill the grid normally, and clicking images still opens/closes the modal viewer as before.
