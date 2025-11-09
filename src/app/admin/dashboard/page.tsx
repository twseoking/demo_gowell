import Link from 'next/link'
import { getProducts, getBlogPosts } from '@/lib/data'

export default async function DashboardPage() {
  const products = await getProducts()
  const blogPosts = await getBlogPosts()

  const stats = [
    {
      name: 'Total Products',
      value: products.length,
      icon: '📦',
      href: '/admin/products',
      color: 'bg-blue-500',
    },
    {
      name: 'Blog Posts',
      value: blogPosts.length,
      icon: '📝',
      href: '/admin/blog',
      color: 'bg-green-500',
    },
    {
      name: 'Published Posts',
      value: blogPosts.filter(p => p.published).length,
      icon: '✅',
      href: '/admin/blog',
      color: 'bg-purple-500',
    },
    {
      name: 'Draft Posts',
      value: blogPosts.filter(p => !p.published).length,
      icon: '📋',
      href: '/admin/blog',
      color: 'bg-yellow-500',
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to Crazypaws Content Management System</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            </div>
            <div className="text-sm font-medium text-gray-600">{stat.name}</div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/admin/products/new"
              className="flex items-center space-x-3 p-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <span className="text-2xl">➕</span>
              <span className="font-medium text-gray-700">Add New Product</span>
            </Link>
            <Link
              href="/admin/blog/new"
              className="flex items-center space-x-3 p-3 rounded-lg border-2 border-dashed border-gray-300 hover:border-green-500 hover:bg-green-50 transition-colors"
            >
              <span className="text-2xl">✍️</span>
              <span className="font-medium text-gray-700">Write New Blog Post</span>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="flex items-center space-x-3 p-3 border-l-4 border-blue-500 bg-gray-50">
                <span className="text-lg">📄</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
            {blogPosts.length === 0 && (
              <p className="text-gray-500 text-sm">No recent activity</p>
            )}
          </div>
        </div>
      </div>

      {/* System Info */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 Getting Started</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• Use the sidebar to navigate between Products and Blog Posts</li>
          <li>• Data is stored in JSON files in the /data directory</li>
          <li>• For production, consider migrating to a database (PostgreSQL, MongoDB, etc.)</li>
          <li>• Current credentials: admin / crazypaws2025 (change in production!)</li>
        </ul>
      </div>
    </div>
  )
}
