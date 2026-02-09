import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X, ImageOff } from 'lucide-react';

type Category = 'All' | 'Hand-Tufted' | 'Traditional' | 'Contemporary' | 'Manufacturing';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: Category;
}

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const categories: Category[] = ['All', 'Hand-Tufted', 'Traditional', 'Contemporary', 'Manufacturing'];

  const galleryImages: GalleryImage[] = [
    {
      src: '/assets/gallery/WhatsApp Image 2026-02-10 at 1.25.31 AM.jpeg',
      alt: 'Elegant hand-tufted carpet with intricate patterns',
      title: 'Premium Hand-Tufted',
      category: 'Hand-Tufted',
    },
    {
      src: '/assets/gallery/WhatsApp Image 2026-02-10 at 1.25.32 AM (1).jpeg',
      alt: 'Traditional carpet with classic design elements',
      title: 'Classic Traditional',
      category: 'Traditional',
    },
    {
      src: '/assets/gallery/WhatsApp Image 2026-02-10 at 1.25.32 AM.jpeg',
      alt: 'Contemporary carpet with modern aesthetic',
      title: 'Modern Contemporary',
      category: 'Contemporary',
    },
    {
      src: '/assets/gallery/WhatsApp Image 2026-02-10 at 1.25.33 AM (1).jpeg',
      alt: 'Manufacturing process showing carpet creation',
      title: 'Craftsmanship in Action',
      category: 'Manufacturing',
    },
    {
      src: '/assets/gallery/WhatsApp Image 2026-02-10 at 1.25.33 AM.jpeg',
      alt: 'Hand-tufted carpet showcasing artisan quality',
      title: 'Artisan Hand-Tufted',
      category: 'Hand-Tufted',
    },
    {
      src: '/assets/gallery/WhatsApp Image 2026-02-10 at 1.25.34 AM.jpeg',
      alt: 'Traditional carpet with timeless patterns',
      title: 'Heritage Traditional',
      category: 'Traditional',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-08 at 5.39.22 PM.jpeg',
      alt: 'Artisans hand-tufting large decorative carpet',
      title: 'Hand-Tufting Process',
      category: 'Manufacturing',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-08 at 5.35.08 PM.jpeg',
      alt: 'Elegant traditional carpet in luxury setting',
      title: 'Luxury Living Room',
      category: 'Traditional',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-08 at 5.39.23 PM.jpeg',
      alt: 'Hand-tufted carpet with gold and burgundy patterns',
      title: 'Gold & Burgundy Elegance',
      category: 'Hand-Tufted',
    },
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleImageError = (src: string) => {
    setImageErrors(prev => new Set(prev).add(src));
  };

  const isImageError = (src: string) => imageErrors.has(src);

  return (
    <section id="gallery" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse our portfolio of carpet designs. Click any image to view details.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer bg-muted"
                  onClick={() => setSelectedImage(image.src)}
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
                        onError={() => handleImageError(image.src)}
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
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
                <div className="relative">
                  {isImageError(image.src) ? (
                    <div className="w-full h-96 flex flex-col items-center justify-center bg-muted text-muted-foreground">
                      <ImageOff size={64} className="mb-4" />
                      <p className="text-lg">Image unavailable</p>
                      <p className="text-sm mt-2">{image.title}</p>
                    </div>
                  ) : (
                    <>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto"
                        onError={() => handleImageError(image.src)}
                      />
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                        aria-label="Close"
                      >
                        <X size={20} />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 to-transparent">
                        <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                        <p className="text-sm text-muted-foreground">{image.category}</p>
                      </div>
                    </>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm">
            Showing {filteredImages.length} of {galleryImages.length} items
          </p>
        </div>
      </div>
    </section>
  );
}
