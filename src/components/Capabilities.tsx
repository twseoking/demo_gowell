export default function Capabilities() {
  const capabilities = [
    {
      title: 'Multi-Material Manufacturing',
      keyword: 'Multi-Material Pet Product Manufacturing',
      description:
        'We excel in integrating multiple materials including plastic, metal, textile, and silicone into single product designs.',
      materials: [
        {
          name: 'Plastic & Injection Molding',
          details: 'PP, PE, ABS, PC - food-grade and durable options',
        },
        {
          name: 'Metal Fabrication',
          details: 'Stainless steel, aluminum - rust-resistant finishes',
        },
        {
          name: 'Textile Manufacturing',
          keyword: 'Textile Pet Accessories OEM',
          details: 'Mesh, nylon, polyester - breathable and washable',
        },
        {
          name: 'Silicone Processing',
          keyword: 'Silicone Pet Product Manufacturer',
          details: 'FDA-grade silicone - safe, flexible, and non-toxic',
        },
      ],
    },
    {
      title: 'Sustainable & Eco-Friendly Solutions',
      keyword: 'Sustainable Pet Product Manufacturer, Eco-Friendly Pet Supplies OEM',
      description:
        'We are committed to environmental responsibility with sustainable material options and eco-friendly manufacturing processes.',
      features: [
        'Recycled plastic and ocean-bound materials',
        'Organic cotton and bamboo textiles',
        'Biodegradable and compostable options',
        'Low-carbon footprint manufacturing',
        'Sustainable packaging solutions',
        'Zero-waste production initiatives',
      ],
    },
    {
      title: 'Advanced Manufacturing Processes',
      keyword: 'High-Quality Pet Product Manufacturing',
      description:
        'State-of-the-art facilities across Taiwan, Vietnam, and China ensure consistent quality and efficient production.',
      processes: [
        'Injection Molding & Die Casting',
        'CNC Machining & Metal Stamping',
        'Sewing & Textile Assembly',
        'Silicone Molding & Compression',
        'Powder Coating & Surface Treatment',
        'Ultrasonic Welding & Heat Sealing',
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Manufacturing Capabilities & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our comprehensive <strong>multi-material pet product manufacturing</strong> capabilities
            and commitment to <strong>sustainable pet product manufacturing</strong> set us apart
          </p>
        </div>

        {/* Capabilities Sections */}
        <div className="space-y-12">
          {/* Multi-Material Manufacturing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">
              {capabilities[0].title}
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              {capabilities[0].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities[0].materials.map((material, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2 text-white">
                    {material.name}
                  </h4>
                  <p className="text-gray-300 text-sm mb-3">{material.details}</p>
                  {material.keyword && (
                    <p className="text-xs text-blue-400 italic">{material.keyword}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sustainable Solutions */}
          <div className="bg-green-900/30 backdrop-blur-sm rounded-xl p-8 md:p-12 border-2 border-green-500/30">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">🌱</span>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-green-300">
                  {capabilities[1].title}
                </h3>
                <p className="text-sm text-green-400 font-semibold">
                  {capabilities[1].keyword}
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-300 mb-8">
              {capabilities[1].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities[1].features.map((feature, index) => (
                <div key={index} className="flex items-start bg-green-800/20 rounded-lg p-4">
                  <svg
                    className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Manufacturing Processes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">
              {capabilities[2].title}
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              {capabilities[2].description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {capabilities[2].processes.map((process, index) => (
                <div
                  key={index}
                  className="bg-blue-900/30 rounded-lg p-4 text-center border border-blue-500/30"
                >
                  <p className="text-white font-semibold">{process}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Supply Chain */}
        <div className="mt-12 bg-blue-900/40 backdrop-blur-sm rounded-xl p-8 md:p-12 border-2 border-blue-500/30">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Global <span className="text-blue-300">Pet Product Supply Chain Management</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">🇹🇼</div>
              <h4 className="text-xl font-bold mb-2">Taiwan</h4>
              <p className="text-gray-300">
                R&D, Design Innovation & Quality Control Headquarters
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">🇻🇳</div>
              <h4 className="text-xl font-bold mb-2">Vietnam</h4>
              <p className="text-gray-300">
                Textile Manufacturing & Assembly Operations
              </p>
            </div>
            <div>
              <div className="text-5xl mb-4">🇨🇳</div>
              <h4 className="text-xl font-bold mb-2">China</h4>
              <p className="text-gray-300">
                Large-Scale Production & Materials Sourcing
              </p>
            </div>
          </div>

          <p className="text-center text-gray-300 mt-8 text-lg">
            Strategic manufacturing locations for optimal <strong>pet product sourcing Asia</strong> solutions
          </p>
        </div>
      </div>
    </section>
  )
}
