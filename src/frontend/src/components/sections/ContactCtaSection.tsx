import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT, buildWhatsAppUrl } from '@/config/contact';

export function ContactCtaSection() {
  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: CONTACT.phone.display,
      href: `tel:${CONTACT.phone.tel}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: CONTACT.location.display,
      href: CONTACT.location.mapsUrl,
    },
  ];

  const whatsappUrl = buildWhatsAppUrl('Hi, I would like to discuss a carpet project with MR Enterprises.');

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="w-full px-6 md:container md:mx-auto md:px-4">
        <div className="content-wrapper-mobile text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-base text-muted-foreground">
            Reach out to explore how we can support your next interior design project with custom carpet solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.label === 'Location' ? '_blank' : undefined}
              rel={method.label === 'Location' ? 'noopener noreferrer' : undefined}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <method.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold mb-2">{method.label}</h3>
              <p className="text-sm text-muted-foreground">{method.value}</p>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button size="lg" asChild className="w-full sm:w-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
            <a href={CONTACT.location.directionsUrl} target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          </Button>
        </div>

        {/* Footer Attribution */}
        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} MR Enterprises. Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'mr-enterprises'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
