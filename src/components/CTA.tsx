import Link from 'next/link'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Pet Product Manufacturing Project?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Partner with a trusted <strong>pet supplies contract manufacturer</strong> for your
              OEM, ODM, and private label needs
            </p>
            <p className="text-lg text-blue-200 mb-10">
              Whether you need <strong>custom dog harness manufacturing</strong>,{' '}
              <strong>private label pet furniture</strong>, or any other pet product,
              we're here to bring your vision to life.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Quick Quote */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-white/30">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-4">Request a Quote</h3>
              <p className="text-blue-100 mb-6">
                Get a detailed quote for your pet product manufacturing project. Fast response
                within 24 hours.
              </p>
              <ul className="space-y-2 mb-6 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Free project consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Detailed pricing breakdown</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Production timeline estimate</span>
                </li>
              </ul>
              <a
                href="mailto:sales@crazypaws-global.com"
                className="block w-full text-center bg-white text-blue-900 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get a Quote
              </a>
            </div>

            {/* Product Catalog */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-white/30">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-2xl font-bold mb-4">Download Catalog</h3>
              <p className="text-blue-100 mb-6">
                Browse our complete range of pet products available for OEM/ODM and private label.
              </p>
              <ul className="space-y-2 mb-6 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Full product specifications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Customization options</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Material and color choices</span>
                </li>
              </ul>
              <a
                href="mailto:catalog@crazypaws-global.com"
                className="block w-full text-center bg-white text-blue-900 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Request Catalog
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-3">📧</div>
                <h4 className="font-semibold mb-2">Email</h4>
                <a
                  href="mailto:info@crazypaws-global.com"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  info@crazypaws-global.com
                </a>
              </div>

              <div>
                <div className="text-3xl mb-3">💬</div>
                <h4 className="font-semibold mb-2">WhatsApp</h4>
                <a
                  href="https://wa.me/"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Chat with Us
                </a>
              </div>

              <div>
                <div className="text-3xl mb-3">📍</div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-blue-200">
                  Taiwan • Vietnam • China
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-blue-200 mb-6">
              Join leading brands who trust us for their pet product manufacturing
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-blue-300">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                CA65 Compliant
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                RoHS Certified
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                REACH Compliant
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                ISO Standards
              </div>
            </div>
          </div>

          {/* Blog Links */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-center">📚 Learn More About Pet Product Manufacturing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/blog/sustainable-materials"
                className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all"
              >
                <div className="text-2xl mb-2">🌱</div>
                <h4 className="font-semibold mb-1">Sustainable Materials</h4>
                <p className="text-sm text-blue-200">Eco-friendly pet product options</p>
              </Link>
              <Link
                href="/blog/certifications-guide"
                className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all"
              >
                <div className="text-2xl mb-2">🔒</div>
                <h4 className="font-semibold mb-1">Certifications Guide</h4>
                <p className="text-sm text-blue-200">CA65, RoHS, REACH explained</p>
              </Link>
              <Link
                href="/blog/working-with-startups"
                className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all"
              >
                <div className="text-2xl mb-2">💡</div>
                <h4 className="font-semibold mb-1">Startup Guide</h4>
                <p className="text-sm text-blue-200">Launch your pet product brand</p>
              </Link>
            </div>
            <div className="text-center mt-6">
              <Link
                href="/blog"
                className="text-blue-200 hover:text-white font-semibold inline-flex items-center"
              >
                View All Articles
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Footer Keywords */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-sm text-blue-300 leading-relaxed">
              <strong>Crazypaws Global</strong> - Your trusted partner for pet supplies contract
              manufacturing, pet products OEM/ODM, custom dog harness manufacturing, private label
              pet furniture, sustainable pet product manufacturing, and eco-friendly pet supplies.
              Serving startups, established brands, retailers, and international distributors with
              low MOQ options and turnkey pet product solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
