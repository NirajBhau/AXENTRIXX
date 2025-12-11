import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Clock, ArrowLeft, X, Check } from "lucide-react";

export default function HealthcareManagementPage() {
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

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      <main className="pt-32">
        {/* Coming Soon Section */}
        <section className="py-20 md:py-32 bg-white dark:bg-[#121212]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-full mx-auto mb-8">
              <Clock className="w-10 h-10 text-[#2563EB]" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h1
              className="mb-6 font-bold text-[#111] dark:text-white/90"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: "1.2",
              }}
            >
              Healthcare Management Systems
            </h1>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-full mb-6">
              <span
                className="text-[#2563EB] font-semibold"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "14px",
                  letterSpacing: "0.05em",
                }}
              >
                COMING SOON
              </span>
            </div>

            {/* Description */}
            <p
              className="mb-12 text-[#606060] dark:text-white/60 max-w-2xl mx-auto"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(16px, 1.4vw, 20px)",
                lineHeight: "1.6",
              }}
            >
              We're working on something special for healthcare management solutions.
              Our team is developing comprehensive systems to improve patient care and
              streamline medical operations.
            </p>

            {/* Features Preview */}
            <div className="mb-12 p-8 bg-[#FAFAF6] dark:bg-[#1E1E1E] rounded-2xl border border-gray-200 dark:border-gray-800">
              <h2
                className="mb-6 font-bold text-[#111] dark:text-white/90"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "24px",
                }}
              >
                What to Expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 flex-shrink-0"></div>
                  <span
                    className="text-[#606060] dark:text-white/60"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "16px",
                    }}
                  >
                    Electronic Health Records (EHR)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 flex-shrink-0"></div>
                  <span
                    className="text-[#606060] dark:text-white/60"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "16px",
                    }}
                  >
                    Patient Portals
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 flex-shrink-0"></div>
                  <span
                    className="text-[#606060] dark:text-white/60"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "16px",
                    }}
                  >
                    HIPAA-Compliant Systems
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-2 flex-shrink-0"></div>
                  <span
                    className="text-[#606060] dark:text-white/60"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "16px",
                    }}
                  >
                    Medical Billing Integration
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-[#1D4ED8] active:bg-[#1E40AF] active:scale-95 cursor-pointer"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "16px",
                }}
              >
                Get Notified When Available
              </button>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-[#2563EB] hover:text-white active:scale-95"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "16px",
                }}
              >
                <ArrowLeft size={20} />
                View All Services
              </a>
            </div>

            {/* Additional Info */}
            <p
              className="text-[#606060] dark:text-white/60"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "14px",
              }}
            >
              In the meantime, check out our other services or contact us to discuss
              your healthcare technology needs.
            </p>
          </div>
        </section>
      </main>

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
                    Enter your email to get notified when our Healthcare Management System is ready.
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

      <Footer />
    </div>
  );
}
