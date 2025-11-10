import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ height: '70vh' }}>
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8IaNy5oLXkFNWici/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Ship a production-ready stack in minutes
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            React + Express + MongoDB starter with JWT auth, OTP, Razorpay, Cloudinary, Brevo, admin uploads, and signed downloads.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#features" className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black">Explore Features</a>
            <a href="#admin" className="px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400">Admin Upload</a>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Note: 3D scene is interactive. Rotate/zoom to play with it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
