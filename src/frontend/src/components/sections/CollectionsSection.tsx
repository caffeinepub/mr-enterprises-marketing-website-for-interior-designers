import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function CollectionsSection() {
  const collections = [
    {
      title: 'Broadloom Carpets',
      description: 'Wall-to-wall elegance in widths up to 15 feet. Perfect for seamless coverage.',
      image: '/assets/generated/carpet-texture-01.dim_1200x1200.png',
      features: ['Custom widths', 'Unlimited colors'],
    },
    {
      title: 'Modular Carpet Tiles',
      description: 'Versatile and sustainable. Ideal for high-traffic commercial spaces.',
      image: '/assets/generated/carpet-texture-02.dim_1200x1200.png',
      features: ['Mix & match', 'Easy replacement'],
    },
    {
      title: 'Hand-Tufted Luxury',
      description: 'Artisan-crafted statement pieces with premium materials and texture.',
      image: '/assets/generated/carpet-texture-03.dim_1200x1200.png',
      features: ['Bespoke designs', 'Premium materials'],
    },
    {
      title: 'Natural Fibers',
      description: 'Sisal, jute, and wool blends. Organic texture meets sustainability.',
      image: '/assets/generated/carpet-texture-04.dim_1200x1200.png',
      features: ['Eco-friendly', 'Natural textures'],
    },
  ];

  return (
    <section id="collections" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Collections
          </h2>
          <p className="text-base text-muted-foreground">
            Diverse carpet collections for any design vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-soft transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{collection.title}</CardTitle>
                <CardDescription className="text-sm">{collection.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {collection.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
