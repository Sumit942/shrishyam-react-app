import { Shield, Clock, Award, Users, TrendingUp, Headphones } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Guaranteed timely deliveries with real-time tracking and updates for complete peace of mind.'
    },
    {
      icon: Shield,
      title: 'Secure Transportation',
      description: 'Advanced security measures and insurance coverage to protect your valuable cargo throughout transit.'
    },
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Years of proven experience serving diverse industries across India with specialized solutions.'
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Skilled logistics professionals and trained drivers dedicated to your success and satisfaction.'
    },
    {
      icon: TrendingUp,
      title: 'Cost-Effective Solutions',
      description: 'Competitive pricing and optimized routes without compromising on quality or reliability.'
    },
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'Round-the-clock assistance and dedicated support team for all your logistics needs.'
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/generated/business-partnership.dim_800x600.jpg" 
          alt="Business Partnership" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider bg-brand-orange/10 px-4 py-2 rounded-full">
                Our Advantages
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight">
              Why Choose Us
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for reliable and efficient logistics solutions with unmatched service quality
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl bg-card border-2 border-border hover:border-brand-orange/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 p-4 bg-brand-orange/10 rounded-xl w-fit group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <Icon className="h-10 w-10 text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
