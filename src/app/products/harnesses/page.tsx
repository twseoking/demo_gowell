import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Dog Harness Manufacturer - OEM/ODM Dog Leash and Collar | Crazypaws',
  description: 'Leading custom dog harness manufacturer specializing in OEM and ODM production. Mesh harnesses, sport harnesses, fashion collars, and retractable leashes. CA65 & RoHS certified. Low MOQ available.',
  keywords: [
    'Custom Dog Harness Manufacturer',
    'OEM Dog Leash and Collar',
    'Dog Harness OEM',
    'Private Label Dog Harness',
    'Custom Pet Harness Manufacturing',
    'Wholesale Dog Harness Manufacturer',
    'Mesh Dog Harness Manufacturer',
    'Sport Dog Harness OEM',
    'Fashion Dog Collar Manufacturer',
    'Retractable Dog Leash OEM',
  ],
  openGraph: {
    title: 'Custom Dog Harness Manufacturer - OEM/ODM Solutions',
    description: 'Professional dog harness, leash, and collar manufacturing services. Custom designs, multiple materials, certified quality.',
    type: 'website',
  },
}

export default function HarnessesPage() {
  const productCategories = [
    {
      name: 'Mesh Harnesses',
      description: 'Breathable mesh harnesses perfect for hot weather and active dogs',
      features: [
        'Lightweight and breathable',
        'Quick-dry mesh material',
        'Adjustable straps for perfect fit',
        'Available in multiple colors',
        'Reflective options for night safety',
      ],
      materials: 'Polyester mesh, nylon webbing, plastic buckles',
      moq: '500 units per color',
      image: '🏃',
    },
    {
      name: 'Sport Harnesses',
      description: 'Heavy-duty harnesses designed for active dogs and outdoor adventures',
      features: [
        'Reinforced stitching for durability',
        'Padded chest and back panels',
        'Multiple D-ring attachment points',
        'Handle for better control',
        'Weather-resistant materials',
      ],
      materials: 'Heavy-duty nylon, neoprene padding, metal D-rings',
      moq: '500 units per design',
      image: '💪',
    },
    {
      name: 'Fashion Harnesses',
      description: 'Stylish harnesses combining function with trendy designs',
      features: [
        'Designer patterns and prints',
        'Soft comfortable materials',
        'Matching leash available',
        'Decorative elements (bow, rhinestones)',
        'Premium finishing',
      ],
      materials: 'Cotton, polyester, faux leather, decorative trims',
      moq: '300 units per design',
      image: '✨',
    },
    {
      name: 'Training Harnesses',
      description: 'No-pull harnesses designed for training and behavior management',
      features: [
        'Front-clip design to discourage pulling',
        'Even pressure distribution',
        'Easy on/off design',
        'Durable construction',
        'Size adjustability',
      ],
      materials: 'Nylon webbing, reflective strips, metal hardware',
      moq: '500 units per size',
      image: '🎓',
    },
    {
      name: 'Dog Leashes',
      description: 'Various leash styles from standard to retractable designs',
      features: [
        'Multiple lengths available (4ft, 6ft, 8ft)',
        'Comfortable padded handles',
        'Retractable mechanism options',
        'Reflective safety features',
        'Strong clasp and hardware',
      ],
      materials: 'Nylon, leather, rubber grip, metal clasps',
      moq: '1000 units per type',
      image: '🔗',
    },
    {
      name: 'Dog Collars',
      description: 'Custom collars in various styles and materials',
      features: [
        'Adjustable sizing',
        'Multiple buckle types',
        'ID tag attachment point',
        'Comfortable inner lining',
        'Custom printing/embroidery available',
      ],
      materials: 'Nylon, polyester, PU leather, metal/plastic buckles',
      moq: '1000 units per design',
      image: '⭐',
    },
  ]

  const customizationOptions = [
    {
      category: 'Materials',
      options: [
        'Nylon webbing (various widths)',
        'Polyester mesh',
        'Cotton canvas',
        'PU leather/genuine leather',
        'Neoprene padding',
        'Reflective materials',
      ],
    },
    {
      category: 'Hardware',
      options: [
        'Metal D-rings (zinc alloy, stainless steel)',
        'Plastic quick-release buckles',
        'Metal buckles and clasps',
        'Adjustable sliders',
        'Swivel hooks',
      ],
    },
    {
      category: 'Colors & Patterns',
      options: [
        'Solid colors (Pantone matching)',
        'Camo patterns',
        'Floral and geometric prints',
        'Custom printed designs',
        'Two-tone combinations',
      ],
    },
    {
      category: 'Branding',
      options: [
        'Woven labels',
        'Embroidered logos',
        'Screen printing',
        'Heat transfer printing',
        'Metal logo plates',
        'Custom packaging',
      ],
    },
  ]

  const manufacturingCapabilities = [
    {
      title: 'Advanced Sewing Technology',
      description: 'State-of-the-art industrial sewing machines for consistent quality',
      icon: '🧵',
    },
    {
      title: 'Webbing Manufacturing',
      description: 'In-house webbing production for better quality control',
      icon: '🏭',
    },
    {
      title: 'Quality Testing',
      description: 'Pull-strength testing, durability testing, and safety checks',
      icon: '🔬',
    },
    {
      title: 'Rapid Prototyping',
      description: 'Sample development within 7-10 days',
      icon: '⚡',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-sm mb-6 text-blue-200">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/#products" className="hover:text-white">Products</Link>
              <span className="mx-2">/</span>
              <span>Harnesses & Leashes</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Custom Dog Harness Manufacturer
              <span className="block text-blue-300 mt-2">OEM/ODM Dog Leash and Collar Solutions</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Leading <strong>custom dog harness manufacturer</strong> specializing in OEM and ODM production
              for brands worldwide
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                ✓ Low MOQ from 300 units
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                ✓ CA65 & RoHS Certified
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                ✓ Custom Design Service
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                ✓ Multiple Materials
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Dog Harness & Leash Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From <strong>mesh dog harness manufacturing</strong> to <strong>sport dog harness OEM</strong>,
              we offer comprehensive solutions for all your pet restraint product needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{category.image}</div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.name}
                </h3>

                <p className="text-gray-700 mb-4">
                  {category.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase">Features:</h4>
                  <ul className="space-y-1">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">Materials:</span>
                    <p className="text-gray-600">{category.materials}</p>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">MOQ:</span>
                    <span className="text-blue-600 ml-2">{category.moq}</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-4 block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customization Options for Your Brand
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full customization available for <strong>private label dog harness</strong> production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {customizationOptions.map((section, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.options.map((option, idx) => (
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
                      <span className="text-gray-700">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Manufacturing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced <strong>dog harness manufacturing</strong> technology and quality control systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingCapabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Specs */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold mb-3">Size Range</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>XS: 8-12 inches</li>
                  <li>S: 12-16 inches</li>
                  <li>M: 16-20 inches</li>
                  <li>L: 20-26 inches</li>
                  <li>XL: 26-32 inches</li>
                  <li>Custom sizes available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Webbing Width</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>5/8 inch (small dogs)</li>
                  <li>3/4 inch (medium dogs)</li>
                  <li>1 inch (large dogs)</li>
                  <li>1.5 inch (extra large)</li>
                  <li>Custom width available</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Quality Standards</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>CA65 Compliant</li>
                  <li>RoHS Certified</li>
                  <li>REACH Compliant</li>
                  <li>Pull strength tested</li>
                  <li>Color fastness tested</li>
                  <li>100% inspection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-gray-600">
              From concept to delivery - your complete <strong>custom dog harness manufacturing</strong> partner
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Design & Development',
                  description: 'Share your design or choose from our catalog. Our team refines specifications and creates technical drawings.',
                  duration: '3-5 days',
                },
                {
                  step: 2,
                  title: 'Sample Production',
                  description: 'We produce samples for your approval. Revisions available until you are 100% satisfied.',
                  duration: '7-10 days',
                },
                {
                  step: 3,
                  title: 'Material Sourcing',
                  description: 'We source premium materials from certified suppliers. All materials tested for safety and compliance.',
                  duration: '5-7 days',
                },
                {
                  step: 4,
                  title: 'Mass Production',
                  description: 'Production begins with strict quality control at every stage. Regular updates provided.',
                  duration: '20-30 days',
                },
                {
                  step: 5,
                  title: 'Quality Inspection',
                  description: '100% inspection before packaging. Third-party inspection available upon request.',
                  duration: '2-3 days',
                },
                {
                  step: 6,
                  title: 'Packaging & Shipping',
                  description: 'Custom packaging and labeling. Efficient logistics to your destination.',
                  duration: '5-7 days',
                },
              ].map((process, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {process.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{process.title}</h3>
                      <span className="text-sm text-blue-600 font-semibold">{process.duration}</span>
                    </div>
                    <p className="text-gray-700">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-2">
                <strong>Total Lead Time:</strong> 45-60 days from order confirmation to delivery
              </p>
              <p className="text-sm text-gray-600">
                Rush orders available with expedited timeline
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Crazypaws for Dog Harness Manufacturing?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Low MOQ Friendly',
                  description: 'Starting from just 300 units, perfect for new brands and testing markets',
                  icon: '📦',
                },
                {
                  title: 'Certified Quality',
                  description: 'CA65, RoHS, and REACH compliant. All products safety tested',
                  icon: '✓',
                },
                {
                  title: 'Fast Turnaround',
                  description: 'Samples in 7-10 days, production in 20-30 days',
                  icon: '⚡',
                },
                {
                  title: 'Custom Design Support',
                  description: 'In-house design team to help bring your vision to life',
                  icon: '✏️',
                },
                {
                  title: 'Multiple Materials',
                  description: 'Nylon, mesh, leather, and more - we work with all materials',
                  icon: '🧵',
                },
                {
                  title: 'Competitive Pricing',
                  description: 'Direct manufacturer pricing with transparent quotes',
                  icon: '💰',
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 bg-gray-50 rounded-lg p-6">
                  <div className="text-4xl">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Dog Harness Manufacturing Project?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free quote and sample for your <strong>custom dog harness</strong> project today
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Request a Quote</h3>
                <p className="text-blue-100 mb-4">Get detailed pricing for your project</p>
                <a
                  href="mailto:sales@crazypaws-global.com?subject=Dog Harness Manufacturing Quote Request"
                  className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Quote
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Request Samples</h3>
                <p className="text-blue-100 mb-4">See our quality firsthand</p>
                <a
                  href="mailto:samples@crazypaws-global.com?subject=Dog Harness Sample Request"
                  className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Request Samples
                </a>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-blue-200 mb-4">
                Questions? Our team is here to help!
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="mailto:info@crazypaws-global.com" className="hover:text-blue-300">
                  📧 info@crazypaws-global.com
                </a>
                <span>|</span>
                <Link href="/blog/working-with-startups" className="hover:text-blue-300">
                  📖 Learn About Our Process
                </Link>
                <span>|</span>
                <Link href="/" className="hover:text-blue-300">
                  🏠 Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
