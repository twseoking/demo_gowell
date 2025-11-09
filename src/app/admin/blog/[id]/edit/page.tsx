import { notFound } from 'next/navigation'
import { getBlogPost } from '@/lib/data'
import BlogForm from '@/components/admin/BlogForm'

export default async function EditBlogPostPage({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Blog Post</h1>
        <p className="text-gray-600">Update your blog post content</p>
      </div>

      <div className="bg-white rounded-lg shadow p-8">
        <BlogForm post={post} isEdit />
      </div>
    </div>
  )
}
