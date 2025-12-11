import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { DollarSign, FileText, Users, Clock, CheckCircle, AlertCircle, Send, Briefcase } from "lucide-react";

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    projectDetails: "",
    additionalServices: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "Data Analytics & BI",
    "Hospital Management System",
    "Custom Software Development",
    "API Integration",
    "Cloud Solutions",
    "E-commerce Platform",
    "Other",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
    "Not Sure Yet",
  ];

  const timelineOptions = [
    "ASAP (Within 1 month)",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "More than 12 months",
    "Flexible",
  ];

  const additionalServicesList = [
    "UI/UX Design",
    "SEO Optimization",
    "Content Creation",
    "Maintenance & Support",
    "Training & Documentation",
    "Cloud Hosting Setup",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter((s) => s !== service)
        : [...prev.additionalServices, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/request-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          projectDetails: "",
          additionalServices: [],
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Quote request error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#DBEAFE] dark:from-[#0F0F0F] dark:via-[#1A1A2E] dark:to-[#1E293B]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <div
              className="mb-4 font-medium tracking-[0.12em] uppercase text-[#2563EB]"
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "12px",
              }}
            >
              GET A CUSTOM QUOTE
            </div>

            <h1
              className="mb-6 font-bold leading-tight text-[#111] dark:text-white/90"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: "1.2",
              }}
            >
              Request a Project Quote
            </h1>

            <p
              className="max-w-2xl mx-auto text-[#606060] dark:text-white/60"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(16px, 1.4vw, 18px)",
                lineHeight: "1.6",
              }}
            >
              Tell us about your project and we'll provide you with a detailed quote including 
              timeline, pricing, and deliverables within 24 hours.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white dark:bg-[#121212]">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: Clock,
                  title: "24-Hour Response",
                  description: "Get your quote within one business day",
                },
                {
                  icon: DollarSign,
                  title: "Transparent Pricing",
                  description: "Clear breakdown of costs with no hidden fees",
                },
                {
                  icon: FileText,
                  title: "Detailed Proposal",
                  description: "Comprehensive project plan and timeline",
                },
                {
                  icon: Users,
                  title: "Expert Consultation",
                  description: "Free follow-up call to discuss your quote",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-[#FAFAF6] dark:bg-[#1E1E1E] rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-12 h-12 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="mb-2 font-bold text-[#111] dark:text-white/90"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "16px",
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-[#606060] dark:text-white/60"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "13px",
                      lineHeight: "1.5",
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Request Form Section */}
        <section className="py-16 md:py-20 bg-[#FAFAF6] dark:bg-[#1E1E1E]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="bg-white dark:bg-[#121212] rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-lg">
              <h2
                className="mb-2 font-bold text-[#111] dark:text-white/90"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "clamp(24px, 3vw, 32px)",
                }}
              >
                Tell Us About Your Project
              </h2>
              <p
                className="mb-8 text-[#606060] dark:text-white/60"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                Fill out the form below with as much detail as possible. The more we know, 
                the more accurate your quote will be.
              </p>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 dark:text-green-200 font-semibold text-sm mb-1">
                      Quote Request Submitted Successfully!
                    </p>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      Thank you for your interest! We'll review your project details and send you a 
                      comprehensive quote within 24 hours. Check your email for confirmation.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <p className="text-red-800 dark:text-red-200 text-sm">
                    Sorry, there was an error submitting your request. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[#111] dark:text-white/90 font-medium mb-2"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg text-[#111] dark:text-white/90 placeholder-[#606060] dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#111] dark:text-white/90 font-medium mb-2"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg text-[#111] dark:text-white/90 placeholder-[#606060] dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[#111] dark:text-white/90 font-medium mb-2"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg text-[#111] dark:text-white/90 placeholder-[#606060] dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-[#111] dark:text-white/90 font-medium mb-2"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg text-[#111] dark:text-white/90 placeholder-[#606060] dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-[#111] dark:text-white/90 font-medium mb-2"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "14px",
                    }}
                  >
                    Project Type *
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#606060] dark:text-white/60 pointer-events-none" />
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3 bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg text-[#111] dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200 appearance-none"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget and Timeline Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-[#111] dark:text-white/90 font-medium mb-2"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      Budget Range *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#606060] dark:text-white/60 pointer-events-none" />
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg text-[#111] dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200 appearance-none"
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "14px",
                        }}
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-[#111] dark:text-white/90 font-medium mb-2"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      Project Timeline *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#606060] dark:text-white/60 pointer-events-none" />
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg text-[#111] dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200 appearance-none"
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "14px",
                        }}
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <label
                    className="block text-[#111] dark:text-white/90 font-medium mb-3"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "14px",
                    }}
                  >
                    Additional Services (Optional)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {additionalServicesList.map((service) => (
                      <label
                        key={service}
                        className="flex items-center space-x-3 p-3 bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-[#2563EB] transition-colors duration-200"
                      >
                        <input
                          type="checkbox"
                          checked={formData.additionalServices.includes(service)}
                          onChange={() => handleCheckboxChange(service)}
                          className="w-4 h-4 text-[#2563EB] border-gray-300 rounded focus:ring-[#2563EB] focus:ring-2"
                        />
                        <span
                          className="text-[#111] dark:text-white/90"
                          style={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: "14px",
                          }}
                        >
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-[#111] dark:text-white/90 font-medium mb-2"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "14px",
                    }}
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg text-[#111] dark:text-white/90 placeholder-[#606060] dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200 resize-vertical"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "14px",
                      lineHeight: "1.5",
                    }}
                    placeholder="Please describe your project in detail. Include:&#10;• Project goals and objectives&#10;• Target audience&#10;• Key features and functionality&#10;• Any specific requirements or preferences&#10;• Existing systems or integrations needed&#10;• Any design preferences or examples"
                  />
                  <p
                    className="mt-2 text-[#606060] dark:text-white/60"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "12px",
                    }}
                  >
                    The more details you provide, the more accurate your quote will be.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-[#1D4ED8] active:bg-[#1E40AF] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#2563EB] disabled:active:scale-100 group"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "16px",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2" />
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      Request Quote
                      <Send
                        size={18}
                        className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p
                  className="text-[#606060] dark:text-white/60 text-center"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "12px",
                    lineHeight: "1.4",
                  }}
                >
                  By submitting this form, you agree to our privacy policy. We'll send you a detailed 
                  quote within 24 hours and may follow up with questions to ensure accuracy.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className="py-16 md:py-20 bg-white dark:bg-[#121212]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2
              className="mb-12 font-bold text-[#111] dark:text-white/90 text-center"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(24px, 3vw, 36px)",
              }}
            >
              What Happens Next?
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "We Review Your Request",
                  description: "Our team carefully reviews your project details and requirements within 2 hours.",
                },
                {
                  step: "2",
                  title: "Analysis & Planning",
                  description: "We analyze the scope, create a project plan, and calculate accurate pricing based on your needs.",
                },
                {
                  step: "3",
                  title: "Detailed Quote Delivered",
                  description: "Within 24 hours, you'll receive a comprehensive quote with pricing breakdown, timeline, and deliverables.",
                },
                {
                  step: "4",
                  title: "Follow-up Discussion",
                  description: "We schedule a call to discuss the quote, answer questions, and refine the proposal if needed.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-[#FAFAF6] dark:bg-[#1E1E1E] rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3
                      className="mb-2 font-bold text-[#111] dark:text-white/90"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "18px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#606060] dark:text-white/60"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
