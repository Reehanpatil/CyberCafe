import {
  ShieldCheck,
  Newspaper,
  FileText,
  Award,
  Briefcase,
  Building2,
  Landmark,
  Bell,
  CheckCircle2,
  Users,
} from "lucide-react";

const STATS = [
  { label: "Jobs Updated", value: "1,200+", icon: Briefcase },
  { label: "Results Posted", value: "850+", icon: Award },
  { label: "Admit Cards", value: "600+", icon: FileText },
  { label: "Daily Visitors", value: "10K+", icon: Users },
];

const FEATURES = [
  {
    icon: Landmark,
    title: "Central Govt Jobs",
    desc: "SSC, UPSC, Railways, Banking & all India-level recruitment notifications, updated daily.",
  },
  {
    icon: Building2,
    title: "State Govt Jobs",
    desc: "State PSC, Police, Forest Dept, Health Dept & local government vacancies for every state.",
  },
  {
    icon: Newspaper,
    title: "Sarkari Schemes",
    desc: "Latest central & state government schemes, eligibility criteria, and application steps.",
  },
  {
    icon: Award,
    title: "Exam Results",
    desc: "Fastest result updates with direct links to official boards — no delays, no confusion.",
  },
  {
    icon: FileText,
    title: "Admit Cards",
    desc: "Download links for admit cards / hall tickets as soon as boards release them.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    desc: "Stay notified about new vacancies, exam dates, and result announcements in real time.",
  },
];

export default function AboutPage() {
  return (
    <div className='bg-slate-50'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-linear-to-br from-blue-700 via-blue-800 to-slate-900 px-4 py-20 sm:py-24'>
        {/* Decorative pattern */}
        <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[24px_24px]' />

        <div className='relative max-w-4xl mx-auto text-center'>
          <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-5'>
            <ShieldCheck size={14} />
            Trusted Sarkari Information Portal
          </span>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
            About <span className='text-amber-400'>CyberCafe</span> Sarkari Hub
          </h1>
          <p className='mt-5 text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto'>
            Your one-stop destination for Central &amp; State Government Jobs,
            Sarkari Schemes, Exam Results, and Admit Cards — verified, fast, and
            always free.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className='px-4 -mt-8 relative z-10'>
        <div className='max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4'>
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className='bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-100 p-5 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300'
              >
                <div className='flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-700 mx-auto mb-3'>
                  <Icon size={20} />
                </div>
                <p className='text-2xl font-extrabold text-slate-900'>
                  {stat.value}
                </p>
                <p className='text-xs font-medium text-slate-500 mt-1'>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission Section */}
      <section className='px-4 py-16 sm:py-20'>
        <div className='max-w-4xl mx-auto text-center'>
          <span className='text-sm font-bold text-blue-700 uppercase tracking-wider'>
            Our Mission
          </span>
          <h2 className='mt-2 text-2xl sm:text-3xl font-bold text-slate-900'>
            Sahi Jaankari, Sahi Samay Par
          </h2>
          <p className='mt-4 text-slate-600 leading-relaxed max-w-2xl mx-auto'>
            Lakhs of students and job-seekers across India miss important
            deadlines simply because information doesn't reach them on time.
            CyberCafe was built to close that gap — bringing every Sarkari job
            notification, scheme update, exam result, and admit card to one
            reliable platform, in simple language, accessible to everyone.
          </p>
        </div>
      </section>

      {/* What We Cover - Feature Grid */}
      <section className='px-4 py-16 bg-white border-t border-slate-100'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <span className='text-sm font-bold text-blue-700 uppercase tracking-wider'>
              What We Cover
            </span>
            <h2 className='mt-2 text-2xl sm:text-3xl font-bold text-slate-900'>
              Everything Sarkari, In One Place
            </h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className='group p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300'
                >
                  <div className='flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-blue-800 text-white shadow-md mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <Icon size={22} />
                  </div>
                  <h3 className='text-lg font-bold text-slate-900'>
                    {feature.title}
                  </h3>
                  <p className='mt-2 text-sm text-slate-600 leading-relaxed'>
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust / Why Choose Us */}
      <section className='px-4 py-16 sm:py-20'>
        <div className='max-w-5xl mx-auto'>
          <div className='bg-linear-to-br from-slate-900 to-blue-900 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden'>
            <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[20px_20px]' />
            <div className='relative'>
              <h2 className='text-2xl sm:text-3xl font-bold text-white'>
                Why Job-Seekers Trust Us
              </h2>
              <div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left'>
                {[
                  "Verified information sourced directly from official boards & government websites",
                  "Zero spam, zero misleading links — only authentic notifications",
                  "Updated daily so you never miss a deadline, exam date, or result",
                ].map((point, i) => (
                  <div
                    key={i}
                    className='flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4'
                  >
                    <CheckCircle2
                      size={20}
                      className='text-amber-400 shrink-0 mt-0.5'
                    />
                    <p className='text-sm text-blue-100 leading-relaxed'>
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
