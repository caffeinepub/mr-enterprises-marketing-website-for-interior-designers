import { useMemo } from 'react';
import { getPublicAssetUrl } from '@/utils/publicAssetUrl';

interface Collection {
  title: string;
  description: string;
  features: string[];
  thumbnailPool: string[];
}

export function CollectionsSection() {
  const collections: Collection[] = [
    {
      title: 'Broadloom Carpets',
      description: 'Wall-to-wall elegance in widths up to 15 feet. Perfect for seamless coverage.',
      features: ['Custom widths', 'Unlimited colors'],
      thumbnailPool: [
        'generated/broadloom-thumb-02.dim_1200x675.png',
        'generated/broadloom-thumb-03.dim_1200x675.png',
      ],
    },
    {
      title: 'Modular Carpet Tiles',
      description: 'Flexible design solutions with easy installation and maintenance.',
      features: ['Mix & match', 'Easy replacement'],
      thumbnailPool: [
        'generated/tiles-thumb-01.dim_1200x675.png',
        'generated/tiles-thumb-02.dim_1200x675.png',
        'generated/tiles-thumb-03.dim_1200x675.png',
      ],
    },
    {
      title: 'Hand-Tufted Rugs',
      description: 'Artisanal craftsmanship meets contemporary design.',
      features: ['Custom designs', 'Premium materials'],
      thumbnailPool: [
        'generated/handtufted-thumb-01.dim_1200x675.png',
        'generated/handtufted-thumb-02.dim_1200x675.png',
        'generated/handtufted-thumb-03.dim_1200x675.png',
      ],
    },
    {
      title: 'Natural Fiber Carpets',
      description: 'Sustainable elegance with sisal, jute, and seagrass options.',
      features: ['Eco-friendly', 'Durable'],
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
      const randomIndex = Math.floor(Math.random() * collection.thumbnailPool.length);
      return getPublicAssetUrl(collection.thumbnailPool[randomIndex]);
    });
  }, []); // Empty deps = run once on mount

  return (
    <section id="collections" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Diverse carpet collections
          </h2>
          <p className="text-lg text-muted-foreground">
            From wall-to-wall broadloom to modular tiles, we offer versatile solutions for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={selectedThumbnails[index]}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                <p className="text-muted-foreground mb-4">{collection.description}</p>
                <div className="flex flex-wrap gap-2">
                  {collection.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
