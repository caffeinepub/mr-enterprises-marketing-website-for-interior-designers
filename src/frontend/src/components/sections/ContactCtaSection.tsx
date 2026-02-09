import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CONTACT } from '@/config/contact';

export function ContactCtaSection() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Get in Touch
            </h2>
            <p className="text-base text-muted-foreground">
              Ready to discuss your project? Contact us for samples or specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <Card className="hover:shadow-soft transition-all duration-300">
              <CardContent className="pt-5 pb-5">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm">Call Us</h3>
                    <a
                      href={`tel:${CONTACT.phone.tel}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {CONTACT.phone.display}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all duration-300">
              <CardContent className="pt-5 pb-5">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm">Email Us</h3>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors break-all"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <a href={`mailto:${CONTACT.email}?subject=Sample Request`}>
                  Request Samples
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${CONTACT.phone.tel}`}>
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
