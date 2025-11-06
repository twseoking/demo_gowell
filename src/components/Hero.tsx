export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main H1 - Core SEO Keywords */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Pet Supplies Contract Manufacturer
            <span className="block text-blue-300 mt-2">OEM/ODM Solutions</span>
          </h1>

          {/* Subtitle with Additional Keywords */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Leading <strong>Private Label Pet Products</strong> Manufacturer |
            Custom Pet Accessories & Manufacturing Solutions
          </p>

          {/* Description with Long-tail Keywords */}
          <p className="text-lg md:text-xl mb-10 text-blue-50 max-w-3xl mx-auto">
            We specialize in <strong>custom pet product manufacturing</strong> with
            comprehensive OEM and ODM services. From <strong>custom dog harness manufacturing</strong> to
            <strong> elevated pet bed production</strong>, we deliver turnkey pet product solutions
            for brands, retailers, and e-commerce platforms worldwide.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Low MOQ Available</h3>
              <p className="text-blue-100">
                Low minimum order quantity for startups and designers
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
              <p className="text-blue-100">
                CA65, RoHS & REACH compliant manufacturing
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Sustainable Materials</h3>
              <p className="text-blue-100">
                Eco-friendly pet supplies with multi-material capabilities
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Request a Quote
            </a>
            <a
              href="#products"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors border-2 border-white/30"
            >
              View Our Products
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
