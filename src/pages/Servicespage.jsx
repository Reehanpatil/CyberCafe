import {
  Wifi,
  Printer,
  FileSignature,
  CreditCard,
  Wallet,
  FileUser,
  ArrowRight,
  Sparkles,
  Clock,
  ShieldCheck,
} from "lucide-react";

const SERVICES = [
  {
    icon: Wifi,
    title: "High-Speed Internet",
    desc: "Reliable, fast browsing for forms, research, and downloads — no buffering, no waiting.",
    tag: "Most Used",
  },
  {
    icon: Printer,
    title: "Printing & Scanning",
    desc: "Print admit cards, results, and certificates instantly. Scan documents in high quality.",
    tag: "Quick Service",
  },
  {
    icon: FileSignature,
    title: "Online Form Filling",
    desc: "Expert-assisted filling for government job applications, scheme forms, and exam registrations.",
    tag: "Govt Jobs",
  },
  {
    icon: CreditCard,
    title: "PAN / Aadhaar Services",
    desc: "New applications, corrections, and updates for PAN Card and Aadhaar — done right, every time.",
    tag: "Documentation",
  },
  {
    icon: Wallet,
    title: "Digital Payments",
    desc: "Pay exam fees, scheme charges, and bills securely via UPI, cards, or net banking.",
    tag: "Secure",
  },
  {
    icon: FileUser,
    title: "Resume Building",
    desc: "Professional resume and biodata creation tailored for govt and private job applications.",
    tag: "Career",
  },
];

const WHY_US = [
  { icon: Clock, text: "Fast turnaround — most services done same day" },
  { icon: ShieldCheck, text: "Verified process, no errors in your documents" },
  { icon: Sparkles, text: "Affordable pricing for every student & job-seeker" },
];

export default function ServicesPage() {
  return (
    <div className='bg-slate-50'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 px-4 py-20 sm:py-24'>
        <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]' />
        <div className='relative max-w-4xl mx-auto text-center'>
          <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-5'>
            <Sparkles size={14} />
            What We Offer
          </span>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
            Our <span className='text-amber-400'>Services</span>
          </h1>
          <p className='mt-5 text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto'>
            From internet access to government form filling — everything a
            job-seeker and student needs, available right here at CyberCafe.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className='px-4 py-16 sm:py-20 -mt-8 relative z-10'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className='group relative bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1.5 hover:border-blue-300 transition-all duration-300'
              >
                {/* Tag badge */}
                <span className='absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wide text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full'>
                  {service.tag}
                </span>

                {/* Icon */}
                <div className='flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-md shadow-blue-900/20 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                  <Icon size={24} />
                </div>

                <h3 className='text-lg font-bold text-slate-900'>
                  {service.title}
                </h3>
                <p className='mt-2 text-sm text-slate-600 leading-relaxed'>
                  {service.desc}
                </p>

                <div className='mt-4 flex items-center gap-1.5 text-sm font-semibold text-blue-700 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300'>
                  Learn more
                  <ArrowRight size={15} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us Strip */}
      <section className='px-4 py-16 sm:py-20 bg-white border-t border-slate-100'>
        <div className='max-w-5xl mx-auto'>
          <div className='bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden'>
            <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:20px_20px]' />
            <div className='relative'>
              <div className='text-center mb-8'>
                <h2 className='text-2xl sm:text-3xl font-bold text-white'>
                  Why Choose CyberCafe
                </h2>
                <p className='mt-2 text-blue-100 text-sm sm:text-base max-w-xl mx-auto'>
                  Trusted by hundreds of students and job-seekers in Gokak Taluk
                </p>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                {WHY_US.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className='flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors duration-300'
                    >
                      <span className='flex items-center justify-center w-9 h-9 rounded-lg bg-amber-400/20 text-amber-400 shrink-0'>
                        <Icon size={17} />
                      </span>
                      <p className='text-sm text-blue-50 leading-relaxed'>
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='px-4 py-16 sm:py-20'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-2xl sm:text-3xl font-bold text-slate-900'>
            Need help with any service?
          </h2>
          <p className='mt-3 text-slate-600'>
            Visit us in person or reach out — our team is ready to assist you.
          </p>
          <a
            href='/contact'
            className='mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-blue-900 shadow-md shadow-blue-900/20 hover:shadow-lg hover:shadow-blue-900/30 active:scale-[0.98] transition-all duration-200'
          >
            Contact Us
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
