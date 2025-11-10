import { Lock, CreditCard, Mail, Cloud, Download, Webhook } from 'lucide-react'

function Features() {
  const items = [
    { icon: Lock, title: 'Auth + OTP', desc: 'JWT login with bcrypt-hashed passwords and 6-digit email OTP flow.' },
    { icon: CreditCard, title: 'Razorpay', desc: 'Server-side order creation, verification, and webhook signature checks.' },
    { icon: Mail, title: 'Brevo Emails', desc: 'Transactional emails for OTPs and receipts using Brevo API.' },
    { icon: Cloud, title: 'Cloudinary', desc: 'Drag-and-drop admin upload of audio/video/zip files via backend.' },
    { icon: Download, title: 'Timed Links', desc: 'Expiring download links powered by signed-like tokens.' },
    { icon: Webhook, title: 'Webhooks', desc: 'Ready endpoint with request signature verification.' },
  ]

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Everything you need built-in</h2>
        <p className="text-gray-600 mt-2">Production-ready integrations with sensible defaults.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-5 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="h-9 w-9 rounded-md bg-gray-900 text-white grid place-items-center mb-3">
                <Icon size={18} />
              </div>
              <h3 className="font-medium text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
