import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Cpu,
  ShieldCheck,
  Bell,
  FileCheck2,
  ArrowRight,
  Check,
} from 'lucide-react'

const HIGHLIGHTS = [
  { icon: Bell, text: 'Instant alerts on new job notifications' },
  { icon: FileCheck2, text: 'Save & track your applied schemes' },
  { icon: ShieldCheck, text: '100% secure & verified information' },
]

function getPasswordStrength(password) {
  if (!password) return { score: 0, label: '', color: 'bg-slate-200' }
  let score = 0
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++

  const levels = [
    { label: 'Weak', color: 'bg-red-400' },
    { label: 'Weak', color: 'bg-red-400' },
    { label: 'Fair', color: 'bg-amber-400' },
    { label: 'Good', color: 'bg-blue-500' },
    { label: 'Strong', color: 'bg-green-500' },
  ]
  return { score, ...levels[score] }
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const strength = getPasswordStrength(formData.password)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const validate = () => {
    const next = {}
    if (!formData.name.trim()) next.name = 'Full name is required'
    if (!formData.email.trim()) next.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) next.email = 'Enter a valid email'
    if (!formData.password) next.password = 'Password is required'
    else if (formData.password.length < 6) next.password = 'At least 6 characters required'
    if (formData.confirmPassword !== formData.password) next.confirmPassword = 'Passwords do not match'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setIsSubmitting(true)
    console.log('Register data:', formData)
    // TODO: connect to backend register API
    setTimeout(() => setIsSubmitting(false), 1200)
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex bg-slate-50">

      {/* Left Panel - Branding (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />

        <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 mb-6">
            <Cpu size={28} />
          </span>
          <h2 className="text-3xl font-extrabold leading-tight">
            Join <span className="text-amber-400">CyberCafe</span> today
          </h2>
          <p className="mt-4 text-blue-100 leading-relaxed max-w-md">
            Create your free account and never miss a Sarkari job, scheme,
            result, or admit card update again.
          </p>

          <div className="mt-10 space-y-4">
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.text} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-400/20 text-amber-400 shrink-0">
                    <Icon size={17} />
                  </span>
                  <p className="text-sm text-blue-50">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 py-12">
        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <div className="flex lg:hidden flex-col items-center mb-8">
            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-lg shadow-blue-900/20 mb-4">
              <Cpu size={26} />
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Create Account</h1>
            <p className="text-sm text-slate-500 mt-1.5">
              Join CyberCafe and stay updated, always
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-300 focus:ring-red-400 focus:border-red-400'
                      : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
              </div>
              {errors.name && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-300 focus:ring-red-400 focus:border-red-400'
                      : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
              </div>
              {errors.email && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-11 pr-11 py-3 rounded-xl border text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.password
                      ? 'border-red-300 focus:ring-red-400 focus:border-red-400'
                      : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Password strength meter */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex gap-1.5">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                          i < strength.score ? strength.color : 'bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Password strength: <span className="font-semibold">{strength.label}</span>
                  </p>
                </div>
              )}

              {errors.password && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-700 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-11 pr-11 py-3 rounded-xl border text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.confirmPassword
                      ? 'border-red-300 focus:ring-red-400 focus:border-red-400'
                      : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
                {formData.confirmPassword && formData.confirmPassword === formData.password && (
                  <Check size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-green-500" />
                )}
              </div>
              {errors.confirmPassword && (
                <p className="mt-1.5 text-xs font-medium text-red-600">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-blue-900 shadow-md shadow-blue-900/20 hover:shadow-lg hover:shadow-blue-900/30 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-7">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs font-medium text-slate-400">OR</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Login redirect */}
          <p className="text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-blue-700 hover:text-blue-800">
              Login here
            </Link>
          </p>

          {/* Back to home */}
          <p className="text-center mt-6">
            <Link to="/" className="text-sm text-slate-400 hover:text-blue-700 transition-colors">
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
