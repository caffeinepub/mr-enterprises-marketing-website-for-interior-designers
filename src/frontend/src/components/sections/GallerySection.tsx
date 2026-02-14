import { useState } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X, ImageOff } from 'lucide-react';
import { getPublicAssetUrl } from '@/utils/publicAssetUrl';

type Category = 'All' | 'Hand-Tufted' | 'Traditional' | 'Contemporary' | 'Manufacturing';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: Category;
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // Pre-compute all image URLs once to ensure consistency between grid and modal
  const galleryImages: GalleryImage[] = [
    {
      src: getPublicAssetUrl('WhatsApp Image 2026-02-08 at 5.43.18 PM-1.jpeg'),
      alt: 'Contemporary black and white geometric carpet design',
      title: 'Modern Geometric',
      category: 'Contemporary',
    },
    {
      src: getPublicAssetUrl('gallery/WhatsApp Image 2026-02-10 at 1.25.31 AM.jpeg'),
      alt: 'Elegant hand-tufted carpet with intricate patterns',
      title: 'Premium Hand-Tufted',
      category: 'Hand-Tufted',
    },
    {
      src: getPublicAssetUrl('gallery/WhatsApp Image 2026-02-10 at 1.25.32 AM (1).jpeg'),
      alt: 'Traditional carpet with classic design elements',
      title: 'Classic Traditional',
      category: 'Traditional',
    },
    {
      src: getPublicAssetUrl('gallery/WhatsApp Image 2026-02-10 at 1.25.34 AM.jpeg'),
      alt: 'Contemporary carpet with modern aesthetic',
      title: 'Modern Contemporary',
      category: 'Contemporary',
    },
    {
      src: getPublicAssetUrl('gallery/WhatsApp Image 2026-02-10 at 1.25.33 AM (1).jpeg'),
      alt: 'Traditional carpet with timeless patterns',
      title: 'Heritage Traditional',
      category: 'Traditional',
    },
    {
      src: getPublicAssetUrl('WhatsApp Image 2026-02-08 at 5.43.17 PM-1.jpeg'),
      alt: 'Artisans hand-tufting carpet',
      title: 'Craftsmanship in Action',
      category: 'Manufacturing',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-07.dim_1200x1600.jpg'),
      alt: 'Contemporary carpet with bold geometric pattern and high contrast lighting',
      title: 'Bold Geometry',
      category: 'Contemporary',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-08.dim_1200x1600.jpg'),
      alt: 'Contemporary carpet with subtle gradient and minimal pattern',
      title: 'Subtle Gradient',
      category: 'Contemporary',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-09.dim_1200x1600.jpg'),
      alt: 'Contemporary carpet with modern abstract shapes in warm neutral palette',
      title: 'Abstract Modern',
      category: 'Contemporary',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-10.dim_1200x1600.jpg'),
      alt: 'Traditional carpet with ornate medallion motif in rich reds and golds',
      title: 'Ornate Medallion',
      category: 'Traditional',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-11.dim_1200x1600.jpg'),
      alt: 'Traditional carpet with repeating floral vines in deep navy and cream',
      title: 'Floral Vines',
      category: 'Traditional',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-12.dim_1200x1600.jpg'),
      alt: 'Traditional carpet with classic border frame and dense patterning',
      title: 'Classic Border',
      category: 'Traditional',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-13.dim_1200x1600.jpg'),
      alt: 'Hand-tufted carpet close-up showing high pile texture and fiber detail',
      title: 'Textured Pile',
      category: 'Hand-Tufted',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-14.dim_1200x1600.jpg'),
      alt: 'Hand-tufted artisanal pattern with visible tufting depth',
      title: 'Artisanal Craft',
      category: 'Hand-Tufted',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-15.dim_1200x1600.jpg'),
      alt: 'Hand-tufted modern motif with tactile texture',
      title: 'Modern Tufted',
      category: 'Hand-Tufted',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-16.dim_1200x1600.jpg'),
      alt: 'Carpet weaving machine detail in industrial setting',
      title: 'Weaving Process',
      category: 'Manufacturing',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-17.dim_1200x1600.jpg'),
      alt: 'Yarn cones and spools in factory with orderly rows',
      title: 'Yarn Preparation',
      category: 'Manufacturing',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-18.dim_1200x1600.jpg'),
      alt: 'Artisan hands working on carpet finishing',
      title: 'Finishing Touch',
      category: 'Manufacturing',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-19.dim_1200x1600.jpg'),
      alt: 'Contemporary neutral texture with subtle linear pattern',
      title: 'Neutral Elegance',
      category: 'Contemporary',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-20.dim_1200x1600.jpg'),
      alt: 'Traditional-inspired pattern in muted earth tones',
      title: 'Earth Tones',
      category: 'Traditional',
    },
    {
      src: getPublicAssetUrl('generated/gallery-work-21.dim_1200x1600.jpg'),
      alt: 'Quality inspection scene with measuring tools and carpet surface detail',
      title: 'Quality Control',
      category: 'Manufacturing',
    },
    {
      src: getPublicAssetUrl('WhatsApp Image 2026-02-10 at 1.25.31 AM-1.jpeg'),
      alt: 'Premium carpet installation showcasing quality craftsmanship',
      title: 'Premium Installation',
      category: 'Manufacturing',
    },
    {
      src: getPublicAssetUrl('WhatsApp Image 2026-02-10 at 1.25.32 AM (1)-1.jpeg'),
      alt: 'Elegant traditional carpet with refined detailing',
      title: 'Refined Traditional',
      category: 'Traditional',
    },
    {
      src: getPublicAssetUrl('WhatsApp Image 2026-02-10 at 1.25.32 AM-1.jpeg'),
      alt: 'Contemporary carpet design with modern appeal',
      title: 'Modern Appeal',
      category: 'Contemporary',
    },
    {
      src: getPublicAssetUrl('gallery/WhatsApp Image 2026-02-10 at 1.25.33 AM.jpeg'),
      alt: 'Hand-tufted carpet showcasing artisan techniques',
      title: 'Artisan Techniques',
      category: 'Hand-Tufted',
    },
    {
      src: getPublicAssetUrl('WhatsApp Image 2026-02-10 at 1.25.34 AM-1.jpeg'),
      alt: 'Contemporary carpet with innovative design elements',
      title: 'Innovative Design',
      category: 'Contemporary',
    },
  ];

  const handleImageError = (src: string, title: string) => {
    console.error(`[Gallery] Failed to load image: "${title}"`, {
      url: src,
      title: title,
      timestamp: new Date().toISOString()
    });
    setImageErrors(prev => new Set(prev).add(src));
  };

  const isImageError = (src: string) => imageErrors.has(src);

  return (
    <section id="gallery" className="py-20 bg-secondary/10">
      <div className="w-full px-6 md:container md:mx-auto md:px-4">
        <div className="content-wrapper-mobile text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Inside MR Enterprises
          </h2>
          <p className="text-base text-muted-foreground">
            These images capture different stages of our carpet projects — from design and material selection to production, finishing, and final installation.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[9/16] overflow-hidden rounded-lg cursor-pointer bg-muted"
              onClick={() => setSelectedImage(image)}
            >
              {isImageError(image.src) ? (
                <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                  <ImageOff size={32} className="mb-2" />
                  <p className="text-xs text-center px-2">Image unavailable</p>
                </div>
              ) : (
                <>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => handleImageError(image.src, image.title)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white font-semibold text-sm">{image.title}</p>
                      <p className="text-white/80 text-xs">{image.category}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          Showing {galleryImages.length} of {galleryImages.length} items
        </div>
      </div>

      {/* Single Controlled Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <DialogClose asChild>
                <button
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </DialogClose>
              {isImageError(selectedImage.src) ? (
                <div className="w-full h-96 flex flex-col items-center justify-center text-muted-foreground bg-muted">
                  <ImageOff size={48} className="mb-4" />
                  <p className="text-lg">Image unavailable</p>
                </div>
              ) : (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto"
                  onError={() => handleImageError(selectedImage.src, selectedImage.title)}
                />
              )}
              <div className="p-6 bg-background">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground mb-2">{selectedImage.category}</p>
                <p className="text-sm text-muted-foreground">{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
