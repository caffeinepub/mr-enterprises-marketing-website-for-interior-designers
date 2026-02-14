import { useMemo } from 'react';
import { getPublicAssetUrl } from '@/utils/publicAssetUrl';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/config/contact';

interface Collection {
  title: string;
  description: string;
  tags: string[];
  thumbnailPool: string[];
  fixedThumbnail?: string;
}

export function CollectionsSection() {
  const collections: Collection[] = [
    {
      title: 'Machine-Made Carpet Rolls',
      description: 'Efficient. Consistent. Project-friendly. Wall-to-wall carpet rolls ideal for large areas, offering uniform finish, reliable lead times, and cost efficiency for scale projects.',
      tags: ['Custom widths', 'Consistent quality', 'Bulk supply'],
      thumbnailPool: [],
      fixedThumbnail: 'generated/machine-made-roll-thumb.dim_1200x675.png',
    },
    {
      title: 'Modular Carpet Tiles',
      description: 'Flexible layouts, easy maintenance. Perfect for offices and commercial spaces where design flexibility, replacement ease, and durability matter.',
      tags: ['Mix & match', 'Easy replacement', 'Commercial use'],
      thumbnailPool: [
        'generated/tiles-thumb-01.dim_1200x675.png',
        'generated/tiles-thumb-02.dim_1200x675.png',
        'generated/tiles-thumb-03.dim_1200x675.png',
      ],
    },
    {
      title: 'Handmade Carpets',
      description: 'Crafted character for signature spaces. Handmade carpets developed with attention to texture, material, and detailing—ideal for bespoke residential and hospitality projects.',
      tags: ['Custom designs', 'Wool & viscose', 'Premium finish'],
      thumbnailPool: [
        'generated/handtufted-thumb-01.dim_1200x675.png',
        'generated/handtufted-thumb-02.dim_1200x675.png',
        'generated/handtufted-thumb-03.dim_1200x675.png',
      ],
    },
    {
      title: 'Jute Carpets',
      description: 'Natural texture, sustainable appeal. Eco-conscious jute carpets that bring warmth and organic character to modern interiors.',
      tags: ['Natural fiber', 'Sustainable', 'Earthy aesthetics'],
      thumbnailPool: [
        'generated/natural-thumb-01.dim_1200x675.png',
        'generated/natural-thumb-02.dim_1200x675.png',
        'generated/natural-thumb-03.dim_1200x675.png',
      ],
    },
  ];

  // Select one random thumbnail per collection on mount (stable across re-renders)
  const selectedThumbnails = useMemo(() => {
    return collections.map((collection) => {
      if (collection.fixedThumbnail) {
        return getPublicAssetUrl(collection.fixedThumbnail);
      }
      const randomIndex = Math.floor(Math.random() * collection.thumbnailPool.length);
      return getPublicAssetUrl(collection.thumbnailPool[randomIndex]);
    });
  }, []);

  return (
    <section id="collections" className="py-20 bg-background">
      <div className="w-full px-6 md:container md:mx-auto md:px-4">
        <div className="content-wrapper-mobile text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Carpet Collections for Design-Led Projects
          </h2>
          <p className="text-base text-muted-foreground">
            Manufactured to suit residential, hospitality, and commercial interiors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={selectedThumbnails[index]}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">{collection.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {collection.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {collection.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="w-full"
                >
                  <a href={`mailto:${CONTACT.email}?subject=Inquiry about ${collection.title}`}>
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
