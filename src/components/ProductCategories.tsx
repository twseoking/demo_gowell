export default function ProductCategories() {
  const categories = [
    {
      title: 'Pet Furniture',
      keywords: 'Private Label Pet Furniture, Elevated Pet Bed Manufacturer',
      description:
        'High-quality pet furniture including elevated pet beds, cat trees, and pet houses. Custom designs available.',
      icon: '🛋️',
      products: ['Elevated Pet Beds', 'Cat Trees', 'Pet Houses', 'Pet Stairs'],
    },
    {
      title: 'Harnesses & Leashes',
      keywords: 'Custom Dog Harness Manufacturer, OEM Dog Leash and Collar',
      description:
        'Custom dog harnesses, leashes, and collars in various materials - mesh, textile, and sport designs.',
      icon: '🦮',
      products: ['Mesh Harnesses', 'Sport Harnesses', 'Fashion Collars', 'Retractable Leashes'],
    },
    {
      title: 'Pet Toys',
      keywords: 'Private Label Pet Toys, Squeaky Dog Toy Manufacturer',
      description:
        'Engaging pet toys including squeaky toys, interactive puzzles, and durable chew toys for all pet sizes.',
      icon: '🎾',
      products: ['Squeaky Toys', 'Interactive Puzzles', 'Chew Toys', 'Plush Toys'],
    },
    {
      title: 'Pet Bowls & Feeders',
      keywords: 'OEM Pet Bowl and Feeder, Anti-Ant Pet Bowl Manufacturer',
      description:
        'Innovative pet bowls and feeders including anti-ant designs, elevated feeders, and slow-feed bowls.',
      icon: '🍽️',
      products: ['Anti-Ant Bowls', 'Elevated Feeders', 'Slow-Feed Bowls', 'Travel Bowls'],
    },
    {
      title: 'Pet Grooming Products',
      keywords: 'Pet Grooming Product OEM',
      description:
        'Complete grooming solutions including brushes, nail clippers, and grooming accessories.',
      icon: '✂️',
      products: ['Grooming Brushes', 'Nail Clippers', 'Pet Shampoo Dispensers', 'Grooming Gloves'],
    },
    {
      title: 'Pet Apparel',
      keywords: 'Textile Pet Accessories OEM',
      description:
        'Fashionable and functional pet clothing including jackets, raincoats, and seasonal wear.',
      icon: '👕',
      products: ['Pet Jackets', 'Raincoats', 'Sweaters', 'Bandanas'],
    },
    {
      title: 'Pet Care Accessories',
      keywords: 'Pet Accessories Manufacturer',
      description:
        'Essential pet care items including waste bag dispensers, training pads, and travel accessories.',
      icon: '🎒',
      products: ['Waste Bag Dispensers', 'Training Pads', 'Pet Carriers', 'Travel Kits'],
    },
    {
      title: 'Pet Home Essentials',
      keywords: 'OEM Pet Home Products',
      description:
        'Comfortable pet home essentials including mats, blankets, and pet gates.',
      icon: '🏠',
      products: ['Pet Mats', 'Blankets', 'Pet Gates', 'Door Covers'],
    },
    {
      title: 'Outdoor Pet Products',
      keywords: 'Outdoor Pet Product Manufacturer',
      description:
        'Durable outdoor pet products including tie-outs, water bottles, and portable accessories.',
      icon: '🌳',
      products: ['Tie-Out Stakes', 'Travel Water Bottles', 'Portable Bowls', 'Outdoor Toys'],
    },
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Pet Product Manufacturing Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive <strong>pet accessories manufacturing</strong> across 9 major categories.
            All products available for <strong>OEM, ODM, and private label</strong> production.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">{category.icon}</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {category.title}
              </h3>

              <p className="text-sm text-blue-600 font-semibold mb-4">
                {category.keywords}
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {category.description}
              </p>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                  Popular Products:
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-1">▸</span>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href="#contact"
                  className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center"
                >
                  Request Catalog
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Looking for a specific product? We offer <strong>custom pet product manufacturing</strong> services
            for unique requirements.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Discuss Custom Products
          </a>
        </div>
      </div>
    </section>
  )
}
