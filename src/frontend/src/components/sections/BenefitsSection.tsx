import { Wrench, Factory, FlaskConical, Workflow } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Wrench,
      title: 'Custom Execution',
    },
    {
      icon: Factory,
      title: 'In-House Manufacturing',
    },
    {
      icon: FlaskConical,
      title: 'Sampling & Development',
    },
    {
      icon: Workflow,
      title: 'Project-Focused Workflow',
    },
  ];

  return (
    <section id="benefits" className="py-12 md:py-16 bg-secondary/20">
      <div className="w-full px-6 md:container md:mx-auto md:px-4">
        <div className="content-wrapper-mobile text-center mb-8 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">
            Why Interior Designers Work With MR Enterprises
          </h2>
          <p className="text-base text-muted-foreground">
            We support custom carpet projects from concept to installation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-lg bg-background/50 hover:bg-background transition-colors"
              >
                <div className="mb-3 md:mb-4 p-3 md:p-4 rounded-full bg-accent/10">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm md:text-base font-semibold leading-tight">
                  {benefit.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
