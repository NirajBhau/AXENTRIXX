"use client";

import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  const [parallaxSpeed, setParallaxSpeed] = useState(0.5);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const updateParallaxSpeed = () => {
      const width = window.innerWidth;
      if (width > 1024) {
        setParallaxSpeed(0.5); // Desktop
      } else if (width >= 768) {
        setParallaxSpeed(0.3); // Tablet
      } else {
        setParallaxSpeed(0.2); // Mobile
      }
    };

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionPreferenceChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    // Test if background image loads successfully
    const testImage = new Image();
    testImage.onload = () => {
      setImageLoaded(true);
    };
    testImage.onerror = () => {
      setImageLoaded(false);
    };
    testImage.src = '/BACKGROUND.avif';

    // Set initial parallax speed
    updateParallaxSpeed();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateParallaxSpeed, { passive: true });
    mediaQuery.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateParallaxSpeed);
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, []);

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-purple-100 selection:text-purple-900">
      <Header />

      <main>
        {/* Hero Section with Illustration */}
        <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
          {/* Background Layer */}
          <div
            className={`absolute inset-0 z-0 ${!imageLoaded ? 'bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#DBEAFE] dark:from-[#0F0F0F] dark:via-[#1A1A2E] dark:to-[#1E293B]' : ''}`}
            style={{
              backgroundImage: imageLoaded ? 'url(/BACKGROUND.avif)' : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          />

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 z-[1] bg-black/40 dark:bg-black/60" />

          {/* Hero Content Container */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h1
                  className="mb-4 font-bold leading-tight text-white"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "clamp(36px, 5vw, 56px)",
                    lineHeight: "1.2",
                  }}
                >
                  Contact us
                </h1>
                <p
                  className="text-white/90 max-w-lg"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "clamp(16px, 1.4vw, 18px)",
                    lineHeight: "1.7",
                  }}
                >
                  We would love to hear from you
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section - Light Aurora Glassmorphism */}
        <section className="py-20 md:py-32 relative overflow-hidden">

          {/* Fixed Background Layer for Parallax */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/BACKGROUND.avif)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          />

          {/* Overlay for readability */}
          <div className="absolute inset-0 z-[1] bg-white/30 backdrop-blur-[2px]"></div>

          <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
            {/* Glass Card Container - Made transparent as per user request */}
            <div className="rounded-[2.5rem] overflow-hidden">
              <div className="grid md:grid-cols-12">

                {/* Left Side - Form (Wider) */}
                <div className="md:col-span-7 p-8 md:p-12 lg:p-16">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-blue-900 mb-2">Let's start a conversation</h2>
                    <p className="text-blue-700 font-medium">
                      We're here to help and answer any question you might have. We look forward to hearing from you.
                    </p>
                  </div>
                  <ContactForm />
                </div>

                {/* Right Side - Info & Visuals (Narrower) */}
                <div className="md:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden border-l border-white/50 backdrop-blur-3xl bg-white/10">
                  {/* Decorative Circle */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-blue-900 mb-8">Contact Information</h3>

                    <div className="space-y-8">
                      <div className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-blue-800 mb-1">Our Location</p>
                          <p className="text-blue-900 font-semibold">151 New Park Ave, Hartford<br />CT 06106, United States</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                          <Phone size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-blue-800 mb-1">Phone Number</p>
                          <p className="text-blue-900 font-semibold">+1 (203) 302-9545</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                          <Mail size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-blue-800 mb-1">Email Address</p>
                          <p className="text-blue-900 font-semibold">contactus@inveritasoft.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-12 relative z-10">
                    <p className="text-sm font-bold text-blue-800 mb-4">Follow us on</p>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.href}
                            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:-translate-y-1"
                          >
                            <Icon size={18} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Animation Styles */}
          <style jsx>{`
            @keyframes blob {
              0% { transform: translate(0px, 0px) scale(1); }
              33% { transform: translate(30px, -50px) scale(1.1); }
              66% { transform: translate(-20px, 20px) scale(0.9); }
              100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-blob {
              animation: blob 7s infinite;
            }
            .animation-delay-2000 {
              animation-delay: 2s;
            }
            .animation-delay-4000 {
              animation-delay: 4s;
            }
          `}</style>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-inner">
              {/* Placeholder for Map - Replace with actual map integration */}
              <div className="relative w-full h-[400px] bg-[url('/map-pattern.png')] bg-cover bg-center bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50">
                    <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">
                      Map Integration Placeholder
                    </p>
                    <p className="text-slate-400 text-sm mt-2">
                      Jalan Complex, Blang Oi 10, Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
