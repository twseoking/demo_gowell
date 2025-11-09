import ProductForm from '@/components/admin/ProductForm'

export default function NewProductPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Product</h1>
        <p className="text-gray-600">Create a new product in your catalog</p>
      </div>

      <div className="bg-white rounded-lg shadow p-8">
        <ProductForm />
      </div>
    </div>
  )
}
