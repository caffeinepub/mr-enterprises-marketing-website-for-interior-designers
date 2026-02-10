# Specification

## Summary
**Goal:** Make the header logo image slightly smaller and visually centered using only the logo `<img>` element’s Tailwind classes.

**Planned changes:**
- In `frontend/src/components/layout/SiteHeader.tsx`, reduce the header logo `<img>` height from `h-12` to a smaller Tailwind height class.
- Update the header logo `<img>` Tailwind classes to center it horizontally (e.g., `block` + `mx-auto`), without changing the surrounding `<a>` or any other header layout elements.

**User-visible outcome:** The header logo appears a bit smaller and centered in the header without any other header layout changes.
