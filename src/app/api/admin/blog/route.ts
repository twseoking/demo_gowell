import { NextRequest, NextResponse } from 'next/server'
import { createBlogPost, getBlogPosts } from '@/lib/data'
import { requireAuth } from '@/lib/auth'

export async function GET() {
  try {
    await requireAuth()
    const posts = await getBlogPosts()
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAuth()
    const data = await request.json()
    const post = await createBlogPost(data)
    return NextResponse.json(post, { status: 201 })
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
