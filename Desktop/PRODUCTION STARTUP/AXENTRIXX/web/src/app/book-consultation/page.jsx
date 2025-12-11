import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Calendar, Mail, FileText, Clock, CheckCircle, AlertCircle, Send } from "lucide-react";

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    time: "",
    projectDescription: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/book-consultation", {
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
          date: "",
          time: "",
          projectDescription: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Consultation booking error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

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
              SCHEDULE A MEETING
            </div>

            <h1
              className="mb-6 font-bold leading-tight text-[#111] dark:text-white/90"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: "1.2",
              }}
            >
              Book a Free Consultation
            </h1>

            <p
              className="max-w-2xl mx-auto text-[#606060] dark:text-white/60"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(16px, 1.4vw, 18px)",
                lineHeight: "1.6",
              }}
            >
              Schedule a 30-minute consultation with our experts to discuss your project requirements, 
              get technical advice, and explore how we can help transform your business.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white dark:bg-[#121212]">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Clock,
                  title: "30-Minute Session",
                  description: "Focused discussion about your project needs and goals",
                },
                {
                  icon: CheckCircle,
                  title: "Expert Guidance",
                  description: "Get advice from experienced technology consultants",
                },
                {
                  icon: FileText,
                  title: "Custom Proposal",
                  description: "Receive a tailored solution proposal after the call",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-[#FAFAF6] dark:bg-[#1E1E1E] rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-14 h-14 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="mb-2 font-bold text-[#111] dark:text-white/90"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "18px",
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-[#606060] dark:text-white/60"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "14px",
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

        {/* Booking Form Section */}
        <section className="py-16 md:py-20 bg-[#FAFAF6] dark:bg-[#1E1E1E]">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <div className="bg-white dark:bg-[#121212] rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-lg">
              <h2
                className="mb-2 font-bold text-[#111] dark:text-white/90"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "clamp(24px, 3vw, 32px)",
                }}
              >
                Schedule Your Consultation
              </h2>
              <p
                className="mb-8 text-[#606060] dark:text-white/60"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                Fill out the form below and we'll send you a confirmation email with meeting details.
              </p>

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 dark:text-green-200 font-semibold text-sm mb-1">
                      Consultation Booked Successfully!
                    </p>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      We've sent a confirmation email with meeting details and a calendar invite. 
                      We look forward to speaking with you!
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <p className="text-red-800 dark:text-red-200 text-sm">
                    Sorry, there was an error booking your consultation. Please try again or contact us directly.
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

                {/* Date and Time Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-[#111] dark:text-white/90 font-medium mb-2"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#606060] dark:text-white/60 pointer-events-none" />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={today}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg text-[#111] dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200"
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "14px",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="block text-[#111] dark:text-white/90 font-medium mb-2"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#606060] dark:text-white/60 pointer-events-none" />
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3 bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg text-[#111] dark:text-white/90 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200 appearance-none"
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "14px",
                        }}
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label
                    htmlFor="projectDescription"
                    className="block text-[#111] dark:text-white/90 font-medium mb-2"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "14px",
                    }}
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#FAFAF6] dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-lg text-[#111] dark:text-white/90 placeholder-[#606060] dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all duration-200 resize-vertical"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "14px",
                      lineHeight: "1.5",
                    }}
                    placeholder="Tell us about your project, goals, challenges, and what you'd like to discuss during the consultation..."
                  />
                  <p
                    className="mt-2 text-[#606060] dark:text-white/60"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "12px",
                    }}
                  >
                    Please provide as much detail as possible to help us prepare for your consultation.
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
                      Booking Consultation...
                    </>
                  ) : (
                    <>
                      Book Consultation
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
                  By booking a consultation, you agree to our privacy policy. We'll send you a confirmation 
                  email and calendar invite. You can reschedule or cancel anytime.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 md:py-20 bg-white dark:bg-[#121212]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2
              className="mb-12 font-bold text-[#111] dark:text-white/90 text-center"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(24px, 3vw, 36px)",
              }}
            >
              What to Expect
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Confirmation Email",
                  description: "You'll receive an email confirmation with meeting details and a calendar invite within 5 minutes.",
                },
                {
                  step: "2",
                  title: "Preparation",
                  description: "Our team will review your project description and prepare relevant questions and suggestions.",
                },
                {
                  step: "3",
                  title: "Video Call",
                  description: "Join the 30-minute video consultation at your scheduled time to discuss your project in detail.",
                },
                {
                  step: "4",
                  title: "Follow-up Proposal",
                  description: "Within 24 hours, receive a custom proposal with timeline, pricing, and next steps.",
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
