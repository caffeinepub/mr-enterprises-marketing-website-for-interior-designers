import { useState } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ImageOff, ExternalLink } from 'lucide-react';
import { getPublicAssetUrl } from '@/utils/publicAssetUrl';
import { galleryImages, type GalleryImage } from '@/data/galleryImages';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // Pre-compute all image URLs once to ensure consistency between grid and modal
  const imagesWithUrls = galleryImages.map(image => ({
    ...image,
    src: getPublicAssetUrl(image.src),
  }));

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
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-[18px]">
            Inside MR Enterprises
          </h2>
          <p className="text-base text-muted-foreground">
            These images capture different stages of our carpet projects — from design and material selection to production, finishing, and final installation.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1.5">
          {imagesWithUrls.map((image, index) => (
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
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={() => handleImageError(image.src, image.title)}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <Button asChild size="lg" className="gap-2">
            <a 
              href="https://mrenterprisespnp.com/mr-gallery/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View More
              <ExternalLink size={18} />
            </a>
          </Button>
        </div>

        {/* Visual Divider */}
        <div className="mt-16">
          <hr className="border-t border-border" />
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
                  className="w-full h-auto cursor-pointer"
                  onClick={() => setSelectedImage(null)}
                  onError={() => handleImageError(selectedImage.src, selectedImage.title)}
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
