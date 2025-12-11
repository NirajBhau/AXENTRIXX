import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: "Products", href: "/products" }, // Hidden - Coming Soon
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Logo positioned and aligned with navbar */}
      <div className="fixed top-6 left-6 z-50">
        <a href="/" className="group flex items-center space-x-3">
          {/* Axentrixx Logo with circular hover background - 58x58 */}
          <div className="relative rounded-full group-hover:bg-white/10 transition-all duration-200 flex items-center justify-center" style={{ width: '58px', height: '58px' }}>
            <img 
              src="/logo.png" 
              alt="Axentrixx" 
              className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </div>
          {/* Axentrixx Text */}
          <span 
            className="text-[26px] sm:text-[30px] font-bold tracking-[0.15em] text-[#D1D5DB] dark:text-[#D1D5DB] transition-colors duration-200 group-hover:text-[#2563EB]"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            AXENTRIXX
          </span>
        </a>
      </div>

      {/* Book Consultation Button - Top Right Corner */}
      <div className="fixed top-6 right-6 z-50">
        <a
          href="/book-consultation"
          className="inline-flex items-center px-6 py-3 bg-[#2563EB] text-white text-[14px] font-semibold rounded-full shadow-lg transition-all duration-200 ease-in-out hover:bg-[#1D4ED8] hover:shadow-xl active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-opacity-50 focus-visible:ring-offset-2 whitespace-nowrap"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          BOOK CONSULTATION
        </a>
      </div>

      {/* Navbar */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40">
        <nav className="bg-white/10 dark:bg-white/10 backdrop-blur-xl rounded-full px-8 py-3 border-2 border-[#60A5FA]/30 dark:border-[#60A5FA]/30">
          <div className="flex items-center justify-center space-x-8">
            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[16px] font-medium text-[#60A5FA] dark:text-[#60A5FA] hover:text-[#2563EB] dark:hover:text-[#3B82F6] transition-all duration-150 ease-in-out active:scale-95 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-opacity-50 focus-visible:ring-offset-2"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="xl:hidden p-2 text-[#60A5FA] dark:text-[#60A5FA] transition-all duration-150 ease-in-out hover:text-[#2563EB] dark:hover:text-[#3B82F6] active:scale-95"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-30 xl:hidden w-80 max-w-[90vw]">
          <div className="bg-white/10 dark:bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/20 p-4">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[16px] font-medium text-[#60A5FA] dark:text-[#60A5FA] hover:text-[#2563EB] dark:hover:text-[#3B82F6] hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-150 ease-in-out py-2 px-3 rounded-lg active:scale-95"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
