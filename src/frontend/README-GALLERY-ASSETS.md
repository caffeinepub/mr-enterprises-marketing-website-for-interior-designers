# Gallery Asset Replacement Guide

This guide explains how to replace all gallery images in the MR Enterprises website using a .zip file.

## Overview

The gallery system uses a **single source of truth** approach:
- All gallery image metadata is defined in `frontend/src/data/galleryImages.ts`
- Images are served as static assets from `frontend/public/assets/`
- The app automatically handles URL encoding for filenames with spaces and special characters

## Step-by-Step Workflow

### 1. Prepare Your Images

Extract your .zip file containing the new gallery images to a temporary location on your computer.

**Recommended image specifications:**
- Format: JPEG or PNG
- Aspect ratio: 9:16 (portrait) for best grid display
- Recommended dimensions: 1200×1600px or similar
- File size: Optimize for web (typically 200-800KB per image)

### 2. Copy Images to the Project

Copy all extracted images into the `frontend/public/assets/gallery/` directory.

