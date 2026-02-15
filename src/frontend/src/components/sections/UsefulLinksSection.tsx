import { ExternalLink, Globe } from 'lucide-react';
import { SiInstagram, SiGoogle, SiWhatsapp } from 'react-icons/si';
import { USEFUL_LINKS } from '@/config/usefulLinks';

export function UsefulLinksSection() {
  // Only render if there are links with URLs
  const validLinks = USEFUL_LINKS.filter(link => link.url);
  if (validLinks.length === 0) return null;

  const getIcon = (label: string) => {
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes('instagram')) return SiInstagram;
    if (lowerLabel.includes('google')) return SiGoogle;
    if (lowerLabel.includes('whatsapp')) return SiWhatsapp;
    return Globe;
  };

  // Split links: first 4 and the rest (WhatsApp Channel)
  const firstFourLinks = validLinks.slice(0, 4);
  const remainingLinks = validLinks.slice(4);

  return (
    <section id="useful-links" className="py-16 md:py-20 bg-secondary/10">
      <div className="w-full px-6 md:container md:mx-auto md:px-4">
        <div className="content-wrapper-mobile text-center mb-10 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Built for projects,
            <br />
            Open for connection.
          </h2>
          <p className="text-base text-muted-foreground">
            Find us on these platforms for updates, reviews, and more.
          </p>
        </div>

        {/* Grid container with responsive columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
          {/* First four links - 2x2 on mobile, distributed on desktop */}
          {firstFourLinks.map((link, index) => {
            const Icon = getIcon(link.label);
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 md:p-6 rounded-lg bg-background border border-border hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-base mb-1 group-hover:text-accent transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    Visit
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </a>
            );
          })}

          {/* Remaining links (WhatsApp Channel) - full width on mobile, normal width on desktop */}
          {remainingLinks.map((link, index) => {
            const Icon = getIcon(link.label);
            return (
              <a
                key={`remaining-${index}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 md:col-span-1 group flex items-center gap-4 p-5 md:p-6 rounded-lg bg-background border border-border hover:border-accent hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-base mb-1 group-hover:text-accent transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    Visit
                    <ExternalLink className="w-3 h-3" />
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
