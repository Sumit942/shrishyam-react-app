import { CheckCircle2, Award, Users, TrendingUp } from 'lucide-react';
import { useCompanyInfo } from '@/hooks/useQueries';

export function AboutUs() {
  const { data: companyInfo, isLoading } = useCompanyInfo();

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-navy/5 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider bg-brand-orange/10 px-4 py-2 rounded-full">
                Who We Are
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 leading-tight">
              About Shri Shyam Trans Logistics
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Main Large Image */}
                <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src="/assets/about-us-team.dim_800x600.jpg" 
                    alt="Professional Team" 
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
                </div>
                
                {/* Company Logo Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white p-6 flex items-center justify-center border-2 border-brand-orange/20">
                  <img 
                    src="/assets/Logo JPEG.jpg" 
                    alt="Shri Shyam Trans Logistics" 
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Stats Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-brand-navy to-brand-navy/90 p-6 text-white">
                  <Award className="h-10 w-10 text-brand-orange mb-3" />
                  <p className="text-3xl font-bold mb-1">100+</p>
                  <p className="text-sm text-white/80">Satisfied Clients</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-orange/10 rounded-full -z-10"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-brand-navy/10 rounded-full -z-10"></div>
            </div>

            {/* Right Column - Content */}
            <div>
              {isLoading ? (
                <div className="space-y-4">
                  <div className="h-4 bg-muted rounded animate-pulse"></div>
                  <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
                  <div className="h-4 bg-muted rounded animate-pulse w-4/6"></div>
                </div>
              ) : (
                <>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-light">
                    {companyInfo?.description || "Shri Shyam Trans Logistics delivers dependable transportation and third-party logistics services designed to keep your supply chain moving—securely, efficiently, and on schedule."}
                  </p>

                  <h3 className="text-2xl font-bold text-brand-navy mb-8 flex items-center gap-3">
                    <div className="h-1 w-12 bg-brand-orange rounded-full"></div>
                    Our Core Values
                  </h3>

                  <div className="space-y-6">
                    {(companyInfo?.values || ['Trust', 'Discipline', 'Transparency']).map((value, index) => {
                      const icons = [CheckCircle2, Users, TrendingUp];
                      const Icon = icons[index] || CheckCircle2;
                      
                      return (
                        <div key={index} className="flex items-start gap-4 group p-5 rounded-xl bg-gradient-to-r from-muted/50 to-transparent hover:from-brand-orange/5 hover:to-transparent transition-all duration-300 border border-transparent hover:border-brand-orange/20">
                          <div className="mt-1 flex-shrink-0 p-3 bg-brand-orange/10 rounded-lg group-hover:bg-brand-orange group-hover:scale-110 transition-all">
                            <Icon className="h-6 w-6 text-brand-orange group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <h4 className="font-bold text-brand-navy mb-2 text-lg">{value}</h4>
                            <p className="text-base text-muted-foreground leading-relaxed">
                              {value === 'Trust' && 'Building lasting relationships through consistent, reliable service delivery and unwavering commitment to excellence.'}
                              {value === 'Discipline' && 'Maintaining strict operational standards, timely execution, and professional conduct in every interaction.'}
                              {value === 'Transparency' && 'Clear communication, honest dealings, and complete visibility with all stakeholders throughout the process.'}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
