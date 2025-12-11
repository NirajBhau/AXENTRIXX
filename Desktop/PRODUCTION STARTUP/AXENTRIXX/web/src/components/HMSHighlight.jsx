import React, { useState } from "react";
import {
  Users,
  DollarSign,
  FileText,
  BarChart3,
  ArrowRight,
  X,
  Check,
  Clock,
} from "lucide-react";

export default function HMSHighlight() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
      setMessage("Failed to connect to server");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStatus("idle");
    setMessage("");
    setEmail("");
  };

  const features = [
    {
      icon: Users,
      title: "Patient Management",
      description:
        "Complete patient records, appointment scheduling, and medical history tracking.",
    },
    {
      icon: DollarSign,
      title: "Billing & Finance",
      description:
        "Automated billing, insurance claims, and comprehensive financial reporting.",
    },
    {
      icon: FileText,
      title: "Inventory Control",
      description:
        "Real-time inventory tracking, automated reordering, and supplier management.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Advanced reporting and analytics for data-driven healthcare decisions.",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#EFF1EA] dark:bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="order-2 lg:order-1">
            {/* Section Header */}
            <div className="mb-8">
              <div
                className="mb-4 font-medium tracking-[0.12em] uppercase text-[rgba(85,85,85,0.7)] dark:text-white/50"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "12px",
                }}
              >
                FLAGSHIP PRODUCT
              </div>

              <h2
                className="mb-6 font-bold leading-tight text-[#111] dark:text-white/90"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  lineHeight: "1.2",
                }}
              >
                Hospital Management System
              </h2>

              <p
                className="text-[#606060] dark:text-white/60 max-w-[500px]"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "clamp(14px, 1.2vw, 18px)",
                  lineHeight: "1.6",
                }}
              >
                Streamline your healthcare operations with our comprehensive HMS
                solution. Built specifically for clinics, hospitals, and medical
                centers.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-xl flex-shrink-0">
                      <IconComponent
                        className="w-6 h-6 text-[#2563EB]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-[#111] dark:text-white/90 mb-2"
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "16px",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-[#606060] dark:text-white/60"
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "14px",
                          lineHeight: "1.4",
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Benefits List */}
            <div className="mb-8">
              <ul className="space-y-3">
                {[
                  "Reduce administrative costs by up to 40%",
                  "Improve patient satisfaction with streamlined processes",
                  "Ensure HIPAA compliance and data security",
                  "Scale from small clinics to large hospital networks",
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center text-[#606060] dark:text-white/60"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "14px",
                    }}
                  >
                    <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mr-3 flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-[#1D4ED8] active:bg-[#1E40AF] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 focus:ring-offset-2 group"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "16px",
                }}
              >
                Request Demo
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] dark:text-[#60A5FA] rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-[#2563EB] hover:text-white dark:hover:bg-[#60A5FA] dark:hover:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 focus:ring-offset-2 cursor-pointer"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "16px",
                }}
              >
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/hms-guide-v2.jpg"
                alt="Full Guide of Hospital Management System"
                className="w-full h-auto rounded-2xl dark:opacity-90 shadow-2xl"
              />
              {/* Dark mode overlay for image contrast */}
              <div className="absolute inset-0 dark:bg-black/20 rounded-2xl pointer-events-none" />

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#262626] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-[24px] font-bold text-[#111] dark:text-white/90">
                      9+
                    </div>
                    <div className="text-[12px] text-[#606060] dark:text-white/60">
                      Healthcare Clients Awaiting
                    </div>
                  </div>
                  <div className="w-px h-8 bg-gray-200 dark:bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-[24px] font-bold text-[#111] dark:text-white/90">
                      99.9%
                    </div>
                    <div className="text-[12px] text-[#606060] dark:text-white/60">
                      Uptime
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-2xl p-8 animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {status === "success" ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-[#111] dark:text-white mb-2">You're on the list!</h3>
                <p className="text-[#606060] dark:text-white/70 mb-6">
                  {message || "We'll let you know as soon as it's ready."}
                </p>
                <button
                  onClick={closeModal}
                  className="w-full py-3 bg-[#2563EB] text-white rounded-xl font-semibold hover:bg-[#1D4ED8] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111] dark:text-white mb-2">Join the Waitlist</h3>
                  <p className="text-[#606060] dark:text-white/70">
                    Enter your email to get notified when our Hospital Management System is ready.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#2A2A2A] border border-gray-200 dark:border-gray-700 text-[#111] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">{message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 bg-[#2563EB] text-white rounded-xl font-semibold hover:bg-[#1D4ED8] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {status === "loading" ? "Joining..." : "Notify Me"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
