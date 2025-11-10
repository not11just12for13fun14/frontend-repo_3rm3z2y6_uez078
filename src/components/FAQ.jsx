function FAQ() {
  const faqs = [
    {
      q: 'Can you create third-party accounts or API keys for me?',
      a: 'No. You must create accounts and paste keys into the provided .env files yourself. The project will run automatically after that.',
    },
    {
      q: 'Is there an admin area?',
      a: 'Yes. A protected admin area with drag-and-drop uploads is included. You will secure it with JWT after configuring the backend.',
    },
    {
      q: 'How are downloads secured?',
      a: 'The backend generates links that expire after a set time, validated on each request before streaming the file.',
    },
  ]

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">FAQ</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((item) => (
            <div key={item.q} className="p-5 rounded-lg border border-gray-200">
              <h3 className="font-medium text-gray-900">{item.q}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
