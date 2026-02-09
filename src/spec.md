# Specification

## Summary
**Goal:** Fix missing/blank Gallery photos in production by correcting static asset paths and ensuring the deployed build serves the 9 uploaded JPEGs, with a clear UI fallback for any failed image loads.

**Planned changes:**
- Verify the 9 intended JPEG photos exist under the deployable frontend public assets directory and update the Gallery section to reference their exact static paths (e.g., `/assets/gallery/...jpeg`) so they load in production.
- Ensure the Gallery continues to display only the 9 uploaded JPEG photos (and not older generated texture images).
- Add a visible “Image unavailable” fallback state for any Gallery image that fails to load, without changing existing hover overlay or modal behavior.
- Re-run the production build and redeploy so the fixes are live.

**User-visible outcome:** The live site’s Gallery shows 9 working thumbnails (no blank/broken images); clicking opens the full-size modal image, and any missing image shows an “Image unavailable” placeholder instead of an empty space.
