import { Rocket, Shield, Cloud, Database } from 'lucide-react'

function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-600 text-white grid place-items-center">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-gray-900 tracking-tight">Full-Stack Starter</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a className="hover:text-gray-900 transition-colors" href="#features">Features</a>
          <a className="hover:text-gray-900 transition-colors" href="#admin">Admin</a>
          <a className="hover:text-gray-900 transition-colors" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:flex items-center gap-1 text-xs text-gray-500 mr-2">
            <Shield size={14} /> Secure by design
          </span>
          <button className="px-3 py-1.5 rounded-md bg-gray-900 text-white text-sm hover:bg-black">
            Get Started
          </button>
        </div>
      </div>
      <div className="hidden md:block border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-600">
          <div className="inline-flex items-center gap-2"><Database size={16} /> MongoDB + Mongoose</div>
          <div className="inline-flex items-center gap-2"><Cloud size={16} /> Cloudinary Uploads</div>
          <div className="inline-flex items-center gap-2"><Shield size={16} /> JWT + OTP</div>
          <div className="inline-flex items-center gap-2"><Rocket size={16} /> Razorpay + Webhooks</div>
        </div>
      </div>
    </header>
  )
}

export default Header
