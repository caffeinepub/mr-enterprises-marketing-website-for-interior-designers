import { Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT, buildWhatsAppUrl } from '@/config/contact';

export function ContactCtaSection() {
  const whatsappUrl = buildWhatsAppUrl('Hi, I would like to get in touch with MR Enterprises.');
  const mapsUrl = CONTACT.location.directionsUrl;

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="w-full px-6 md:container md:mx-auto md:px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold leading-tight text-center mb-[18px]" data-testid="contact-heading">
              Design Bold,
              <br />
              We will handle the rest.
            </h2>
            <p className="text-base text-muted-foreground text-center" data-testid="contact-tagline">
              Ready to start your custom carpet project?
              <br />
              Get in touch with us today.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Phone Card */}
            <div className="p-6 rounded-lg border border-border bg-card hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href={`tel:${CONTACT.phone.tel}`}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {CONTACT.phone.display}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-lg border border-border bg-card hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    {CONTACT.location.display}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="px-8 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="px-8 w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>

          {/* Footer Attribution */}
          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'mr-enterprises')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-accent transition-colors"
              >
                caffeine.ai
              </a>
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © {new Date().getFullYear()} MR Enterprises. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
