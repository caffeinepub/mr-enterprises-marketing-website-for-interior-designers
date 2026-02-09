import { Mail, Phone, MapPin, Navigation } from 'lucide-react';
import { CONTACT } from '@/config/contact';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/mr-logo-mark.dim_256x256.png"
              alt="MR Enterprises"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              Premium carpet manufacturer specializing in custom solutions for interior designers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#collections" className="text-muted-foreground hover:text-foreground transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-0.5 text-muted-foreground" />
                <a href={`tel:${CONTACT.phone.tel}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {CONTACT.phone.display}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-0.5 text-muted-foreground" />
                <a href={`mailto:${CONTACT.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 text-muted-foreground" />
                <a
                  href={CONTACT.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {CONTACT.location.display}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Navigation size={16} className="mt-0.5 text-muted-foreground" />
                <a
                  href={CONTACT.location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MR Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
