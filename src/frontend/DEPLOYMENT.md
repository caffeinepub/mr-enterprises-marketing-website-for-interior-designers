# MR Enterprises - Deployment Guide

## Publishing to IC Mainnet

This document describes how to deploy the MR Enterprises marketing site to the Internet Computer mainnet.

### Prerequisites

- DFX CLI installed and configured
- Internet Computer wallet with cycles for deployment
- All draft changes tested and verified locally

### Deployment Steps

#### 1. Verify Static Assets

Before building, ensure all gallery images are present in the correct location:

**Required gallery assets in `frontend/public/assets/`:**
- `WhatsApp Image 2026-02-08 at 5.43.17 PM-1.jpeg`
- `WhatsApp Image 2026-02-08 at 5.43.18 PM-1.jpeg`

**Required gallery assets in `frontend/public/assets/gallery/`:**
- `WhatsApp Image 2026-02-10 at 1.25.31 AM.jpeg`
- `WhatsApp Image 2026-02-10 at 1.25.32 AM (1).jpeg`
- `WhatsApp Image 2026-02-10 at 1.25.33 AM (1).jpeg`
- `WhatsApp Image 2026-02-10 at 1.25.34 AM.jpeg`

**Note:** Filenames contain spaces and special characters. The app uses proper URL encoding to handle these automatically.

**Verification command:**
