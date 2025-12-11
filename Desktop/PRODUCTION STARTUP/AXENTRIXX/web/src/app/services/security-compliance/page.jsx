import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Shield, CheckCircle, Lock, Eye, AlertTriangle, TrendingUp, ArrowRight, ArrowLeft } from "lucide-react";

export default function SecurityCompliancePage() {
  const technologies = [
    { name: "Penetration Testing", description: "Identify vulnerabilities before attackers do" },
    { name: "SOC 2 Compliance", description: "Trust and security certification" },
    { name: "Data Encryption", description: "End-to-end encryption solutions" },
    { name: "Access Control", description: "Identity and access management" },
    { name: "Security Monitoring", description: "24/7 threat detection and response" },
    { name: "Compliance Audits", description: "Regular compliance assessments" },
  ];

  const benefits = [
    { icon: Shield, title: "Data Protection", description: "Enterprise-grade security protects your sensitive business data from breaches." },
    { icon: Lock, title: "Regulatory Compliance", description: "Meet HIPAA, GDPR, SOC 2, and other industry compliance requirements." },
    { icon: Eye, title: "Real-time Monitoring", description: "Continuous security monitoring with instant threat detection and alerts." },
    { icon: AlertTriangle, title: "Risk Mitigation", description: "Proactive security measures reduce business risks and vulnerabilities." },
  ];

  const process = [
    { step: "01", title: "Security Assessment", description: "Comprehensive evaluation of your current security posture and vulnerabilities." },
    { step: "02", title: "Risk Analysis", description: "Identify and prioritize security risks based on business impact." },
    { step: "03", title: "Strategy Development", description: "Create customized security strategy aligned with compliance requirements." },
    { step: "04", title: "Implementation", description: "Deploy security controls, policies, and monitoring systems." },
    { step: "05", title: "Testing & Validation", description: "Penetration testing and security audits to validate effectiveness." },
    { step: "06", title: "Ongoing Monitoring", description: "Continuous monitoring, updates, and compliance maintenance." },
  ];

  const features = [
    "Security audits and testing",
    "HIPAA, GDPR compliance",
    "Data encryption solutions",
    "Vulnerability assessments",
    "Penetration testing",
    "Security policy development",
    "Incident response planning",
    "Employee security training",
    "Compliance documentation",
    "24/7 security monitoring",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
          <a href="/services" className="inline-flex items-center gap-2 text-[#606060] dark:text-white/60 hover:text-[#2563EB] transition-colors" style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}>
            <ArrowLeft size={16} />Back to Services
          </a>
        </div>

        <section className="py-16 md:py-20 bg-gradient-to-br from-[#2563EB]/5 to-[#10B981]/5 dark:from-[#2563EB]/10 dark:to-[#10B981]/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] rounded-full mb-6">
                <Shield className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm">Security & Compliance</span>
              </div>
              <h1 className="mb-6 font-bold leading-tight text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(32px, 5vw, 56px)", lineHeight: "1.2" }}>
                Security & Compliance Solutions
              </h1>
              <p className="mb-8 text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "18px", lineHeight: "1.6" }}>
                Protect your business with comprehensive security solutions and ensure compliance with industry standards including HIPAA, GDPR, and SOC 2.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="inline-flex items-center px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all hover:bg-[#1D4ED8] active:scale-95" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                  Get Started<ArrowRight size={20} className="ml-2" />
                </a>
                <a href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] rounded-lg font-semibold transition-all hover:bg-[#2563EB] hover:text-white active:scale-95" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                  Request Audit
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white dark:bg-[#121212]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="mb-4 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(28px, 4vw, 42px)" }}>What We Offer</h2>
              <p className="max-w-2xl mx-auto text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px", lineHeight: "1.6" }}>
                Comprehensive security and compliance services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" strokeWidth={2} />
                  <span className="text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#FAFAF6] dark:bg-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="mb-4 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(28px, 4vw, 42px)" }}>Security Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white dark:bg-[#121212] p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                  <h3 className="mb-2 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "18px" }}>{tech.name}</h3>
                  <p className="text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px", lineHeight: "1.5" }}>{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white dark:bg-[#121212]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="mb-4 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(28px, 4vw, 42px)" }}>Key Benefits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-full mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-[#2563EB]" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-3 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "18px" }}>{benefit.title}</h3>
                    <p className="text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px", lineHeight: "1.5" }}>{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#FAFAF6] dark:bg-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="mb-4 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(28px, 4vw, 42px)" }}>Our Security Process</h2>
              <p className="max-w-2xl mx-auto text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px", lineHeight: "1.6" }}>
                Comprehensive approach to security and compliance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div key={index} className="bg-white dark:bg-[#121212] p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                  <div className="mb-4 text-[48px] font-bold text-[#2563EB]/20" style={{ fontFamily: '"Inter", sans-serif' }}>{item.step}</div>
                  <h3 className="mb-3 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "18px" }}>{item.title}</h3>
                  <p className="text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px", lineHeight: "1.5" }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white dark:bg-[#121212]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="mb-6 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(28px, 4vw, 42px)" }}>
              Ready to Secure Your Business?
            </h2>
            <p className="mb-8 text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px", lineHeight: "1.6" }}>
              Let's assess your security needs and build a comprehensive protection strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all hover:bg-[#1D4ED8] active:scale-95" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                Get Security Audit
              </a>
              <a href="/services" className="inline-flex items-center px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] rounded-lg font-semibold transition-all hover:bg-[#2563EB] hover:text-white active:scale-95" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                View All Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
