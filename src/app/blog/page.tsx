import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pet Product Manufacturing Insights & Industry News | Crazypaws Blog',
  description: 'Expert insights on pet product manufacturing, OEM/ODM processes, sustainable materials, certifications, and industry best practices.',
  keywords: [
    'pet product manufacturing blog',
    'OEM ODM insights',
    'sustainable pet products',
    'pet product certifications',
    'manufacturing best practices',
  ],
}

export default function BlogPage() {
  const articles = [
    {
      title: 'Sustainable Materials in Pet Product Manufacturing',
      slug: 'sustainable-materials',
      excerpt: 'Discover how eco-friendly materials are transforming the pet product industry. Learn about recycled plastics, organic textiles, and biodegradable options for sustainable pet product manufacturing.',
      category: 'Sustainability',
      readTime: '8 min read',
      date: '2025-11-06',
      keywords: ['Sustainable Pet Product Manufacturer', 'Eco-Friendly Pet Supplies', 'Recycled Materials'],
      image: '🌱',
    },
    {
      title: 'Understanding CA65, RoHS, and REACH Certifications',
      slug: 'certifications-guide',
      excerpt: 'A comprehensive guide to international safety certifications for pet products. Learn why CA65, RoHS, and REACH compliance matters for your brand and how to ensure your products meet these standards.',
      category: 'Certifications',
      readTime: '10 min read',
      date: '2025-11-06',
      keywords: ['CA65 Compliant', 'RoHS Certified', 'REACH Compliance', 'Pet Product Safety'],
      image: '🔒',
    },
    {
      title: 'How to Partner with a Pet Product Manufacturer as a Startup',
      slug: 'working-with-startups',
      excerpt: 'A step-by-step guide for startups and entrepreneurs on launching a pet product brand. From finding the right manufacturer to managing your first production run with low MOQ options.',
      category: 'For Startups',
      readTime: '12 min read',
      date: '2025-11-06',
      keywords: ['Pet Product Manufacturing for Startups', 'Low MOQ', 'OEM for New Brands'],
      image: '💡',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pet Product Manufacturing Insights
            </h1>
            <p className="text-xl text-blue-100">
              Expert insights, industry trends, and practical guides for pet product brands
              and manufacturers
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-xl transition-all"
                >
                  <div className="md:flex">
                    <div className="md:w-1/4 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-8">
                      <div className="text-7xl">{article.image}</div>
                    </div>

                    <div className="md:w-3/4 p-8">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">{article.date}</span>
                        <span className="text-sm text-gray-500">• {article.readTime}</span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        <Link
                          href={`/blog/${article.slug}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h2>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.keywords.map((keyword, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                      >
                        Read Full Article
                        <svg
                          className="w-5 h-5 ml-2"
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
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Pet Product Manufacturing Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help you navigate the manufacturing process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
