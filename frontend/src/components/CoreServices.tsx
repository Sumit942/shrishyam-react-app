import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useServices } from '@/hooks/useQueries';
import { ArrowRight } from 'lucide-react';

export function CoreServices() {
  const { data: services, isLoading } = useServices();

  const defaultServices = [
    {
      title: 'Transportation & Freight',
      description: 'Full Truck Load (FTL) and Part Truck Load (PTL) services for inter-city and intra-city transportation needs.',
      icon: '/assets/transportation-icon.dim_64x64.png',
      image: '/assets/freight-transportation.dim_800x600.jpg'
    },
    {
      title: '3PL Warehousing & Distribution',
      description: 'Comprehensive warehousing solutions with efficient inventory management and distribution services.',
      icon: '/assets/warehouse-icon.dim_64x64.png',
      image: '/assets/warehouse-operations.dim_800x600.jpg'
    },
    {
      title: 'Supply Chain Solutions',
      description: 'End-to-end supply chain management designed to optimize your logistics operations and reduce costs.',
      icon: '/assets/supply-chain-icon.dim_64x64.png',
      image: '/assets/supply-chain-center.dim_800x600.jpg'
    },
    {
      title: 'Time-Critical Deliveries',
      description: 'Express delivery services for urgent shipments with guaranteed on-time performance.',
      icon: '/assets/time-critical-icon.dim_64x64.png',
      image: '/assets/business-partnership.dim_800x600.jpg'
    }
  ];

  const displayServices = services && services.length > 2 ? services.map((s, i) => ({
    ...s,
    image: defaultServices[i]?.image || defaultServices[0].image
  })) : defaultServices;

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--brand-navy)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider bg-brand-orange/10 px-4 py-2 rounded-full">
                What We Offer
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight">
              Our Core Services
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive logistics solutions tailored to meet your business needs with precision and reliability
            </p>
          </div>

          {/* Services Grid */}
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="animate-pulse overflow-hidden">
                  <div className="h-64 bg-muted"></div>
                  <CardHeader>
                    <div className="h-16 w-16 bg-muted rounded-lg mb-4"></div>
                    <div className="h-6 bg-muted rounded w-3/4"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-muted rounded w-5/6"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {displayServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-brand-orange/50 overflow-hidden bg-card"
                >
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-transparent"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4 p-4 bg-white rounded-xl shadow-xl group-hover:scale-110 transition-transform">
                      <img 
                        src={service.icon} 
                        alt={service.title}
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-brand-navy group-hover:text-brand-orange transition-colors flex items-center justify-between">
                      {service.title}
                      <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
