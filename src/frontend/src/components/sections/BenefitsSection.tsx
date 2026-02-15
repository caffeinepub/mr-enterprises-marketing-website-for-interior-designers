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
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">
            Why Interior Designers Work With MR Enterprises
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Built to support interior designers in executing fully custom carpet projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center w-full">
              <div className="w-14 h-14 md:w-12 md:h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 md:mb-3 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="text-accent" size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-base md:text-lg font-semibold leading-snug">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
