# Specification

## Summary
**Goal:** Ensure the Contact CTA tagline updates correctly to the requested copy and stays centered as exactly two lines across all breakpoints, with stable test hooks for verification.

**Planned changes:**
- Update only the selected Contact CTA `<h2>` text to `Designed by you,` and the selected `<p>` text to `Executed by Us.`.
- Ensure both selected lines render center-aligned on mobile and desktop without any breakpoint-specific left alignment.
- Add unique `data-testid` attributes to only the selected `<h2>` and `<p>` elements to make the change verifiable in the deployed UI.

**User-visible outcome:** In the Contact CTA section, users see a two-line centered tagline reading “Designed by you,” and “Executed by Us.” on all screen sizes, and the elements can be reliably targeted in UI tests.
