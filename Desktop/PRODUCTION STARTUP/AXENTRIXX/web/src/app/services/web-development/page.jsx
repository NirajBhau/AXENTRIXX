import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Code, CheckCircle, ArrowRight, Zap, Shield, Users, ChevronLeft } from "lucide-react";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#DBEAFE] dark:from-[#0F0F0F] dark:via-[#1A1A2E] dark:to-[#1E293B]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Back Button */}
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-[#606060] dark:text-white/60 hover:text-[#2563EB] dark:hover:text-white transition-colors mb-8 group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[14px] font-medium">Back to Services</span>
            </a>
            <div className="max-w-4xl">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-xl mb-6">
                <Code className="w-8 h-8 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              
              <h1
                className="mb-6 font-bold leading-tight text-[#111] dark:text-white/90"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "clamp(32px, 5vw, 56px)",
                  lineHeight: "1.2",
                }}
              >
                Custom Web Development
              </h1>

              <p
                className="text-[#606060] dark:text-white/60 text-lg mb-8"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: "1.7",
                }}
              >
                Build powerful, scalable web applications tailored to your business needs using modern frameworks and best practices.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 hover:bg-[#1D4ED8] active:scale-95"
                  style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/request-quote"
                  className="inline-flex items-center px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] rounded-lg font-semibold transition-all duration-200 hover:bg-[#2563EB] hover:text-white active:scale-95"
                  style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}
                >
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-20 bg-white dark:bg-[#121212]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2
              className="mb-12 font-bold text-[#111] dark:text-white/90 text-center"
              style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              What We Offer
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "React, Next.js, and Vue.js development",
                  description: "Modern JavaScript frameworks for building fast, interactive user interfaces"
                },
                {
                  title: "Progressive Web Apps (PWA)",
                  description: "App-like experiences that work offline and can be installed on devices"
                },
                {
                  title: "E-commerce platforms",
                  description: "Complete online stores with payment integration and inventory management"
                },
                {
                  title: "Content Management Systems",
                  description: "Easy-to-use systems for managing your website content without coding"
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-[#FAFAF6] dark:bg-[#1E1E1E] rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <h3
                      className="font-bold text-[#111] dark:text-white/90 mb-2"
                      style={{ fontFamily: '"Inter", sans-serif', fontSize: "18px" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-[#606060] dark:text-white/60"
                      style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-[#FAFAF6] dark:bg-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2
              className="mb-12 font-bold text-[#111] dark:text-white/90 text-center"
              style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Fast Performance", description: "Optimized code for lightning-fast load times" },
                { icon: Shield, title: "Secure & Reliable", description: "Built with security best practices" },
                { icon: Users, title: "User-Focused", description: "Intuitive interfaces that users love" },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-full mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="mb-4 font-bold text-[#111] dark:text-white/90"
                    style={{ fontFamily: '"Inter", sans-serif', fontSize: "20px" }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-[#606060] dark:text-white/60"
                    style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-white dark:bg-[#121212]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2
              className="mb-6 font-bold text-[#111] dark:text-white/90"
              style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              Ready to Build Your Web Application?
            </h2>
            <p
              className="mb-8 text-[#606060] dark:text-white/60"
              style={{ fontFamily: '"Inter", sans-serif', fontSize: "18px" }}
            >
              Let's discuss your project and create something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 hover:bg-[#1D4ED8] active:scale-95"
              style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
