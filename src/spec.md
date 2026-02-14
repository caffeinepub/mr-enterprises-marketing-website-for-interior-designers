# Specification

## Summary
**Goal:** Make the Custom Carpets CTA image render as a full-bleed, cover-style image with sharp corners.

**Planned changes:**
- Update only the specified `<img>` element in `frontend/src/components/sections/CustomCarpetsCtaSection.tsx` to span edge-to-edge across the viewport (no left/right margins).
- Apply cover-style fitting to the image (cropping as needed without distortion).
- Ensure the image itself has no corner rounding (sharp edges).

**User-visible outcome:** The Custom Carpets CTA image displays full-width across all breakpoints, behaves like a cover image, and shows sharp (non-rounded) corners.
