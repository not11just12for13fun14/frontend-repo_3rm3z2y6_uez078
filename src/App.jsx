import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import AdminPanel from './components/AdminPanel'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <Hero />
      <Features />
      <AdminPanel />
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        Built with React + Tailwind. Backend endpoints must be configured separately in this full-stack starter.
      </footer>
    </div>
  )
}

export default App
