# MR Enterprises - Deployment Guide

## Publishing to IC Mainnet

This document describes how to deploy the MR Enterprises marketing site to the Internet Computer mainnet.

### Prerequisites

- DFX CLI installed and configured
- Internet Computer wallet with cycles for deployment
- All draft changes tested and verified locally

### Deployment Steps

#### 1. Verify Static Assets

Before building, ensure all gallery images are present and correctly referenced.

**Gallery Asset Management:**

The gallery uses a single source of truth system. All gallery images are defined in:
- **Data module:** `frontend/src/data/galleryImages.ts`
- **Storage location:** `frontend/public/assets/` (typically in `assets/gallery/` subdirectory)

**To verify gallery assets:**

