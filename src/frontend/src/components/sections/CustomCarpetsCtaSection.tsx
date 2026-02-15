import { Button } from '@/components/ui/button';
import { buildWhatsAppUrl } from '@/config/contact';
import { getPublicAssetUrl } from '@/utils/publicAssetUrl';
import { Check } from 'lucide-react';

export function CustomCarpetsCtaSection() {
  const capabilities = [
    'Any size, shape, or dimension',
    'Exact color matching to your palette',
    'Custom materials and finishes',
    'Fully custom patterns and artwork',
    'Sampling and development support',
    'Suitable for residential and commercial projects',
  ];

  const whatsappUrl = buildWhatsAppUrl(
    'Hi! I\'d like to start a custom carpet project. Can we discuss the details?'
  );

  return (
    <section id="custom-carpets" className="py-20 bg-background">
      <div className="w-full px-6 md:container md:mx-auto md:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-8">
            {/* Image - Always First */}
            <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw]">
              <img
                src={getPublicAssetUrl('generated/seamless-carpet-texture.dim_1600x900.png')}
                alt="Seamless carpet texture pattern showcasing quality and craftsmanship"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>

            {/* Content - Always Second */}
            <div className="text-center lg:text-left">
              <h2 className="text-xl md:text-4xl font-bold mb-4 leading-tight">
                Why People Choose Us !!
              </h2>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                We produce fully custom carpets tailored to your exact project requirements.
              </p>

              {/* Capabilities List */}
              <div className="mb-8">
                <h3 className="text-base md:text-lg font-semibold uppercase tracking-wider text-accent mb-4">
                  Capabilities
                </h3>
                <ul className="space-y-3">
                  {capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start gap-3 text-left">
                      <Check
                        className="text-accent flex-shrink-0 mt-0.5"
                        size={20}
                        strokeWidth={2.5}
                      />
                      <span className="text-base text-foreground leading-relaxed">
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supporting Line */}
              <p className="text-base text-muted-foreground mb-8 leading-relaxed italic border-l-4 border-accent/30 pl-4">
                Created in collaboration with interior designers, tailored to each space.
              </p>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full lg:w-auto px-8"
                asChild
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a Project
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
