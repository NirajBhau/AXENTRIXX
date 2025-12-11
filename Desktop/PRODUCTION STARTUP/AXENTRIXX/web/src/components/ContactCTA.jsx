import React from "react";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#EFF1EA] dark:bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main CTA Container */}
        <div className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] rounded-3xl px-8 lg:px-16 py-12 lg:py-16 text-white">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left column - Content */}
            <div>
              <h2
                className="mb-6 font-bold leading-tight"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  lineHeight: "1.2",
                }}
              >
                Ready to Transform Your Business?
              </h2>

              <p
                className="mb-8 text-white/90 max-w-[500px]"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "clamp(16px, 1.2vw, 20px)",
                  lineHeight: "1.6",
                }}
              >
                Let's discuss how our technology solutions can drive growth,
                improve efficiency, and help you achieve your business goals.
              </p>

              {/* Key Points */}
              <ul className="space-y-3 mb-10">
                {[
                  "Free consultation and project assessment",
                  "Customized technology roadmap",
                  "Transparent pricing and timeline",
                  "Dedicated project management",
                ].map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center text-white/80"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "14px",
                    }}
                  >
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3 flex-shrink-0"></div>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2563EB] rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-white/90 active:bg-white/80 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-[#2563EB] group"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "16px",
                  }}
                >
                  Start Your Project
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </a>

                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-white/10 hover:border-white/50 active:bg-white/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 focus:ring-offset-2 focus:ring-offset-[#2563EB]"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "16px",
                  }}
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Right column - Contact Options */}
            <div className="space-y-6">
              {/* Quick Contact Options */}
              <div className="space-y-4">
                <h3
                  className="font-semibold text-white/90 mb-4"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "18px",
                  }}
                >
                  Get in Touch
                </h3>

                {/* Email */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=advikpatel55@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 focus:ring-offset-2 focus:ring-offset-[#2563EB]"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <div
                      className="font-medium text-white"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      Email Us
                    </div>
                    <div
                      className="text-white/80"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "13px",
                      }}
                    >
                      advikpatel55@gmail.com
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+15551234567"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 focus:ring-offset-2 focus:ring-offset-[#2563EB]"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <div
                      className="font-medium text-white"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      Call Us
                    </div>
                    <div
                      className="text-white/80"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "13px",
                      }}
                    >
                      +1 (555) 123-4567
                    </div>
                  </div>
                </a>

                {/* Schedule Consultation */}
                <a
                  href="/book-consultation"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-30 focus:ring-offset-2 focus:ring-offset-[#2563EB]"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <div
                      className="font-medium text-white"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      Schedule Consultation
                    </div>
                    <div
                      className="text-white/80"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "13px",
                      }}
                    >
                      Book a free 30-min call
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="mt-8 text-center">
          <p
            className="text-[#606060] dark:text-white/60"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "14px",
            }}
          >
            We typically respond within 2 hours during business hours
          </p>
        </div>
      </div>
    </section>
  );
}
