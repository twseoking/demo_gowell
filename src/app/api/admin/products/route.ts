import { NextRequest, NextResponse } from 'next/server'
import { createProduct, getProducts } from '@/lib/data'
import { requireAuth } from '@/lib/auth'

export async function GET() {
  try {
    await requireAuth()
    const products = await getProducts()
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAuth()
    const data = await request.json()
    const product = await createProduct(data)
    return NextResponse.json(product, { status: 201 })
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 })
  }
}
