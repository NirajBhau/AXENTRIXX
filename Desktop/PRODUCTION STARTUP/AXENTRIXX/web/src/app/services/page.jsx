"use client";

import { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TechStackScrollerClean from "../../components/TechStackScrollerClean";
import {
  Code,
  Smartphone,
  Database,
  BarChart,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const cardsRef = useRef([]);

  useEffect(() => {
    const testImage = new Image();
    testImage.onload = () => setImageLoaded(true);
    testImage.onerror = () => setImageLoaded(false);
    testImage.src = '/services%20bg.jpg';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll indicator after scrolling past hero section (80vh)
      const heroHeight = window.innerHeight * 0.8;
      setShowScrollIndicator(window.scrollY < heroHeight);

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const cardTop = rect.top;

        // Calculate progress (0 to 1) as card enters viewport
        const progress = Math.max(0, Math.min(1, (windowHeight - cardTop) / windowHeight));

        // Apply scale based on card index and scroll progress
        const baseScale = 0.95 - (index * 0.02);
        const scale = baseScale + (progress * (1 - baseScale));

        // Apply transform
        card.style.transform = `scale(${scale})`;
        card.style.opacity = progress;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      slug: "web-development",
      //description: "Build powerful, scalable web applications tailored to your business needs using modern frameworks and best practices.",
      features: [
        "React, Next.js, and Vue.js development",
        "Progressive Web Apps (PWA)",
        "E-commerce platforms",
        "Content Management Systems",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      slug: "mobile-development",
      //description: "Create native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
      features: [
        "React Native & Flutter development",
        "Native iOS and Android apps",
        "App Store optimization",
        "Mobile-first design",
      ],
    },
    {
      icon: Database,
      title: "Healthcare Management Systems",
      slug: "healthcare-management",
      //description: "Specialized healthcare software solutions that improve patient care and streamline medical operations.",
      features: [
        "Electronic Health Records (EHR)",
        "Patient portals",
        "HIPAA-compliant systems",
        "Medical billing integration",
      ],
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      slug: "business-intelligence",
      //description: "Empower your decision-making with comprehensive BI solutions that turn complex data into clear, actionable insights.",
      features: [
        "Interactive dashboards and reports",
        "KPI tracking and monitoring",
        "Data warehousing solutions",
        "Self-service analytics tools",
      ],
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      slug: "data-analytics",
      //description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      features: [
        "Custom dashboards",
        "Predictive analytics",
        "Real-time reporting",
        "Data visualization",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, challenges, and requirements through detailed consultations.",
    },
    {
      number: "02",
      title: "Design & Architecture",
      description: "Our team creates comprehensive designs and technical architecture tailored to your needs.",
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies with continuous testing and quality assurance.",
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "After launch, we provide ongoing support, maintenance, and optimization to ensure success.",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile development with rapid iterations and quick time-to-market",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced developers, designers, and project managers",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Rigorous testing and quality control at every stage",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      <main>
        {/* Hero Section with Fixed Parallax Background */}
        <section className="pt-32 pb-24 md:pb-32 relative overflow-hidden min-h-[80vh] flex items-center justify-center">
          <div
            className={`fixed inset-0 z-0 ${!imageLoaded ? 'bg-gradient-to-br from-[#1E293B] to-[#334155]' : ''}`}
            style={{
              backgroundImage: imageLoaded ? 'url(/services%20bg.jpg)' : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              imageRendering: 'crisp-edges',
              filter: 'contrast(1.05) brightness(1.02)',
            }}
          />

          {/* Scroll Down Button - Right Side */}
          {showScrollIndicator && (
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="fixed right-8 bottom-8 z-[9999] flex flex-col items-center gap-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-6 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce group border-2 border-gray-200 dark:border-gray-700"
            >
              <span
                className="text-[#2563EB] dark:text-white text-base font-bold tracking-wide"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                SCROLL
              </span>
              <svg
                className="w-8 h-8 text-[#2563EB] dark:text-white group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          )}
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-[#FAFAF6] dark:bg-[#1E1E1E] relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="group h-[450px]"
                    style={{
                      perspective: '1000px',
                      transformOrigin: 'center top',
                      willChange: 'transform, opacity',
                    }}
                  >
                    <div
                      className="relative w-full h-full transition-transform duration-700 ease-in-out"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Front Side */}
                      <div
                        className="absolute inset-0 bg-white dark:bg-[#121212] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                        }}
                      >
                        <div className="flex items-center justify-center w-14 h-14 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-xl mb-6">
                          <IconComponent className="w-7 h-7 text-[#2563EB]" strokeWidth={1.5} />
                        </div>

                        <h3
                          className="mb-4 font-bold text-[#111] dark:text-white/90"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "20px" }}
                        >
                          {service.title}
                        </h3>

                        <p
                          className="mb-6 text-[#606060] dark:text-white/60"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px", lineHeight: "1.6" }}
                        >
                          {service.description}
                        </p>

                        <div className="text-center mt-8">
                          <span
                            className="text-[#2563EB] font-semibold text-sm"
                            style={{ fontFamily: '"Inter", sans-serif' }}
                          >
                            Hover to see features →
                          </span>
                        </div>
                      </div>

                      {/* Back Side */}
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] p-8 rounded-2xl shadow-2xl"
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                      >
                        <h3
                          className="mb-6 font-bold text-white"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "20px" }}
                        >
                          {service.title}
                        </h3>

                        <ul className="space-y-4 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2} />
                              <span
                                className="text-white/90"
                                style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px", lineHeight: "1.5" }}
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <a
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors duration-200 group/link"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}
                        >
                          Learn More
                          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <style jsx>{`
            .group:hover > div {
              transform: rotateY(180deg);
            }
          `}</style>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 bg-white dark:bg-[#121212] relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2
                className="mb-6 font-bold text-[#111] dark:text-white/90"
                style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(24px, 3vw, 42px)" }}
              >
                Our Development Process
              </h2>
              <p
                className="max-w-[600px] mx-auto text-[#606060] dark:text-white/60"
                style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px", lineHeight: "1.6" }}
              >
                A proven methodology that ensures successful project delivery from concept to launch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div
                    className="mb-6 text-[64px] font-bold text-[#2563EB]/20 dark:text-[#2563EB]/30"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="mb-4 font-bold text-[#111] dark:text-white/90"
                    style={{ fontFamily: '"Inter", sans-serif', fontSize: "18px" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#606060] dark:text-white/60"
                    style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px", lineHeight: "1.5" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Scroller Section */}
        <div className="relative z-10 bg-white dark:bg-[#121212]">
          <TechStackScrollerClean />
        </div>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-[#FAFAF6] dark:bg-[#1E1E1E] relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2
                className="mb-6 font-bold text-[#111] dark:text-white/90"
                style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(24px, 3vw, 42px)" }}
              >
                Why Choose Our Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-full mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-[#2563EB]" strokeWidth={1.5} />
                    </div>
                    <h3
                      className="mb-4 font-bold text-[#111] dark:text-white/90"
                      style={{ fontFamily: '"Inter", sans-serif', fontSize: "18px" }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-[#606060] dark:text-white/60"
                      style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px", lineHeight: "1.5" }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-white dark:bg-[#121212] relative z-10">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2
              className="mb-6 font-bold text-[#111] dark:text-white/90"
              style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(24px, 3vw, 42px)" }}
            >
              Ready to Start Your Project?
            </h2>
            <p
              className="mb-8 text-[#606060] dark:text-white/60"
              style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px", lineHeight: "1.6" }}
            >
              Let's discuss how our services can help transform your business. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-[#1D4ED8] active:bg-[#1E40AF] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 focus:ring-offset-2"
                style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
