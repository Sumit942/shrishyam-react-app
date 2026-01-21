import { Package, ShoppingCart, Factory, Pill, Shirt, Zap } from 'lucide-react';
import { useIndustries } from '@/hooks/useQueries';

export function IndustriesWeServe() {
  const { data: industries, isLoading } = useIndustries();

  const defaultIndustries = [
    { 
      name: 'E-Commerce', 
      icon: ShoppingCart,
      image: '/assets/ecommerce-fulfillment.dim_400x300.jpg'
    },
    { 
      name: 'Manufacturing', 
      icon: Factory,
      image: '/assets/manufacturing-industry.dim_400x300.jpg'
    },
    { 
      name: 'Retail & FMCG', 
      icon: Package,
      image: '/assets/retail-distribution.dim_400x300.jpg'
    },
    { 
      name: 'Pharmaceuticals', 
      icon: Pill,
      image: '/assets/healthcare-logistics.dim_400x300.jpg'
    },
    { 
      name: 'Textiles & Apparel', 
      icon: Shirt,
      image: '/assets/retail-distribution.dim_400x300.jpg'
    },
    { 
      name: 'Electronics', 
      icon: Zap,
      image: '/assets/automotive-logistics.dim_400x300.jpg'
    }
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider bg-brand-orange/10 px-4 py-2 rounded-full">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight">
              Industries We Serve
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Delivering specialized logistics solutions across diverse sectors with industry-specific expertise
            </p>
          </div>

          {/* Industries Grid */}
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-64 bg-muted rounded-2xl"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {defaultIndustries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div 
                    key={index}
                    className="group relative flex flex-col rounded-2xl bg-card border-2 border-border hover:border-brand-orange hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Industry Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-transparent"></div>
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-brand-orange" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex items-center justify-center">
                      <h3 className="text-xl font-bold text-center text-brand-navy group-hover:text-brand-orange transition-colors">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
