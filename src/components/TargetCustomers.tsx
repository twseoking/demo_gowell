export default function TargetCustomers() {
  const customerSegments = [
    {
      title: 'Startups & Designers',
      icon: '💡',
      keyword: 'Pet Product Manufacturing for Startups, Low MOQ Pet Product Manufacturer',
      description:
        'Launch your pet product brand with our low minimum order quantity (MOQ) options. Perfect for entrepreneurs and designers testing new markets.',
      features: [
        'Low MOQ starting from 500 units',
        'Flexible payment terms',
        'Free design consultation',
        'Rapid prototyping services',
        'Sample development support',
      ],
      cta: 'Start Your Brand',
    },
    {
      title: 'Established Brands',
      icon: '🏢',
      keyword: 'Private Label Pet Products, Turnkey Pet Product Solutions',
      description:
        'Expand your product line with our comprehensive OEM/ODM services. We handle everything from design to delivery.',
      features: [
        'Complete turnkey solutions',
        'Dedicated account management',
        'Custom branding and packaging',
        'Consistent quality at scale',
        'Supply chain optimization',
      ],
      cta: 'Expand Your Line',
    },
    {
      title: 'Retailers & E-commerce',
      icon: '🛒',
      keyword: 'Wholesale Pet Products Manufacturer, Bulk Order Pet Supplies Manufacturer',
      description:
        'Stock your shelves or online store with high-quality pet products. Competitive pricing for bulk orders.',
      features: [
        'Wholesale pricing for bulk orders',
        'White label options available',
        'Drop shipping capabilities',
        'Seasonal product planning',
        'Marketing materials support',
      ],
      cta: 'Get Wholesale Pricing',
    },
    {
      title: 'International Distributors',
      icon: '🌐',
      keyword: 'Pet Product Sourcing Asia, Pet Product Supply Chain Management',
      description:
        'Reliable sourcing partner for international markets. Efficient logistics and quality assurance across borders.',
      features: [
        'Multi-region manufacturing',
        'Export documentation support',
        'Container optimization',
        'Quality pre-shipment inspection',
        'Long-term partnership programs',
      ],
      cta: 'Explore Partnership',
    },
  ]

  const industries = [
    {
      name: 'Pet Specialty Stores',
      description: 'Unique products for boutique retailers',
    },
    {
      name: 'Veterinary Clinics',
      description: 'Professional-grade pet care products',
    },
    {
      name: 'Pet Subscription Boxes',
      description: 'Exclusive items for monthly boxes',
    },
    {
      name: 'Pet Grooming Salons',
      description: 'Grooming tools and accessories',
    },
    {
      name: 'Animal Shelters',
      description: 'Bulk supplies for rescue organizations',
    },
    {
      name: 'Online Marketplaces',
      description: 'Private label for e-commerce',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From <strong>pet product manufacturing for startups</strong> to{' '}
            <strong>wholesale pet products manufacturing</strong> for established brands,
            we partner with businesses of all sizes
          </p>
        </div>

        {/* Customer Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {customerSegments.map((segment, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-500"
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4">{segment.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {segment.title}
                  </h3>
                  <p className="text-xs text-blue-600 font-semibold mt-1">
                    {segment.keyword}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {segment.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What We Offer:</h4>
                <ul className="space-y-2">
                  {segment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
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

              <a
                href="#contact"
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {segment.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Industries We Partner With
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
              >
                <h4 className="text-lg font-bold mb-2">{industry.name}</h4>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-300 mb-6">
              Don't see your industry? We work with diverse businesses in the pet product ecosystem.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Discuss Your Needs
            </a>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="mt-16 bg-blue-600 text-white rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">💼</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Your Success Is Our Success
            </h3>
            <p className="text-lg text-blue-100 mb-8">
              We've helped hundreds of brands launch successful pet product lines through our
              comprehensive <strong>turnkey pet product solutions</strong>. From initial concept
              to final delivery, we're with you every step of the way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Products Launched</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-blue-100">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
