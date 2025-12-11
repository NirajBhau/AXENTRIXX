import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero_section"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Fixed Background Image - Parallax Effect */}
      <div className="absolute inset-0">
        {/* Background image - fixed position for parallax */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/background.avif')`,
          }}
        />

        {/* Left-to-right gradient overlay for text readability - Reduced opacity */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 25%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.2) 60%, transparent 80%)",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 min-h-[80vh]">
            {/* Left column - Text content */}
            <div className="flex flex-col justify-center py-20 lg:py-0 max-w-[650px]">
              {/* Main headline */}
              <div className="mb-6">
                <h1
                  className="font-bold text-[#1B1B1B] leading-tight tracking-tight"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "clamp(36px, 6vw, 72px)",
                    lineHeight: "clamp(42px, 6.5vw, 80px)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Transforming
                  <br />
                  Businesses with
                  <br />
                  Technology
                  <span
                    className="inline-block ml-2 w-2 h-2 rounded-full bg-[#2563EB]"
                    style={{ transform: "translateY(-4px)" }}
                  />
                </h1>
              </div>

              {/* Sub-headline */}
              <div className="mb-8 max-w-[500px]">
                <p
                  className="leading-relaxed text-[#4B4B4B]"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "clamp(16px, 1.5vw, 20px)",
                    lineHeight: 1.6,
                  }}
                >
                  From cutting-edge web applications to data-driven insights and
                  healthcare management solutions — we deliver innovation that
                  drives results.
                </p>
              </div>

              {/* Key benefits */}
              <div className="mb-10 space-y-3">
                {[
                  "Custom Web Development & API Integration",
                  "Advanced Data Analytics & Business Intelligence",
                  "Complete Hospital Management System",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-slideInRight"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      opacity: 0,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <CheckCircle
                      size={20}
                      className="text-[#2563EB] flex-shrink-0"
                    />
                    <span
                      className="text-[#2563EB] font-semibold"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "16px",
                      }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/request-quote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-[#1D4ED8] active:bg-[#1E40AF] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-transparent group"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "16px",
                  }}
                >
                  Request Quote
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </a>

                <a
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-[#2563EB] hover:text-white active:bg-[#1E40AF] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-30 focus:ring-offset-2 focus:ring-offset-transparent"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "16px",
                  }}
                >
                  View HMS Demo
                </a>
              </div>

              {/* Trust indicator */}
              <div className="mt-12 pt-8 border-t border-gray-300">
                <p className="text-[#606060] text-[14px] mb-4">
                  Trusted by healthcare organizations and enterprises worldwide
                </p>
                <div className="flex items-center space-x-8">
                  <div className="text-[#1B1B1B]">
                    <div className="text-[24px] font-bold">20+</div>
                    <div className="text-[12px]">Projects Completed</div>
                  </div>
                  <div className="text-[#1B1B1B]">
                    <div className="text-[24px] font-bold">9+</div>
                    <div className="text-[12px]">Healthcare Clients Awaiting</div>
                  </div>
                  <div className="text-[#1B1B1B]">
                    <div className="text-[24px] font-bold">99%</div>
                    <div className="text-[12px]">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Visual space handled by background */}
            <div className="hidden lg:block">
              {/* This space is visually handled by the background image */}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
