import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon - Sat, 9 AM - 7 PM",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "support@cybercafe.in",
    sub: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Khanagaon, Gokak Taluk",
    sub: "Belagavi District, Karnataka",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "9:00 AM - 7:00 PM",
    sub: "Monday to Saturday",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className='bg-slate-50'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 px-4 py-20 sm:py-24'>
        <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]' />
        <div className='relative max-w-4xl mx-auto text-center'>
          <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-5'>
            <MessageCircle size={14} />
            We're Here To Help
          </span>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
            Get In <span className='text-amber-400'>Touch</span>
          </h1>
          <p className='mt-5 text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto'>
            Questions about a job notification, scheme, result, or admit card?
            Our team is ready to assist you — reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className='px-4 -mt-8 relative z-10'>
        <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {CONTACT_INFO.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className='bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-100 p-5 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300'
              >
                <div className='flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white mx-auto mb-3 shadow-md'>
                  <Icon size={20} />
                </div>
                <p className='text-xs font-bold text-blue-700 uppercase tracking-wide'>
                  {item.label}
                </p>
                <p className='text-sm font-bold text-slate-900 mt-1.5'>
                  {item.value}
                </p>
                <p className='text-xs text-slate-500 mt-0.5'>{item.sub}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + Side Panel */}
      <section className='px-4 py-16 sm:py-20'>
        <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8'>
          {/* Contact Form */}
          <div className='lg:col-span-3 bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-100 p-6 sm:p-8'>
            <h2 className='text-xl sm:text-2xl font-bold text-slate-900'>
              Send Us a Message
            </h2>
            <p className='text-sm text-slate-500 mt-1.5 mb-6'>
              Fill the form below and our team will get back to you shortly.
            </p>

            {submitted && (
              <div className='mb-5 flex items-center gap-2 px-4 py-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium'>
                <ShieldCheck size={18} />
                Your message has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-5'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-slate-700 mb-1.5'
                  >
                    Full Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your full name'
                    className='w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-slate-700 mb-1.5'
                  >
                    Email Address
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='you@example.com'
                    className='w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-slate-700 mb-1.5'
                >
                  Subject
                </label>
                <input
                  id='subject'
                  name='subject'
                  type='text'
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='e.g. Query about SSC CGL Notification'
                  className='w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-slate-700 mb-1.5'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Write your message here...'
                  className='w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none'
                />
              </div>

              <button
                type='submit'
                className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-blue-900 shadow-md shadow-blue-900/20 hover:shadow-lg hover:shadow-blue-900/30 active:scale-[0.98] transition-all duration-200'
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>

          {/* Side Panel */}
          <div className='lg:col-span-2 flex flex-col gap-6'>
            {/* Map placeholder card */}
            <div className='rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-48 bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center relative'>
              <div className='absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#1e40af_1px,transparent_0)] bg-[size:18px_18px]' />
              <div className='relative text-center px-4'>
                <MapPin size={28} className='text-blue-700 mx-auto mb-2' />
                <p className='text-sm font-semibold text-slate-700'>
                  Khanagaon, Gokak Taluk
                </p>
                <p className='text-xs text-slate-500'>
                  Belagavi District, Karnataka
                </p>
              </div>
            </div>

            {/* Trust card */}
            <div className='bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-6 text-white relative overflow-hidden flex-1'>
              <div className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:18px_18px]' />
              <div className='relative'>
                <ShieldCheck size={24} className='text-amber-400 mb-3' />
                <h3 className='font-bold text-lg'>
                  Quick &amp; Reliable Support
                </h3>
                <p className='text-sm text-blue-100 mt-2 leading-relaxed'>
                  Whether it's a doubt about eligibility, a missing admit card
                  link, or a scheme application — our team responds fast and
                  keeps it simple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
