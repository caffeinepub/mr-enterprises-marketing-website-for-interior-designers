# Specification

## Summary
**Goal:** Replace the site’s current logo and favicon with the uploaded **MR icon-1.png** image.

**Planned changes:**
- Add **MR icon-1.png** to the frontend public static assets so it’s served under **/assets/**.
- Update the site header to render **MR icon-1.png** as the primary logo (replacing the previous logo asset reference).
- Update the site footer to render **MR icon-1.png** as the logo (replacing the previous logo asset reference).
- Update favicon configuration in **frontend/index.html** to reference **MR icon-1.png** under **/assets/** (with correct URL encoding if needed).

**User-visible outcome:** The site header, footer, and browser tab favicon display the MR icon, with no missing-image (404) errors.
