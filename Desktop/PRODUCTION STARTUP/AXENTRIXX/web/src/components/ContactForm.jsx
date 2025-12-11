import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    "Web Development",
    "Data Analytics",
    "Hospital Management System",
    "Custom Solution",
    "Consultation",
    "Other",
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

    try {
      // Call backend API
      const response = await fetch("http://localhost:5000/api/contact", {
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
          company: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-100 text-green-700 rounded-xl flex items-center space-x-2 animate-fade-in">
          <CheckCircle size={20} />
          <span className="text-sm font-medium">Message sent successfully!</span>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl flex items-center space-x-2 animate-fade-in">
          <AlertCircle size={20} />
          <span className="text-sm font-medium">Something went wrong. Please try again.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div className="group">
            <label htmlFor="name" className="block text-sm font-bold text-blue-800 mb-1.5 pl-1 group-focus-within:text-blue-600 transition-colors">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div className="group">
            <label htmlFor="email" className="block text-sm font-bold text-blue-800 mb-1.5 pl-1 group-focus-within:text-blue-600 transition-colors">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
              placeholder="john@example.com"
            />
          </div>

          {/* Company */}
          <div className="group">
            <label htmlFor="company" className="block text-sm font-bold text-blue-800 mb-1.5 pl-1 group-focus-within:text-blue-600 transition-colors">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
              placeholder="Acme Inc."
            />
          </div>

          {/* Phone */}
          <div className="group">
            <label htmlFor="phone" className="block text-sm font-bold text-blue-800 mb-1.5 pl-1 group-focus-within:text-blue-600 transition-colors">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        {/* Service Interest */}
        <div className="group">
          <label htmlFor="service" className="block text-sm font-bold text-blue-800 mb-1.5 pl-1 group-focus-within:text-blue-600 transition-colors">
            Service Interest <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 appearance-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300 cursor-pointer"
            >
              <option value="" disabled>Select a service</option>
              {serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-slate-500">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="group">
          <label htmlFor="message" className="block text-sm font-bold text-blue-800 mb-1.5 pl-1 group-focus-within:text-blue-600 transition-colors">
            Your Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 hover:border-blue-300 resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <Send size={18} className="ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
