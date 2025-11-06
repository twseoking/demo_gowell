export default function Certifications() {
  const certifications = [
    {
      name: 'CA65 Compliant',
      fullName: 'California Proposition 65',
      keyword: 'CA65 Compliant Pet Product Manufacturer',
      description:
        'All our pet products meet California Prop 65 requirements, ensuring they are free from harmful chemicals and safe for pets and their owners.',
      icon: '🔒',
      benefits: [
        'No harmful chemicals or toxins',
        'Safe for pets and humans',
        'Compliant with California regulations',
        'Third-party tested and verified',
      ],
    },
    {
      name: 'RoHS Certified',
      fullName: 'Restriction of Hazardous Substances',
      keyword: 'RoHS Certified Pet Supplies OEM',
      description:
        'Our manufacturing processes comply with RoHS directives, restricting the use of hazardous materials in electrical and electronic components.',
      icon: '⚡',
      benefits: [
        'Lead-free and mercury-free',
        'Environmentally responsible',
        'EU market compliant',
        'Reduced environmental impact',
      ],
    },
    {
      name: 'REACH Compliant',
      fullName: 'Registration, Evaluation, Authorisation and Restriction of Chemicals',
      keyword: 'REACH Compliant Pet Products',
      description:
        'We adhere to REACH regulations, ensuring all chemicals used in our pet products are safe, properly registered, and pose no risk to health or environment.',
      icon: '🧪',
      benefits: [
        'Chemical safety assurance',
        'European Union compliant',
        'Transparent supply chain',
        'Risk-free for pets and environment',
      ],
    },
    {
      name: 'ISO Quality Standards',
      fullName: 'International Organization for Standardization',
      keyword: 'High-Quality Pet Product Manufacturing',
      description:
        'Our facilities maintain ISO quality management standards, ensuring consistent product quality and continuous improvement in all processes.',
      icon: '⭐',
      benefits: [
        'Consistent product quality',
        'Systematic quality control',
        'Continuous improvement',
        'International recognition',
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            International Certifications & Quality Standards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a <strong>CA65 compliant pet product manufacturer</strong> and{' '}
            <strong>RoHS certified pet supplies OEM</strong>, we maintain the highest quality
            and safety standards
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-8 hover:border-blue-500 hover:shadow-xl transition-all"
            >
              <div className="flex items-start mb-6">
                <div className="text-5xl mr-4">{cert.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{cert.fullName}</p>
                  <p className="text-xs text-blue-600 font-semibold italic">
                    {cert.keyword}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {cert.description}
              </p>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                <ul className="space-y-3">
                  {cert.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Control Process */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Comprehensive <span className="text-blue-300">Pet Product Quality Control</span> Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold mb-2">Material Inspection</h4>
              <p className="text-gray-300 text-sm">
                All raw materials tested upon arrival
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold mb-2">In-Process Monitoring</h4>
              <p className="text-gray-300 text-sm">
                Quality checks at every production stage
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold mb-2">Final Inspection</h4>
              <p className="text-gray-300 text-sm">
                100% inspection before packaging
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="font-bold mb-2">Third-Party Testing</h4>
              <p className="text-gray-300 text-sm">
                Independent lab verification
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-300 mb-6">
              Our rigorous quality control ensures every product meets international standards
              and exceeds customer expectations
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Quality Documentation
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Trusted by leading brands worldwide for <strong>high-quality pet product manufacturing</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="text-4xl">🏆</div>
            <div className="text-4xl">✓</div>
            <div className="text-4xl">⭐</div>
            <div className="text-4xl">🌟</div>
            <div className="text-4xl">🎖️</div>
          </div>
        </div>
      </div>
    </section>
  )
}
