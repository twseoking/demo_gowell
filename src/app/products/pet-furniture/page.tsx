import type { Metadata } from 'next'
import Link from 'next/link'

// SEO-optimized metadata for Pet Furniture page
export const metadata: Metadata = {
  title: 'Pet Furniture Manufacturer - Custom OEM/ODM Pet Furniture Wholesale',
  description: 'Leading pet furniture manufacturer specializing in OEM/ODM custom pet furniture. Elevated pet beds, cat trees, pet houses, and modern pet furniture. Sustainable materials, low MOQ. Private label pet furniture supplier.',
  keywords: [
    // Primary keywords
    'pet furniture manufacturer',
    'pet furniture OEM',
    'pet furniture ODM',
    'custom pet furniture',
    'private label pet furniture',

    // Product-specific long-tail keywords
    'elevated pet bed manufacturer',
    'cat tree manufacturer',
    'pet house manufacturer',
    'modern pet furniture manufacturer',
    'luxury pet furniture manufacturer',

    // Material-specific keywords
    'wooden pet furniture manufacturer',
    'bamboo pet furniture',
    'eco-friendly pet furniture manufacturer',
    'sustainable pet furniture',
    'natural wood pet furniture',

    // Business model keywords
    'pet furniture wholesale',
    'pet furniture supplier',
    'pet furniture factory',
    'contract manufacturer pet furniture',
    'bulk pet furniture manufacturer',

    // Feature-specific keywords
    'customizable pet furniture',
    'ergonomic pet furniture',
    'space-saving pet furniture',
    'multi-functional pet furniture',
    'easy assembly pet furniture',

    // Target customer keywords
    'pet furniture for brands',
    'white label pet furniture',
    'pet furniture dropshipping supplier',
    'pet furniture for retailers',
    'B2B pet furniture manufacturer',
  ],
  openGraph: {
    title: 'Pet Furniture Manufacturer - Custom OEM/ODM Solutions',
    description: 'Premium pet furniture manufacturer offering custom OEM/ODM solutions. Elevated pet beds, cat trees, and modern pet furniture with sustainable materials.',
    type: 'website',
  },
}

// Product schema for SEO
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Custom Pet Furniture Manufacturing',
  description: 'Professional OEM/ODM pet furniture manufacturing services including elevated pet beds, cat trees, pet houses, and modern pet furniture solutions.',
  brand: {
    '@type': 'Brand',
    name: 'Crazypaws Global',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Crazypaws Global',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'Crazypaws Global',
    },
  },
  category: 'Pet Furniture',
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Service Type',
      value: 'OEM/ODM Manufacturing',
    },
    {
      '@type': 'PropertyValue',
      name: 'Minimum Order Quantity',
      value: 'Low MOQ Available',
    },
    {
      '@type': 'PropertyValue',
      name: 'Certification',
      value: 'CA65, RoHS, REACH Certified',
    },
  ],
}

export default function PetFurniturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4 md:px-6">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/#products" className="text-blue-600 hover:text-blue-800">Products</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-semibold">Pet Furniture</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Pet Furniture Manufacturer - Custom OEM/ODM Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Leading <strong>pet furniture manufacturer</strong> specializing in <strong>custom pet furniture</strong>,
                elevated pet beds, cat trees, and modern pet furniture. Premium quality, sustainable materials, and flexible MOQ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-block"
                >
                  Request Quote
                </a>
                <a
                  href="#products"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors inline-block border-2 border-blue-500"
                >
                  View Product Range
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Choose Our Pet Furniture Manufacturing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🏭',
                  title: 'Full OEM/ODM Capabilities',
                  description: 'Complete pet furniture OEM and ODM services from design to production. Private label pet furniture solutions for your brand.',
                },
                {
                  icon: '🌱',
                  title: 'Sustainable Materials',
                  description: 'Eco-friendly pet furniture using sustainable wood, bamboo, and recycled materials. FSC certified options available.',
                },
                {
                  icon: '🎨',
                  title: 'Custom Design Services',
                  description: 'Customizable pet furniture designs to match your brand identity. Modern, luxury, and minimalist styles available.',
                },
                {
                  icon: '📦',
                  title: 'Flexible MOQ',
                  description: 'Low minimum order quantities for startups and established brands. Scalable production capacity.',
                },
                {
                  icon: '✅',
                  title: 'Quality Certifications',
                  description: 'CA65, RoHS, REACH certified pet furniture. ISO quality management system ensures consistent excellence.',
                },
                {
                  icon: '🚚',
                  title: 'Global Shipping',
                  description: 'Worldwide pet furniture wholesale distribution. Reliable logistics and on-time delivery guaranteed.',
                },
              ].map((benefit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section id="products" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Our Pet Furniture Product Range
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Comprehensive <strong>pet furniture manufacturing</strong> solutions for every pet lifestyle
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Elevated Pet Beds */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">🛏️</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Elevated Pet Beds</h3>
                    <p className="text-blue-600 font-semibold text-sm">Elevated Pet Bed Manufacturer</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Premium <strong>elevated pet bed manufacturing</strong> with ergonomic designs for optimal pet comfort.
                  Available in various sizes, materials, and styles including modern, traditional, and luxury finishes.
                </p>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">Product Features:</h4>
                  <ul className="space-y-2">
                    {[
                      'Orthopedic elevated designs for joint support',
                      'Breathable mesh and durable fabric options',
                      'Wooden, metal, and bamboo frame materials',
                      'Waterproof and easy-clean surfaces',
                      'Small, medium, large, and XL sizes',
                      'Modern minimalist to luxury styles',
                      'Easy assembly and portable options',
                      'Indoor and outdoor use variants',
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Custom Options:</strong> Logo embossing, custom colors, branded packaging,
                    and bespoke dimensions for your <strong>private label pet furniture</strong> line.
                  </p>
                </div>
              </div>

              {/* Cat Trees & Towers */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">🌳</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Cat Trees & Towers</h3>
                    <p className="text-blue-600 font-semibold text-sm">Cat Tree Manufacturer OEM/ODM</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Professional <strong>cat tree manufacturer</strong> offering multi-level cat towers, scratching posts,
                  and activity centers. Modern designs with premium sisal, plush, and natural wood materials.
                </p>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">Product Features:</h4>
                  <ul className="space-y-2">
                    {[
                      'Multi-level towers (3-7 tiers available)',
                      'Premium sisal scratching posts',
                      'Plush cushioned perches and condos',
                      'Natural wood and bamboo construction',
                      'Space-saving wall-mounted options',
                      'Luxury modern minimalist designs',
                      'Stable heavy-duty base construction',
                      'Easy assembly modular systems',
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Design Services:</strong> Custom cat tree designs with your brand specifications.
                    <strong>White label cat furniture</strong> ready for your market.
                  </p>
                </div>
              </div>

              {/* Pet Houses & Caves */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">🏠</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Pet Houses & Caves</h3>
                    <p className="text-blue-600 font-semibold text-sm">Pet House Manufacturer - Indoor/Outdoor</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  <strong>Pet house manufacturing</strong> for dogs and cats. Cozy indoor caves, weatherproof outdoor houses,
                  and modern pet home furniture that complements any interior design.
                </p>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">Product Features:</h4>
                  <ul className="space-y-2">
                    {[
                      'Indoor soft plush pet caves and dens',
                      'Outdoor weatherproof dog houses',
                      'Wooden luxury pet house designs',
                      'Insulated winter pet shelters',
                      'Ventilated summer pet houses',
                      'Modern furniture-style pet homes',
                      'Collapsible and portable options',
                      'Machine washable removable covers',
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Material Options:</strong> Eco-friendly wood, recycled plastic, durable canvas,
                    and premium felt for <strong>sustainable pet furniture</strong> solutions.
                  </p>
                </div>
              </div>

              {/* Pet Stairs & Ramps */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">📐</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Pet Stairs & Ramps</h3>
                    <p className="text-blue-600 font-semibold text-sm">Pet Mobility Furniture Manufacturer</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Specialized <strong>pet stairs and ramp manufacturing</strong> for accessibility. Ideal for senior pets,
                  small breeds, and pets with mobility issues. Modern designs blend with home furniture.
                </p>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">Product Features:</h4>
                  <ul className="space-y-2">
                    {[
                      '2-6 step stair configurations',
                      'Non-slip textured surfaces',
                      'Foldable portable designs',
                      'Wooden and foam construction',
                      'Carpeted and easy-clean options',
                      'Weight capacity up to 150 lbs',
                      'Adjustable height ramps',
                      'Storage compartment options',
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Custom Engineering:</strong> Bespoke dimensions and weight capacities for your target market.
                    Full <strong>ODM pet furniture</strong> design and engineering support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Materials & Sustainability */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Sustainable Pet Furniture Materials
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              <strong>Eco-friendly pet furniture manufacturer</strong> committed to environmental responsibility
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: '🌳',
                  title: 'FSC Certified Wood',
                  description: 'Sustainably sourced natural wood from certified forests',
                },
                {
                  icon: '🎋',
                  title: 'Bamboo Materials',
                  description: 'Renewable bamboo for modern eco-friendly pet furniture',
                },
                {
                  icon: '♻️',
                  title: 'Recycled Materials',
                  description: 'Recycled plastic and fabric options for sustainable production',
                },
                {
                  icon: '🌿',
                  title: 'Natural Fibers',
                  description: 'Organic cotton, hemp, and sisal for chemical-free products',
                },
              ].map((material, idx) => (
                <div key={idx} className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border-2 border-green-200">
                  <div className="text-5xl mb-3">{material.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{material.title}</h3>
                  <p className="text-sm text-gray-700">{material.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Sustainability Commitment</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700"><strong>Zero-waste manufacturing</strong> processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700"><strong>Non-toxic finishes</strong> safe for pets and environment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700"><strong>Energy-efficient production</strong> facilities</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700"><strong>Biodegradable packaging</strong> options available</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700"><strong>Carbon-neutral shipping</strong> programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">✓</span>
                      <span className="text-gray-700"><strong>Recyclable product designs</strong> for end-of-life</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Our Pet Furniture Manufacturing Process
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Professional <strong>contract manufacturer pet furniture</strong> with end-to-end production
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Design & Development',
                  description: 'Custom pet furniture design services. 3D modeling, prototyping, and engineering support for your OEM/ODM project.',
                },
                {
                  step: '02',
                  title: 'Material Sourcing',
                  description: 'Premium material procurement. Sustainable wood, eco-friendly fabrics, and certified components for quality pet furniture.',
                },
                {
                  step: '03',
                  title: 'Production & QC',
                  description: 'Precision manufacturing with multi-stage quality control. ISO certified processes ensure consistent excellence.',
                },
                {
                  step: '04',
                  title: 'Packaging & Delivery',
                  description: 'Custom branding and packaging for private label pet furniture. Global logistics and on-time delivery guaranteed.',
                },
              ].map((process, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full">
                    <div className="text-5xl font-bold text-blue-200 mb-4">{process.step}</div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{process.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{process.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Technical Specifications & Capabilities
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Production Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-semibold">Monthly Capacity</span>
                    <span className="text-blue-600 font-bold">50,000+ units</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-semibold">Minimum Order Quantity</span>
                    <span className="text-blue-600 font-bold">100-500 units</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-semibold">Lead Time</span>
                    <span className="text-blue-600 font-bold">30-45 days</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700 font-semibold">Sample Development</span>
                    <span className="text-blue-600 font-bold">7-14 days</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700 font-semibold">Production Facility</span>
                    <span className="text-blue-600 font-bold">15,000 m²</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Quality Certifications</h3>
                <div className="space-y-4">
                  {[
                    { cert: 'CA Prop 65', desc: 'California safety standards compliance' },
                    { cert: 'RoHS', desc: 'Restriction of Hazardous Substances' },
                    { cert: 'REACH', desc: 'European chemical regulations' },
                    { cert: 'ISO 9001', desc: 'Quality management system' },
                    { cert: 'FSC Certified', desc: 'Sustainable forestry materials' },
                    { cert: 'BSCI', desc: 'Business Social Compliance Initiative' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start py-3 border-b border-gray-200 last:border-0">
                      <span className="text-green-500 font-bold mr-3 mt-1">✓</span>
                      <div>
                        <div className="text-gray-900 font-bold">{item.cert}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Markets */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Who We Serve
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              <strong>B2B pet furniture manufacturer</strong> serving diverse business clients worldwide
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '🏪',
                  title: 'Pet Store Retailers',
                  description: 'White label pet furniture for independent pet stores and retail chains',
                },
                {
                  icon: '🌐',
                  title: 'E-commerce Brands',
                  description: 'Private label pet furniture for online sellers and dropshipping businesses',
                },
                {
                  icon: '🏢',
                  title: 'Pet Brands',
                  description: 'OEM pet furniture manufacturing for established pet product brands',
                },
                {
                  icon: '🎨',
                  title: 'Design Companies',
                  description: 'ODM production for interior designers and furniture brands entering pet market',
                },
                {
                  icon: '🏬',
                  title: 'Wholesale Distributors',
                  description: 'Bulk pet furniture wholesale for regional and national distributors',
                },
                {
                  icon: '🚀',
                  title: 'Startups',
                  description: 'Low MOQ pet furniture manufacturing for emerging brands and crowdfunding projects',
                },
              ].map((market, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-3">{market.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{market.title}</h3>
                  <p className="text-gray-700">{market.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Pet Furniture Manufacturing FAQ
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'What is the minimum order quantity for custom pet furniture?',
                  a: 'Our MOQ varies by product complexity: elevated pet beds (100 units), cat trees (200 units), pet houses (150 units). We offer flexible MOQ for startups and growing brands.',
                },
                {
                  q: 'Can you manufacture sustainable and eco-friendly pet furniture?',
                  a: 'Yes! We specialize in sustainable pet furniture using FSC certified wood, bamboo, recycled materials, and organic fabrics. All products comply with environmental certifications.',
                },
                {
                  q: 'What customization options are available for private label pet furniture?',
                  a: 'Full customization including: custom dimensions, material selection, color matching, logo embossing/printing, branded packaging, and unique design modifications for your brand identity.',
                },
                {
                  q: 'Do you offer pet furniture design services (ODM)?',
                  a: 'Absolutely. Our ODM services include concept design, 3D modeling, engineering, prototyping, and full production. Perfect for brands wanting exclusive modern pet furniture designs.',
                },
                {
                  q: 'What certifications do your pet furniture products have?',
                  a: 'All products are CA65, RoHS, and REACH certified. We maintain ISO 9001 quality standards and offer FSC certified wood options for sustainable pet furniture lines.',
                },
                {
                  q: 'How long is the production lead time for pet furniture?',
                  a: 'Sample development: 7-14 days. Bulk production: 30-45 days after approval. Rush orders available for established clients with premium service.',
                },
                {
                  q: 'Can you manufacture luxury and modern pet furniture designs?',
                  a: 'Yes, we excel in luxury pet furniture manufacturing with premium materials, modern minimalist designs, and high-end finishes. Perfect for premium pet brands.',
                },
                {
                  q: 'Do you ship pet furniture worldwide?',
                  a: 'Yes, we provide global shipping to North America, Europe, Australia, and Asia. We handle all logistics and offer both FOB and DDP shipping terms.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Pet Furniture Project?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Partner with a leading <strong>pet furniture manufacturer</strong> for your next project.
              Get custom quotes, samples, and expert consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sales@crazypaws-global.com"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-block"
              >
                Request Quote
              </a>
              <a
                href="/"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors inline-block border-2 border-blue-500"
              >
                View All Products
              </a>
            </div>
            <p className="mt-8 text-blue-200">
              Email: sales@crazypaws-global.com | Response within 24 hours
            </p>
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Pet Furniture Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#products" className="hover:text-white">Elevated Pet Beds</Link></li>
                  <li><Link href="#products" className="hover:text-white">Cat Trees</Link></li>
                  <li><Link href="#products" className="hover:text-white">Pet Houses</Link></li>
                  <li><Link href="#products" className="hover:text-white">Pet Stairs</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-white">OEM Manufacturing</Link></li>
                  <li><Link href="/" className="hover:text-white">ODM Design Services</Link></li>
                  <li><Link href="/" className="hover:text-white">Private Label</Link></li>
                  <li><Link href="/" className="hover:text-white">Custom Production</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Materials</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="hover:text-white">Sustainable Wood</Link></li>
                  <li><Link href="#" className="hover:text-white">Bamboo Furniture</Link></li>
                  <li><Link href="#" className="hover:text-white">Eco-Friendly Options</Link></li>
                  <li><Link href="#" className="hover:text-white">Recycled Materials</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-white">About Crazypaws</Link></li>
                  <li><Link href="/#products" className="hover:text-white">All Products</Link></li>
                  <li><Link href="#contact" className="hover:text-white">Contact Us</Link></li>
                  <li><Link href="/" className="hover:text-white">Certifications</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2024 Crazypaws Global. Leading Pet Furniture Manufacturer - OEM/ODM/Private Label Solutions</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
