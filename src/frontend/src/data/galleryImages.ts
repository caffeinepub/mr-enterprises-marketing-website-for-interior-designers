/**
 * Gallery Images Data Module
 * 
 * Single source of truth for all gallery image metadata.
 * To replace gallery images:
 * 1. Extract your .zip file
 * 2. Copy all images to frontend/public/assets/gallery/
 * 3. Update this file with the new image paths and metadata
 * 4. Rebuild and deploy
 * 
 * Note: Paths are relative to /assets/ and will be URL-encoded automatically.
 * Filenames with spaces and special characters are fully supported.
 */

export type Category = 'All' | 'Hand-Tufted' | 'Traditional' | 'Contemporary' | 'Manufacturing';

export interface GalleryImage {
  src: string; // Path relative to /assets/ (e.g., "gallery/image.jpg")
  alt: string;
  title: string;
  category: Category;
}

/**
 * Gallery image collection
 * Edit this array to update the gallery with new images
 */
export const galleryImages: GalleryImage[] = [
  {
    src: 'WhatsApp Image 2026-02-08 at 5.43.18 PM-1.jpeg',
    alt: 'Contemporary black and white geometric carpet design',
    title: 'Modern Geometric',
    category: 'Contemporary',
  },
  {
    src: 'WhatsApp Image 2026-01-07 at 10.26.52 PM.jpeg',
    alt: 'Solid brown hand-tufted carpet with plush texture',
    title: 'Plush Brown Carpet',
    category: 'Hand-Tufted',
  },
  {
    src: 'WhatsApp Image 2026-02-11 at 4.24.47 PM.jpeg',
    alt: 'Close-up of textured carpet surface with pen for scale',
    title: 'Carpet Texture Detail',
    category: 'Manufacturing',
  },
  {
    src: 'Ref. Image 5.jpeg',
    alt: 'Ornate traditional carpet in auditorium with medallion pattern',
    title: 'Auditorium Carpet Installation',
    category: 'Traditional',
  },
  {
    src: 'Ref. Image 2.jpeg',
    alt: 'Modern geometric carpet in auditorium with hexagonal pattern',
    title: 'Contemporary Auditorium Design',
    category: 'Contemporary',
  },
  {
    src: 'WhatsApp Image 2026-02-08 at 5.43.17 PM-1.jpeg',
    alt: 'Artisans hand-tufting carpet',
    title: 'Craftsmanship in Action',
    category: 'Manufacturing',
  },
  {
    src: 'generated/gallery-work-09.dim_1200x1600.jpg',
    alt: 'Contemporary carpet with modern abstract shapes in warm neutral palette',
    title: 'Abstract Modern',
    category: 'Contemporary',
  },
  {
    src: 'generated/gallery-work-10.dim_1200x1600.jpg',
    alt: 'Traditional carpet with ornate medallion motif in rich reds and golds',
    title: 'Ornate Medallion',
    category: 'Traditional',
  },
  {
    src: 'generated/gallery-work-11.dim_1200x1600.jpg',
    alt: 'Traditional carpet with repeating floral vines in deep navy and cream',
    title: 'Floral Vines',
    category: 'Traditional',
  },
  {
    src: 'generated/gallery-work-12.dim_1200x1600.jpg',
    alt: 'Traditional carpet with classic border frame and dense patterning',
    title: 'Classic Border',
    category: 'Traditional',
  },
  {
    src: 'generated/gallery-work-13.dim_1200x1600.jpg',
    alt: 'Hand-tufted carpet close-up showing high pile texture and fiber detail',
    title: 'Textured Pile',
    category: 'Hand-Tufted',
  },
  {
    src: 'generated/gallery-work-14.dim_1200x1600.jpg',
    alt: 'Hand-tufted artisanal pattern with visible tufting depth',
    title: 'Artisanal Craft',
    category: 'Hand-Tufted',
  },
  {
    src: 'generated/gallery-work-15.dim_1200x1600.jpg',
    alt: 'Hand-tufted modern motif with tactile texture',
    title: 'Modern Tufted',
    category: 'Hand-Tufted',
  },
  {
    src: 'generated/gallery-work-16.dim_1200x1600.jpg',
    alt: 'Carpet weaving machine detail in industrial setting',
    title: 'Weaving Process',
    category: 'Manufacturing',
  },
  {
    src: 'generated/gallery-real-18.dim_1200x1600.jpg',
    alt: 'Artisan hands working on carpet finishing',
    title: 'Finishing Touch',
    category: 'Manufacturing',
  },
  {
    src: 'generated/gallery-real-19.dim_1200x1600.jpg',
    alt: 'Contemporary neutral texture with subtle linear pattern',
    title: 'Neutral Elegance',
    category: 'Contemporary',
  },
  {
    src: 'generated/gallery-work-20.dim_1200x1600.jpg',
    alt: 'Traditional-inspired pattern in muted earth tones',
    title: 'Earth Tones',
    category: 'Traditional',
  },
  {
    src: 'ChatGPT Image Jan 18, 2026, 10_22_42 PM.png',
    alt: 'Luxury staircase with ornate traditional carpet runner',
    title: 'Grand Staircase Installation',
    category: 'Traditional',
  },
  {
    src: 'generated/generated/gallery-random-01.dim_1200x1600.jpg',
    alt: 'Contemporary carpet with bold geometric pattern',
    title: 'Bold Geometric Design',
    category: 'Contemporary',
  },
  {
    src: 'generated/generated/gallery-random-02.dim_1200x1600.jpg',
    alt: 'Traditional ornate carpet with medallion motif',
    title: 'Ornate Medallion',
    category: 'Traditional',
  },
  {
    src: 'generated/generated/gallery-random-03.dim_1200x1600.jpg',
    alt: 'Close-up of hand-tufted carpet texture and fibers',
    title: 'Hand-Tufted Detail',
    category: 'Hand-Tufted',
  },
  {
    src: 'generated/gallery-real-26.dim_1200x1600.jpg',
    alt: 'Yarn spools and cones in textile factory',
    title: 'Yarn Preparation',
    category: 'Manufacturing',
  },
];
