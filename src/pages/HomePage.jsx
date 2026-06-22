import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  Landmark,
  Building2,
  Award,
  FileText,
  CheckSquare,
  Shield,
  ChevronDown,
  MapPin,
  CalendarDays,
  Search,
  ExternalLink,
  X,
  Grid3x3,
  Accessibility,
  Banknote,
  BookUser,
  Briefcase,
  Building,
  Car,
  CreditCard,
  Factory,
  FileSignature,
  Fingerprint,
  Flame,
  GraduationCap,
  HandCoins,
  HardHat,
  HeartPulse,
  Home,
  IdCard,
  Leaf,
  MessageSquareWarning,
  Phone,
  Receipt,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sprout,
  Sun,
  Tractor,
  TrainFront,
  TrendingUp,
  Users,
  Vote,
  Wallet,
  Wheat,
  Wind,
} from "lucide-react";
import {
  CATEGORIES,
  getListingsByCategory,
  PORTAL_SERVICES,
} from "../data/listings.js";

const CATEGORY_ICONS = {
  live: Bell,
  central: Landmark,
  state: Building2,
  result: Award,
  admit: FileText,
  answerkey: CheckSquare,
  defence: Shield,
};

// Maps each PORTAL_SERVICES icon name (string) to its actual Lucide component.
// Explicit map keeps the bundle small instead of importing the whole icon set.
const SERVICE_ICONS = {
  Accessibility,
  Award,
  Banknote,
  BookUser,
  Briefcase,
  Building,
  Car,
  CreditCard,
  Factory,
  FileSignature,
  FileText,
  Fingerprint,
  Flame,
  GraduationCap,
  HandCoins,
  HardHat,
  HeartPulse,
  Home,
  IdCard,
  Landmark,
  Leaf,
  MessageSquareWarning,
  Phone,
  Receipt,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sprout,
  Sun,
  Tractor,
  TrainFront,
  TrendingUp,
  Users,
  Vote,
  Wallet,
  Wheat,
  Wind,
};

const TYPE_STYLES = {
  Job: "bg-blue-50 text-blue-700",
  Result: "bg-green-50 text-green-700",
  "Admit Card": "bg-amber-50 text-amber-700",
  "Answer Key": "bg-violet-50 text-violet-700",
};

export default function HomePage() {
  const [openCategory, setOpenCategory] = useState(null);
  const [openService, setOpenService] = useState(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleToggleCategory = (categoryId) => {
    setOpenCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const handleToggleService = (serviceId) => {
    setOpenService((prev) => (prev === serviceId ? null : serviceId));
  };

  // Filter categories by matching category label or any listing inside it
  const filteredCategories = useMemo(() => {
    if (!query.trim()) return CATEGORIES;
    const q = query.toLowerCase();
    return CATEGORIES.filter((cat) => {
      if (cat.label.toLowerCase().includes(q)) return true;
      return getListingsByCategory(cat.id).some(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.org.toLowerCase().includes(q),
      );
    });
  }, [query]);

  // Filter portal services by name or description
  const filteredServices = useMemo(() => {
    if (!query.trim()) return PORTAL_SERVICES;
    const q = query.toLowerCase();
    return PORTAL_SERVICES.filter(
      (svc) =>
        svc.name.toLowerCase().includes(q) ||
        svc.description.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className='bg-slate-50'>
      {/* Hero + Search */}
      <section className='relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 px-4 pt-16 sm:pt-20 pb-20 sm:pb-24'>
        <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]' />

        <div className='relative max-w-4xl mx-auto text-center'>
          <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-5'>
            <Bell size={14} />
            Updated Daily — Never Miss a Deadline
          </span>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
            Find Your Next <span className='text-amber-400'>Sarkari</span>{" "}
            Opportunity
          </h1>
          <p className='mt-5 text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto'>
            Jobs, Results, Admit Cards &amp; Government Portal Services — all
            verified, all in one place.
          </p>
        </div>
      </section>

      {/* Floating Search Bar */}
      <section className='px-4 -mt-10 sm:-mt-12 relative z-10'>
        <div className='max-w-2xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 p-2'>
          <div className='relative'>
            <Search
              size={20}
              className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-400'
            />
            <input
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search jobs, results, or services... e.g. PAN, SSC, Aadhaar'
              className='w-full pl-12 pr-10 py-2 rounded-xl border-none text-sm sm:text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600'
                aria-label='Clear search'
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Grid + Accordion (Jobs / Results / Admit Cards) */}
      <section className='px-4 py-10 sm:py-12'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex items-center gap-2 mb-5'>
            <span className='w-1.5 h-6 rounded-full bg-gradient-to-b from-pink-500 to-violet-600' />
            <h2 className='text-lg sm:text-xl font-bold text-slate-900'>
              All Govt Service
            </h2>
          </div>

          {filteredCategories.length === 0 && filteredServices.length === 0 ?
            <div className='bg-white rounded-2xl border border-slate-200 p-12 text-center'>
              <Search size={28} className='text-slate-300 mx-auto mb-2' />
              <p className='text-sm text-slate-500'>
                No results found for "{query}".
              </p>
            </div>
          : filteredCategories.length > 0 && (
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4'>
                {filteredCategories.map((cat) => {
                  const Icon = CATEGORY_ICONS[cat.id];
                  const isActive = openCategory === cat.id;
                  const count = getListingsByCategory(cat.id).length;
                  return (
                    <React.Fragment key={cat.id}>
                      <button
                        onClick={() => handleToggleCategory(cat.id)}
                        className={`group relative flex flex-col items-center justify-center gap-2.5 p-4 sm:p-5 rounded-2xl border text-center transition-all duration-300 ${
                          isActive ?
                            "border-blue-500 bg-blue-50 shadow-md shadow-blue-900/10"
                          : "border-emerald-200 bg-white hover:border-blue-300 hover:shadow-md"
                        }`}
                      >
                        <span
                          className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                            isActive ?
                              "bg-gradient-to-br from-blue-600 to-blue-800 text-white scale-105"
                            : "bg-blue-50 text-blue-700 group-hover:scale-105"
                          }`}
                        >
                          <Icon size={22} />
                        </span>
                        <span className='text-xs sm:text-sm font-bold text-slate-800 leading-snug'>
                          {cat.label}
                        </span>
                        <span className='absolute top-2 right-2 text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full'>
                          {count}
                        </span>
                        <ChevronDown
                          size={14}
                          className={`absolute bottom-2 right-2 text-slate-300 transition-transform duration-300 ${
                            isActive ? "rotate-180 text-blue-500" : ""
                          }`}
                        />
                      </button>

                      {isActive && (
                        <div className='col-span-full'>
                          <CategoryPanel
                            category={cat}
                            listings={getListingsByCategory(cat.id)}
                            onClose={() => setOpenCategory(null)}
                            onSelect={(id) => navigate(`/job/${id}`)}
                          />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            )
          }
        </div>
      </section>

      {/* Portal Service Grid + Accordion (independent state from above) */}
      {filteredServices.length > 0 && (
        <section className='px-4 py-2 sm:py-4 pb-14'>
          <div className='max-w-6xl mx-auto'>
            <div className='flex items-center gap-2 mb-5'>
              <span className='w-1.5 h-6 rounded-full bg-gradient-to-b from-pink-500 to-violet-600' />
              <h2 className='text-lg sm:text-xl font-bold text-slate-900'>
                Portal Service
              </h2>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4'>
              {filteredServices.map((svc) => {
                const Icon = SERVICE_ICONS[svc.icon] || Grid3x3;
                const isActive = openService === svc.id;
                return (
                  <React.Fragment key={svc.id}>
                    <button
                      onClick={() => handleToggleService(svc.id)}
                      className={`group relative flex flex-col items-center justify-center gap-3 p-4 sm:p-5 rounded-2xl border text-center transition-all duration-300 ${
                        isActive ?
                          "border-violet-400 bg-violet-50 shadow-md shadow-violet-900/10"
                        : "border-emerald-200 bg-white hover:border-violet-300 hover:shadow-md"
                      }`}
                    >
                      <span
                        className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                          isActive ?
                            "bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white scale-105"
                          : "bg-violet-50 text-violet-700 group-hover:scale-105"
                        }`}
                      >
                        <Icon size={22} />
                      </span>
                      <span className='text-xs sm:text-sm font-bold text-slate-800 leading-snug line-clamp-2'>
                        {svc.name}
                      </span>
                    </button>

                    {isActive && (
                      <div className='col-span-full'>
                        <ServicePanel
                          service={svc}
                          onClose={() => setOpenService(null)}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function CategoryPanel({ category, listings, onClose, onSelect }) {
  return (
    <div className='bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-900/5 p-5 sm:p-6 animate-[fadeIn_0.25s_ease-out]'>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-lg sm:text-xl font-bold text-slate-900'>
          {category.label}
        </h2>
        <button
          onClick={onClose}
          className='flex items-center justify-center w-8 h-8 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors'
          aria-label='Close panel'
        >
          ✕
        </button>
      </div>

      {listings.length === 0 ?
        <div className='text-center py-10'>
          <Search size={28} className='text-slate-300 mx-auto mb-2' />
          <p className='text-sm text-slate-500'>
            No listings available right now.
          </p>
        </div>
      : <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          {listings.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className='group text-left bg-slate-50 hover:bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md p-4 transition-all duration-200'
            >
              <div className='flex items-start justify-between gap-3'>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${TYPE_STYLES[item.type] || "bg-slate-100 text-slate-600"}`}
                >
                  {item.type}
                </span>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                      item.badge === "New" ?
                        "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className='mt-3 text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors'>
                {item.title}
              </h3>
              <p className='mt-1 text-xs sm:text-sm text-slate-500'>
                {item.org}
              </p>

              <div className='mt-3 flex items-center justify-between text-xs text-slate-500'>
                <span className='flex items-center gap-1'>
                  <MapPin size={12} />
                  {item.location}
                </span>
                <span className='flex items-center gap-1 font-medium text-slate-600'>
                  <CalendarDays size={12} />
                  {item.date}
                </span>
              </div>
            </button>
          ))}
        </div>
      }
    </div>
  );
}

function ServicePanel({ service, onClose }) {
  return (
    <div className='bg-white rounded-2xl border border-slate-200 shadow-lg shadow-slate-900/5 p-5 sm:p-6 animate-[fadeIn_0.25s_ease-out]'>
      <div className='flex items-start justify-between gap-4 mb-2'>
        <h2 className='text-base sm:text-lg font-bold text-slate-900'>
          {service.name}
        </h2>
        <button
          onClick={onClose}
          className='flex items-center justify-center w-8 h-8 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors shrink-0'
          aria-label='Close panel'
        >
          ✕
        </button>
      </div>

      {service.description && (
        <p className='text-sm text-slate-500 leading-relaxed mb-5'>
          {service.description}
        </p>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
        {service.sub_links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center justify-between gap-2 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-violet-300 hover:shadow-md transition-all duration-200'
          >
            <span className='text-sm font-semibold text-slate-700 group-hover:text-violet-700 leading-snug'>
              {link.label}
            </span>
            <ExternalLink
              size={14}
              className='text-slate-400 group-hover:text-violet-600 shrink-0'
            />
          </a>
        ))}
      </div>
    </div>
  );
}
