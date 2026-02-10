import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToGallery = () => {
    const element = document.querySelector('#gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/carpet-hero-banner-04-more-minimal-notext.dim_1600x900.png"
          alt="Premium carpet texture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance leading-tight text-zinc-700">
            MR Enterprises - Premium Crafted Carpets & Textile Solutions for Interior Designers & Projects
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white font-light">
            Custom sizes, premium quality, project support from concept to delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToGallery} className="px-8">
              View Gallery
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="px-8"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
