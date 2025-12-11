import React from "react";
import { Award, Users, Shield, Zap, Clock, Globe } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: "Proven Expertise",
      description:
        "Experienced in delivering technology solutions across healthcare, finance, and enterprise sectors.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "We prioritize your success with dedicated project managers and 24/7 support throughout development.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "HIPAA-compliant solutions with enterprise-grade security, data encryption, and regular audits.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description:
        "Agile development methodology ensures faster time-to-market without compromising quality.",
    },
    {
      icon: Clock,
      title: "Ongoing Support",
      description:
        "Comprehensive maintenance, updates, and technical support to keep your systems running smoothly.",
    },
    {
      icon: Globe,
      title: "Scalable Solutions",
      description:
        "Future-ready architecture that grows with your business, from startup to enterprise scale.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div
            className="mb-4 font-medium tracking-[0.12em] uppercase text-[rgba(85,85,85,0.7)] dark:text-white/50"
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "12px",
            }}
          >
            WHY CHOOSE US
          </div>

          <h2
            className="mb-6 font-bold leading-tight max-w-[700px] mx-auto text-[#111] dark:text-white/90"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: "1.2",
            }}
          >
            Your Technology Partner for Digital Transformation
          </h2>

          <p
            className="max-w-[600px] mx-auto text-[#606060] dark:text-white/60"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(14px, 1.2vw, 18px)",
              lineHeight: "1.6",
            }}
          >
            We combine technical excellence with business acumen to deliver
            solutions that drive measurable results for your organization.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="group text-center">
                {/* Icon Container */}
                <div className="flex items-center justify-center w-20 h-20 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-full mx-auto mb-6 group-hover:bg-[#2563EB]/20 dark:group-hover:bg-[#2563EB]/30 transition-all duration-300">
                  <IconComponent
                    className="w-10 h-10 text-[#2563EB]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-4 font-bold text-[#111] dark:text-white/90"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "18px",
                  }}
                >
                  {benefit.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed text-[#606060] dark:text-white/60 max-w-[280px] mx-auto"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div
                className="text-[36px] lg:text-[48px] font-bold text-[#2563EB] mb-2"
                style={{
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                20+
              </div>
              <div
                className="text-[#606060] dark:text-white/60"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "14px",
                }}
              >
                Projects Delivered
              </div>
            </div>

            <div>
              <div
                className="text-[36px] lg:text-[48px] font-bold text-[#2563EB] mb-2"
                style={{
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                9+
              </div>
              <div
                className="text-[#606060] dark:text-white/60"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "14px",
                }}
              >
                Healthcare Clients Awaiting
              </div>
            </div>

            <div>
              <div
                className="text-[36px] lg:text-[48px] font-bold text-[#2563EB] mb-2"
                style={{
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                99%
              </div>
              <div
                className="text-[#606060] dark:text-white/60"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "14px",
                }}
              >
                Client Satisfaction
              </div>
            </div>

            <div>
              <div
                className="text-[36px] lg:text-[48px] font-bold text-[#2563EB] mb-2"
                style={{
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                24/7
              </div>
              <div
                className="text-[#606060] dark:text-white/60"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "14px",
                }}
              >
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
