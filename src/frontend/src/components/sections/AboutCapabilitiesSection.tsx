import { Award, Clock, Palette, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AboutCapabilitiesSection() {
  const capabilities = [
    {
      icon: Award,
      title: 'Expert Craftsmanship',
      description: '30+ years of manufacturing excellence with skilled artisans.',
    },
    {
      icon: Palette,
      title: 'Custom Solutions',
      description: 'Unlimited color matching and bespoke designs.',
    },
    {
      icon: Clock,
      title: 'Designer-Friendly',
      description: 'Fast sampling and flexible project timelines.',
    },
    {
      icon: Users,
      title: 'Full Support',
      description: 'Technical documentation and on-site consultation.',
    },
  ];

  return (
    <section id="about" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Your Manufacturing Partner
          </h2>
          <p className="text-base text-muted-foreground">
            We bring design visions to reality with quality craftsmanship and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {capabilities.map((capability, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-5 pb-5 text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                  <capability.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-1">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
