import { Sparkles, Shield, Volume2, Leaf } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Visual Warmth',
      description: 'Transform spaces with texture and luxury.',
    },
    {
      icon: Shield,
      title: 'Durability',
      description: 'Commercial-grade construction for lasting beauty.',
    },
    {
      icon: Volume2,
      title: 'Acoustic Quality',
      description: 'Reduce noise and improve ambiance.',
    },
    {
      icon: Leaf,
      title: 'Sustainable',
      description: 'Eco-conscious materials and low-VOC options.',
    },
  ];

  return (
    <section id="benefits" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Carpets
          </h2>
          <p className="text-base text-muted-foreground">
            Quality design tools that enhance aesthetics and deliver lasting value.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="text-accent" size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
