# Specification

## Summary
**Goal:** Publish the current MR Enterprises draft marketing site to the live/public Internet Computer (IC) mainnet environment.

**Planned changes:**
- Follow `frontend/DEPLOYMENT.md` to create a production build (`npm run build`) and confirm `dist/` output.
- Deploy the frontend canister to IC mainnet (`dfx deploy --network ic`).
- Verify the live canister site loads publicly and key sections/features work (sections render, smooth-scroll nav, images, contact links, mobile menu, light/dark themes, gallery filter + modal/lightbox, CTAs).

**User-visible outcome:** The MR Enterprises marketing website is accessible on its live IC canister URL without preview/authentication, with all primary sections and interactions working as in the draft.
