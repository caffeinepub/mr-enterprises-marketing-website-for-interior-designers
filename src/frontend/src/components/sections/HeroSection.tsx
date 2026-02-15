import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { buildWhatsAppUrl } from '@/config/contact';

export function HeroSection() {
  const scrollToGallery = () => {
    const element = document.querySelector('#gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = buildWhatsAppUrl('Hi, I would like to start a project with MR Enterprises.');

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
      <div className="w-full px-6 md:container md:mx-auto md:px-4 relative z-10 pt-20">
        <div className="w-full md:max-w-2xl md:mx-auto text-center">
          <h1 className="text-xl md:text-3xl font-bold mb-8 text-balance leading-tight text-white tracking-normal">
            - MR Enterprises -
            <br />
            Carpet Manufacturing Partner for
            <br />
            Interior Designers | Hotels | Commercial Projects
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToGallery} className="px-8 w-full sm:w-auto font-bold">
              View our Work
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="px-8 w-full sm:w-auto font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start A Project
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
