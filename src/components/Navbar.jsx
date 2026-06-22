import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cpu, Home, Info, Phone, Layers, QrCode } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", to: "/", icon: Home },
  { name: "Services", to: "/services", icon: Layers },
  { name: "About", to: "/about", icon: Info },
  { name: "Contact", to: "/contact", icon: Phone },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Add shadow/blur intensity on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ?
          "bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-200/60"
        : "bg-white/95 backdrop-blur-md border-b border-slate-100"
      }`}
    >
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <div className='flex items-center justify-between h-16'>
          {/* Left - Brand */}
          <Link to='/' className='flex items-center gap-2.5 group shrink-0'>
            <span className='flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-500/30 group-hover:shadow-violet-500/50 group-hover:scale-105 transition-all duration-200'>
              <Cpu size={19} strokeWidth={2.4} />
            </span>
            <span className='text-xl font-extrabold text-slate-900 tracking-tight'>
              Cyber
              <span className='bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent'>
                Cafe
              </span>
            </span>
          </Link>

          {/* Center - Links (Desktop) */}
          <div className='hidden md:flex items-center gap-1 bg-slate-100/70 rounded-full p-1 border border-slate-200/70'>
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive ?
                      "text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md shadow-violet-500/30"
                    : "text-slate-600 hover:text-violet-700 hover:bg-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right - Receive Payment Link (Desktop) */}
          <div className='hidden md:flex items-center'>
            <Link
              to='/receive-payment'
              className='group relative inline-flex items-center gap-2 overflow-hidden px-5 py-2.5 text-sm font-bold text-white rounded-full shadow-md shadow-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/40 active:scale-95'
            >
              <span className='absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 transition-transform duration-500 group-hover:scale-110' />
              <QrCode size={16} className='relative z-10' />
              <span className='relative z-10'>Receive Payment</span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className='md:hidden relative z-50 p-2 rounded-lg text-slate-700 hover:bg-slate-100 active:scale-90 transition-all duration-150'
            aria-label='Toggle menu'
            aria-expanded={isOpen}
          >
            <span className='relative block w-6 h-6'>
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-200 ${
                  isOpen ?
                    "opacity-0 rotate-90 scale-50"
                  : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-200 ${
                  isOpen ?
                    "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-50"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu — overlay, does NOT push page content */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-out origin-top ${
          isOpen ?
            "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
          : "opacity-0 -translate-y-2 scale-y-95 pointer-events-none"
        }`}
      >
        <div className='mx-3 mt-2 mb-3 rounded-2xl border border-slate-200/70 bg-white/95 backdrop-blur-xl shadow-2xl shadow-slate-900/10 overflow-hidden'>
          <div className='flex flex-col p-2'>
            {NAV_LINKS.map((link, i) => {
              const isActive = location.pathname === link.to;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                    isActive ?
                      "text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md shadow-violet-500/30"
                    : "text-slate-700 hover:bg-violet-50 hover:text-violet-700 active:scale-[0.98]"
                  }`}
                >
                  <Icon size={18} />
                  {link.name}
                </Link>
              );
            })}

            <div className='h-px bg-slate-100 my-2 mx-2' />

            <Link
              to='/receive-payment'
              onClick={() => setIsOpen(false)}
              className='flex items-center justify-center gap-2 mx-1 mb-1 px-4 py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 shadow-md shadow-violet-500/30 active:scale-[0.97] transition-all duration-200'
            >
              <QrCode size={17} />
              Receive Payment
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop overlay when mobile menu open */}
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 top-16 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ?
            "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
        }`}
        aria-hidden='true'
      />
    </header>
  );
}
