import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const offices = [
  {
    city: "London",
    country: "United Kingdom",
    address: "1 Canada Square, Canary Wharf, London E14 5AB",
    flag: "🇬🇧",
  },
  {
    city: "Dubai",
    country: "UAE",
    address: "DIFC, Gate Avenue, South Zone, Dubai",
    flag: "🇦🇪",
  },
  {
    city: "Bangalore",
    country: "India",
    address: "Prestige Tech Park, Outer Ring Road, Bangalore 560103",
    flag: "🇮🇳",
  },
];

const reasons = [
  "Business Transformation Advisory",
  "Digital Fusion Services",
  "Global Value Engine / GCC Setup",
  "Transformation Capital / M&A",
  "Industry Authority",
  "Partnership & Alliances",
  "General Enquiry",
];

export function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <div className="bg-[#08090f] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative bg-[#0d1023] border-b border-white/5 py-20 px-6 overflow-hidden">
        {/* decorative radial glow */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 right-0 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <p className="text-teal-400 text-xs tracking-widest uppercase mb-3 font-semibold">
            Get In Touch
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
            Let's Start a<br />Conversation
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
            Whether you're exploring a transformation initiative, seeking strategic capital, or simply want to learn how Quantum Tech Hub can accelerate your goals — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Main grid: Form + Info ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Contact Form (3 cols) ── */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-5">
                <CheckCircle className="w-14 h-14 text-teal-400" />
                <h2 className="text-white text-2xl font-bold">Message Received!</h2>
                <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. A member of the Quantum Tech Hub team will be in touch with you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", company: "", reason: "", message: "" }); }}
                  className="mt-4 border border-teal-500 text-teal-400 hover:bg-teal-500/10 text-xs px-6 py-2.5 rounded-full transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-white font-bold text-xl mb-6">Send Us a Message</h2>

                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-xs mb-1.5 block">First Name <span className="text-teal-400">*</span></label>
                    <input
                      required
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full bg-[#0d0e18] border border-white/10 focus:border-teal-500 text-white text-sm rounded-lg px-4 py-2.5 outline-none transition-colors duration-200 placeholder:text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs mb-1.5 block">Last Name <span className="text-teal-400">*</span></label>
                    <input
                      required
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className="w-full bg-[#0d0e18] border border-white/10 focus:border-teal-500 text-white text-sm rounded-lg px-4 py-2.5 outline-none transition-colors duration-200 placeholder:text-gray-600"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-400 text-xs mb-1.5 block">Work Email <span className="text-teal-400">*</span></label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-[#0d0e18] border border-white/10 focus:border-teal-500 text-white text-sm rounded-lg px-4 py-2.5 outline-none transition-colors duration-200 placeholder:text-gray-600"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="text-gray-400 text-xs mb-1.5 block">Company / Organisation</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full bg-[#0d0e18] border border-white/10 focus:border-teal-500 text-white text-sm rounded-lg px-4 py-2.5 outline-none transition-colors duration-200 placeholder:text-gray-600"
                  />
                </div>

                {/* Reason */}
                <div>
                  <label className="text-gray-400 text-xs mb-1.5 block">How Can We Help? <span className="text-teal-400">*</span></label>
                  <select
                    required
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    className="w-full bg-[#0d0e18] border border-white/10 focus:border-teal-500 text-sm rounded-lg px-4 py-2.5 outline-none transition-colors duration-200 appearance-none cursor-pointer"
                    style={{ color: form.reason ? "white" : "#4b5563" }}
                  >
                    <option value="" disabled>Select a topic…</option>
                    {reasons.map((r) => (
                      <option key={r} value={r} className="text-white bg-[#0d0e18]">{r}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-gray-400 text-xs mb-1.5 block">Your Message <span className="text-teal-400">*</span></label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your goals, challenges, or what you'd like to explore…"
                    className="w-full bg-[#0d0e18] border border-white/10 focus:border-teal-500 text-white text-sm rounded-lg px-4 py-2.5 outline-none transition-colors duration-200 placeholder:text-gray-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 disabled:opacity-60 text-white text-sm px-7 py-3 rounded-full transition-colors duration-300 font-semibold"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── Contact Info (2 cols) ── */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-white font-bold text-xl mb-6">Contact Details</h2>
              <div className="space-y-5">
                <a
                  href="mailto:hello@quantumtechhub.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl w-10 h-10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors duration-200">
                    <Mail className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Email</p>
                    <p className="text-white text-sm group-hover:text-teal-400 transition-colors duration-200">hello@quantumtechhub.com</p>
                  </div>
                </a>

                <a
                  href="tel:+442012345678"
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl w-10 h-10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-0.5">Phone</p>
                    <p className="text-white text-sm group-hover:text-teal-400 transition-colors duration-200">+44 20 1234 5678</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Offices */}
            <div>
              <h3 className="text-gray-400 text-xs tracking-widest uppercase font-semibold mb-4">Our Offices</h3>
              <div className="space-y-4">
                {offices.map((o) => (
                  <div key={o.city} className="flex items-start gap-4">
                    <div className="bg-[#0d0e18] border border-white/5 rounded-xl w-10 h-10 flex items-center justify-center shrink-0 text-lg">
                      {o.flag}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {o.city} <span className="text-gray-500 font-normal">· {o.country}</span>
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{o.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time note */}
            <div className="bg-[#0d0e18] border border-white/5 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <p className="text-teal-400 text-xs font-semibold">Typical Response Time</p>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Our team responds to all enquiries within <span className="text-white font-semibold">1–2 business days</span>. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom divider CTA ── */}
      <section className="border-t border-white/5 py-14 px-6 text-center">
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">Ready to transform?</p>
        <h2 className="text-white font-bold text-2xl md:text-3xl mb-4">Your Quantum Leap Starts Here.</h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
          From strategy to execution, Quantum Tech Hub partners with you at every stage of your transformation journey.
        </p>
      </section>
    </div>
  );
}
