import { useState } from 'react';

// DESIGN 3: Card-Based Modern - Everything in cards with shadows and depth
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

// ... (existing imports)

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setMessage('Failed to connect to server');
    }
  };

  return (
    <div className="mb-6">
      {!status.startsWith('success') ? (
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 text-[13px] focus:outline-none focus:ring-2 focus:ring-white/50 mb-3 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-white text-[#2563EB] rounded-xl hover:bg-gray-100 transition-all font-semibold text-[13px] disabled:opacity-70 flex items-center justify-center"
          >
            {status === 'loading' ? (
              <span className="w-5 h-5 border-2 border-[#2563EB] border-t-transparent rounded-full animate-spin"></span>
            ) : (
              'Subscribe Now'
            )}
          </button>
          {status === 'error' && (
            <p className="mt-2 text-red-200 text-xs text-center">{message}</p>
          )}
        </form>
      ) : (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/30 animate-in fade-in zoom-in duration-300">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 text-[#2563EB]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h4 className="font-bold text-white text-sm mb-1">Subscribed!</h4>
          <p className="text-white/80 text-xs">{message}</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-3 text-xs text-white underline hover:text-white/80"
          >
            Add another email
          </button>
        </div>
      )}
    </div>
  );
}

export default function FooterDesign3() {
  const currentYear = new Date().getFullYear();
  // ... (rest of the file)

  return (
    <footer className="bg-gray-50 dark:bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Company Card */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h2 className="text-[28px] font-bold text-[#111] dark:text-white">Axentrixx</h2>
            </div>
            <p className="text-[#606060] dark:text-white/70 text-[14px] leading-relaxed mb-6">
              Empowering businesses through innovative technology solutions.
            </p>

            <div className="space-y-3">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=advikpatel55@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#606060] dark:text-white/70 hover:text-[#2563EB] dark:hover:text-white transition-colors text-[13px]">
                <div className="w-8 h-8 bg-blue-50 dark:bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Mail size={14} className="text-[#2563EB]" />
                </div>
                advikpatel55@gmail.com
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-3 text-[#606060] dark:text-white/70 hover:text-[#2563EB] dark:hover:text-white transition-colors text-[13px]">
                <div className="w-8 h-8 bg-blue-50 dark:bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Phone size={14} className="text-[#2563EB]" />
                </div>
                +1 (555) 123-4567
              </a>
              <div className="flex items-center gap-3 text-[#606060] dark:text-white/70 text-[13px]">
                <div className="w-8 h-8 bg-blue-50 dark:bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <MapPin size={14} className="text-[#2563EB]" />
                </div>
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Links Card */}
          <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-[#111] dark:text-white font-bold mb-4 text-[14px]">Quick Links</h4>
                <ul className="space-y-2.5">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About Us", href: "/about" },
                    { name: "Case Studies", href: "/case-studies" },
                    { name: "Blog", href: "/blog" },
                    { name: "Careers", href: "/careers" },
                    { name: "Contact", href: "/contact" },
                  ].map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[#606060] dark:text-white/60 hover:text-[#2563EB] dark:hover:text-white transition-colors text-[13px] flex items-center gap-1 group">
                        {link.name}
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#111] dark:text-white font-bold mb-4 text-[14px]">Services</h4>
                <ul className="space-y-2.5">
                  {[
                    { name: "Custom Web Development", href: "/services/web-development" },
                    { name: "Mobile App Development", href: "/services/mobile-development" },
                    { name: "Healthcare Management Systems", href: "/services/healthcare-management" },
                    { name: "Business Intelligence", href: "/services/business-intelligence" },
                    { name: "Data Analytics", href: "/services/data-analytics" },
                  ].map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-[#606060] dark:text-white/60 hover:text-[#2563EB] dark:hover:text-white transition-colors text-[13px] flex items-center gap-1 group">
                        {link.name}
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter & CTA Card */}
          <div className="bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-white">
            <h3 className="text-[20px] font-bold mb-2">Stay Updated</h3>
            <p className="text-white/80 text-[13px] mb-5">Get the latest tech insights</p>

            <NewsletterForm />

            <div className="mb-6">
              <h4 className="text-white/90 font-semibold mb-3 text-[13px]">Follow Us</h4>
              <div className="flex gap-2">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all group"
                  >
                    <Icon size={16} className="text-white group-hover:text-[#2563EB]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <a href="/book-consultation" className="block px-4 py-2.5 bg-white text-[#2563EB] rounded-lg hover:bg-gray-100 transition-all text-[12px] font-semibold text-center">
                Schedule Consultation
              </a>
              <a href="/request-quote" className="block px-4 py-2.5 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all text-[12px] font-semibold text-center">
                Request Quote
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#606060] dark:text-white/60 text-[13px]">
              © {currentYear} Axentrixx. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-[#606060] dark:text-white/60 hover:text-[#2563EB] dark:hover:text-white transition-colors text-[13px]">
                Privacy Policy
              </a>
              <a href="/terms" className="text-[#606060] dark:text-white/60 hover:text-[#2563EB] dark:hover:text-white transition-colors text-[13px]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
