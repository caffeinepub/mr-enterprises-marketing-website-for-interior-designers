import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X } from 'lucide-react';

type Category = 'All' | 'Broadloom' | 'Modular' | 'Hand-Tufted' | 'Natural Fibers';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: Category;
}

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories: Category[] = ['All', 'Broadloom', 'Modular', 'Hand-Tufted', 'Natural Fibers'];

  const galleryImages: GalleryImage[] = [
    {
      src: '/assets/generated/carpet-texture-01.dim_1200x1200.png',
      alt: 'Geometric weave pattern carpet',
      title: 'Geometric Weave',
      category: 'Broadloom',
    },
    {
      src: '/assets/generated/carpet-texture-02.dim_1200x1200.png',
      alt: 'Modern stripe pattern carpet',
      title: 'Modern Stripe',
      category: 'Modular',
    },
    {
      src: '/assets/generated/carpet-texture-03.dim_1200x1200.png',
      alt: 'Subtle organic pattern carpet',
      title: 'Organic Pattern',
      category: 'Hand-Tufted',
    },
    {
      src: '/assets/generated/carpet-texture-04.dim_1200x1200.png',
      alt: 'Classic motif carpet',
      title: 'Classic Motif',
      category: 'Natural Fibers',
    },
    {
      src: '/assets/generated/carpet-texture-01.dim_1200x1200.png',
      alt: 'Textured broadloom carpet',
      title: 'Textured Elegance',
      category: 'Broadloom',
    },
    {
      src: '/assets/generated/carpet-texture-02.dim_1200x1200.png',
      alt: 'Contemporary modular tile',
      title: 'Contemporary Tile',
      category: 'Modular',
    },
    {
      src: '/assets/generated/carpet-texture-03.dim_1200x1200.png',
      alt: 'Artisan hand-tufted design',
      title: 'Artisan Design',
      category: 'Hand-Tufted',
    },
    {
      src: '/assets/generated/carpet-texture-04.dim_1200x1200.png',
      alt: 'Natural sisal texture',
      title: 'Natural Sisal',
      category: 'Natural Fibers',
    },
    {
      src: '/assets/generated/carpet-texture-01.dim_1200x1200.png',
      alt: 'Luxury broadloom pattern',
      title: 'Luxury Pattern',
      category: 'Broadloom',
    },
    {
      src: '/assets/generated/carpet-texture-02.dim_1200x1200.png',
      alt: 'Modular carpet tile design',
      title: 'Modular Design',
      category: 'Modular',
    },
    {
      src: '/assets/generated/carpet-texture-03.dim_1200x1200.png',
      alt: 'Custom hand-tufted piece',
      title: 'Custom Piece',
      category: 'Hand-Tufted',
    },
    {
      src: '/assets/generated/carpet-texture-04.dim_1200x1200.png',
      alt: 'Jute blend carpet',
      title: 'Jute Blend',
      category: 'Natural Fibers',
    },
    {
      src: '/assets/generated/carpet-texture-01.dim_1200x1200.png',
      alt: 'Plush broadloom carpet',
      title: 'Plush Comfort',
      category: 'Broadloom',
    },
    {
      src: '/assets/generated/carpet-texture-02.dim_1200x1200.png',
      alt: 'Geometric modular tiles',
      title: 'Geometric Tiles',
      category: 'Modular',
    },
    {
      src: '/assets/generated/carpet-texture-03.dim_1200x1200.png',
      alt: 'Bespoke hand-tufted rug',
      title: 'Bespoke Rug',
      category: 'Hand-Tufted',
    },
    {
      src: '/assets/generated/carpet-texture-04.dim_1200x1200.png',
      alt: 'Wool blend natural fiber',
      title: 'Wool Blend',
      category: 'Natural Fibers',
    },
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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
                  className="group relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white font-semibold text-sm">{image.title}</p>
                      <p className="text-white/80 text-xs">{image.category}</p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto"
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
