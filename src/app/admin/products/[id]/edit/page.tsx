import { notFound } from 'next/navigation'
import { getProduct } from '@/lib/data'
import ProductForm from '@/components/admin/ProductForm'

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Product</h1>
        <p className="text-gray-600">Update product information</p>
      </div>

      <div className="bg-white rounded-lg shadow p-8">
        <ProductForm product={product} isEdit />
      </div>
    </div>
  )
}
