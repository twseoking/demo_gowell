export default function Services() {
  const services = [
    {
      title: 'OEM Manufacturing',
      subtitle: 'Original Equipment Manufacturer',
      description:
        'We manufacture pet products according to your specifications and designs. Our OEM pet product services ensure your brand vision comes to life with precision and quality.',
      keywords: ['Pet Products OEM', 'OEM Dog Leash and Collar', 'OEM Pet Bowl and Feeder'],
      features: [
        'Your design, our manufacturing expertise',
        'Consistent quality control',
        'Scalable production capacity',
        'Bulk order pet supplies manufacturing',
      ],
    },
    {
      title: 'ODM Solutions',
      subtitle: 'Original Design Manufacturer',
      description:
        'Choose from our extensive catalog of pet product designs or collaborate with our design team to create unique products. Perfect for brands seeking custom pet product manufacturing solutions.',
      keywords: ['Pet Products ODM', 'Custom Pet Product Manufacturing'],
      features: [
        'Ready-to-customize design library',
        'In-house design team',
        'Rapid prototyping',
        'Multi-material pet product manufacturing',
      ],
    },
    {
      title: 'Private Label Services',
      subtitle: 'Build Your Brand',
      description:
        'Launch your own pet product line with our comprehensive private label solutions. We handle everything from product development to packaging, enabling you to focus on your brand.',
      keywords: [
        'Private Label Pet Products',
        'Private Label Pet Furniture',
        'Private Label Pet Toys',
      ],
      features: [
        'Complete turnkey pet product solutions',
        'Custom packaging and branding',
        'Low MOQ pet product manufacturer options',
        'Fast market entry',
      ],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header with H2 Keywords */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive OEM/ODM Pet Products Manufacturing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a trusted <strong>pet accessories manufacturer</strong>, we offer flexible
            manufacturing solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                  {service.subtitle}
                </p>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  {service.keywords.join(' • ')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Service Highlights */}
        <div className="mt-16 bg-blue-900 text-white rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose Crazypaws as Your Pet Product Manufacturing Partner?
              </h3>
              <p className="text-blue-100 text-lg">
                With decades of experience in <strong>pet product supply chain management</strong>,
                we serve brands, retailers, and e-commerce platforms across the globe.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">20+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">1000+</div>
                <div className="text-blue-100">Products Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">50+</div>
                <div className="text-blue-100">Global Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">3</div>
                <div className="text-blue-100">Manufacturing Sites</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
