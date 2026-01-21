import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck } from 'lucide-react';

export function VehicleTypes() {
  const vehicles = [
    {
      size: '14ft',
      image: '/assets/generated/truck-14ft.dim_400x300.jpg',
      description: 'Available across India – Open and Closed body'
    },
    {
      size: '17ft',
      image: '/assets/generated/truck-17ft.dim_400x300.jpg',
      description: 'Available across India – Open and Closed body'
    },
    {
      size: '19ft',
      image: '/assets/generated/truck-19ft.dim_400x300.jpg',
      description: 'Available across India – Open and Closed body'
    },
    {
      size: '20ft',
      image: '/assets/generated/truck-20ft.dim_400x300.jpg',
      description: 'Available across India – Open and Closed body'
    },
    {
      size: '22ft',
      image: '/assets/generated/truck-22ft.dim_400x300.jpg',
      description: 'Available across India – Open and Closed body'
    },
    {
      size: '24ft',
      image: '/assets/generated/truck-24ft.dim_400x300.jpg',
      description: 'Available across India – Open and Closed body'
    },
    {
      size: '32ft',
      image: '/assets/generated/truck-32ft.dim_400x300.jpg',
      description: 'Available across India – Open and Closed body'
    }
  ];

  return (
    <section id="vehicles" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
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
                Our Fleet
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight">
              Types of Vehicles Available
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              All over India — Open & Closed Body Options
            </p>
          </div>

          {/* Vehicles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vehicles.map((vehicle, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-brand-orange/50 overflow-hidden bg-card"
              >
                {/* Vehicle Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={`${vehicle.size} truck`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 p-3 bg-white rounded-xl shadow-xl group-hover:scale-110 transition-transform">
                    <Truck className="h-8 w-8 text-brand-orange" />
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl text-brand-navy group-hover:text-brand-orange transition-colors">
                    {vehicle.size}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {vehicle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
