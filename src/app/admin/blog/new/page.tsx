import BlogForm from '@/components/admin/BlogForm'

export default function NewBlogPostPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Write New Blog Post</h1>
        <p className="text-gray-600">Create engaging content for your audience</p>
      </div>

      <div className="bg-white rounded-lg shadow p-8">
        <BlogForm />
      </div>
    </div>
  )
}
