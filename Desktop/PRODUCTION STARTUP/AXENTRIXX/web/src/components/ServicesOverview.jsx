import React from "react";
import { Code, BarChart3, Activity, ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites, web applications, e-commerce platforms, and API integrations built with modern technologies.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "API Development",
        "Performance Optimization",
      ],
      href: "/services#web-development",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description:
        "Transform your data into actionable insights with advanced analytics, dashboards, and business intelligence.",
      features: [
        "Business Intelligence",
        "Data Visualization",
        "Predictive Analytics",
        "Custom Dashboards",
      ],
      href: "/services#data-analytics",
    },
    {
      icon: Activity,
      title: "Hospital Management System",
      description:
        "Complete HMS solution for healthcare organizations with patient management, billing, and reporting.",
      features: [
        "Patient Management",
        "Billing & Invoicing",
        "Inventory Management",
        "Analytics Dashboard",
      ],
      href: "/products",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#FAFAF6] dark:bg-[#1E1E1E]">
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
            SERVICES
          </div>

          <h2
            className="mb-6 font-bold leading-tight max-w-[800px] mx-auto text-[#111] dark:text-white/90"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: "1.2",
            }}
          >
            Comprehensive Technology Solutions for Modern Businesses
          </h2>

          <p
            className="max-w-[600px] mx-auto text-[#606060] dark:text-white/60"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(14px, 1.2vw, 18px)",
              lineHeight: "1.6",
            }}
          >
            From innovative web development to data-driven insights and
            healthcare management, we deliver technology solutions that drive
            growth and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-[#2A2A2A] rounded-2xl p-8 lg:p-10 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-2xl mb-6">
                  <IconComponent
                    className="w-8 h-8 text-[#2563EB]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-4 font-bold text-[#111] dark:text-white/90"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "20px",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-6 leading-relaxed text-[#606060] dark:text-white/60"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="mb-8 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-[#606060] dark:text-white/60"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "13px",
                      }}
                    >
                      <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a
                  href={service.href}
                  className="inline-flex items-center text-[#2563EB] hover:text-[#1D4ED8] transition-all duration-200 ease-in-out group-hover:translate-x-1 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-opacity-50 focus-visible:ring-offset-2"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "14px",
                  }}
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p
            className="mb-6 text-[#606060] dark:text-white/60"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "16px",
            }}
          >
            Need a custom solution for your business?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-[#1D4ED8] active:bg-[#1E40AF] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 focus:ring-offset-2"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "16px",
            }}
          >
            Discuss Your Project
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
