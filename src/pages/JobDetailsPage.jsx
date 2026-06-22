import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Building2,
  MapPin,
  Users,
  GraduationCap,
  CalendarRange,
  Wallet,
  CalendarDays,
  ExternalLink,
  FileCheck2,
  ChevronRight,
} from 'lucide-react'
import { getListingById } from '../data/listings.js'

const TYPE_STYLES = {
  Job: 'bg-blue-50 text-blue-700',
  Result: 'bg-green-50 text-green-700',
  'Admit Card': 'bg-amber-50 text-amber-700',
  'Answer Key': 'bg-violet-50 text-violet-700',
}

export default function JobDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const job = getListingById(id)

  if (!job) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">Listing Not Found</h1>
          <p className="mt-2 text-slate-500">The job, result, or admit card you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 min-h-[calc(100vh-64px)]">

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 px-4 pt-10 pb-16 sm:pb-20">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Listings
          </button>

          <div className="flex items-start justify-between gap-3 flex-wrap">
            <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full ${TYPE_STYLES[job.type] || 'bg-slate-100 text-slate-600'}`}>
              {job.type}
            </span>
            {job.badge && (
              <span
                className={`text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full ${
                  job.badge === 'New' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {job.badge}
              </span>
            )}
          </div>

          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {job.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-blue-100">
            <span className="flex items-center gap-1.5">
              <Building2 size={15} />
              {job.org}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} />
              {job.location}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 -mt-8 sm:-mt-10 relative z-10 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main details */}
          <div className="lg:col-span-2 space-y-5">

            {/* Quick info grid */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
              <h2 className="text-base font-bold text-slate-900 mb-4">Post & Vacancy Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoRow icon={FileCheck2} label="Post Name" value={job.postName} />
                <InfoRow icon={Users} label="Total Posts" value={job.totalPosts} />
                <InfoRow icon={GraduationCap} label="Qualification" value={job.qualification} />
                <InfoRow icon={CalendarRange} label="Age Limit" value={job.ageLimit} />
              </div>
            </div>

            {/* Fees */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
              <h2 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Wallet size={17} className="text-blue-700" />
                Application Fee
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">{job.fees}</p>
            </div>

            {/* Important Dates */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
              <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CalendarDays size={17} className="text-blue-700" />
                Important Dates
              </h2>
              <div className="space-y-3">
                {job.importantDates?.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-lg bg-slate-50 border border-slate-100"
                  >
                    <span className="text-sm text-slate-600 flex items-center gap-2">
                      <ChevronRight size={14} className="text-blue-400" />
                      {d.label}
                    </span>
                    <span className="text-sm font-bold text-slate-900">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Apply */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
              <h2 className="text-base font-bold text-slate-900 mb-3">How to Apply</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{job.howToApply}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:18px_18px]" />
              <div className="relative">
                <h3 className="font-bold text-lg mb-1">Ready to Apply?</h3>
                <p className="text-sm text-blue-100 mb-5 leading-relaxed">
                  Visit the official portal to complete your application before the deadline.
                </p>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-bold text-blue-900 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all duration-200"
                >
                  Apply Now
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Official Source</h3>
              <a
                href={job.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                Visit Official Website
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-blue-700 shrink-0">
        <Icon size={16} />
      </span>
      <div>
        <p className="text-xs font-medium text-slate-400">{label}</p>
        <p className="text-sm font-semibold text-slate-800 mt-0.5">{value}</p>
      </div>
    </div>
  )
}
