import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function CaseStudiesPreview() {
  const caseStudies = [
    {
      title: "Regional Hospital Network Digitization",
      industry: "Healthcare",
      challenge: "Manual processes causing delays",
      solution: "Implemented comprehensive HMS with automated workflows",
      result:
        "40% reduction in administrative time, improved patient satisfaction",
      image:
        "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/case-studies/regional-hospital-network",
    },
    {
      title: "E-commerce Platform Analytics",
      industry: "Retail",
      challenge: "Limited insights into customer behavior",
      solution: "Custom analytics dashboard with real-time reporting",
      result: "25% increase in conversion rates, data-driven decision making",
      image:
        "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/case-studies/ecommerce-analytics",
    },
    {
      title: "Financial Services Web Portal",
      industry: "Finance",
      challenge: "Outdated web presence affecting client acquisition",
      solution: "Modern web application with secure client portal",
      result:
        "300% increase in online applications, enhanced security compliance",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/case-studies/financial-portal",
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
            CASE STUDIES
          </div>

          <h2
            className="mb-6 font-bold leading-tight max-w-[700px] mx-auto text-[#111] dark:text-white/90"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: "1.2",
            }}
          >
            Success Stories from Our Clients
          </h2>

          <p
            className="max-w-[600px] mx-auto text-[#606060] dark:text-white/60"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(14px, 1.2vw, 18px)",
              lineHeight: "1.6",
            }}
          >
            Discover how we've helped organizations across industries transform
            their operations and achieve measurable results.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#2A2A2A] rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out dark:opacity-90"
                />
                {/* Dark mode overlay */}
                <div className="absolute inset-0 dark:bg-black/20 pointer-events-none" />

                {/* Industry Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-[#2563EB] rounded-full text-[12px] font-medium"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3
                  className="mb-4 font-bold text-[#111] dark:text-white/90 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors duration-200"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "18px",
                    lineHeight: "1.3",
                  }}
                >
                  {study.title}
                </h3>

                {/* Challenge & Solution */}
                <div className="space-y-3 mb-6">
                  <div>
                    <div
                      className="font-semibold text-[#111] dark:text-white/90 mb-1"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "12px",
                      }}
                    >
                      CHALLENGE
                    </div>
                    <p
                      className="text-[#606060] dark:text-white/60"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "13px",
                        lineHeight: "1.4",
                      }}
                    >
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <div
                      className="font-semibold text-[#111] dark:text-white/90 mb-1"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "12px",
                      }}
                    >
                      RESULT
                    </div>
                    <p
                      className="text-[#606060] dark:text-white/60"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "13px",
                        lineHeight: "1.4",
                      }}
                    >
                      {study.result}
                    </p>
                  </div>
                </div>

                {/* Read More Link */}
                <a
                  href={study.href}
                  className="inline-flex items-center text-[#2563EB] hover:text-[#1D4ED8] transition-all duration-200 ease-in-out group-hover:translate-x-1 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-opacity-50 focus-visible:ring-offset-2"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "14px",
                  }}
                >
                  Read Full Case Study
                  <ExternalLink
                    size={14}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <a
            href="/case-studies"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-[#1D4ED8] active:bg-[#1E40AF] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 focus:ring-offset-2 group"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "16px",
            }}
          >
            View All Case Studies
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
