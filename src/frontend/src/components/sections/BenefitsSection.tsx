import { Sparkles, Shield, Volume2, Leaf } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Visual Warmth',
      description: 'Texture that elevates the space. Rich surfaces and refined patterns that add depth, comfort, and a sense of luxury to interiors.',
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Commercial-grade durability. Engineered for high-traffic residential and commercial spaces without compromising on design.',
    },
    {
      icon: Volume2,
      title: 'Acoustic Comfort',
      description: 'Quieter, calmer interiors. Softens sound and reduces echo—ideal for hotels, offices, lounges, and living spaces.',
    },
    {
      icon: Leaf,
      title: 'Sustainable',
      description: 'Thoughtfully sourced, future-ready. Eco-conscious materials and low-VOC options aligned with modern sustainability standards.',
    },
  ];

  return (
    <section id="benefits" className="py-12 md:py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight">
            Why Interior Designers Choose Our Carpets
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Designed for projects where aesthetics, performance, and reliability matter.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="group max-w-[180px] mx-auto">
              <div className="w-14 h-14 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 md:mb-3 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="text-accent" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-1 leading-snug text-center">{benefit.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-justify">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
