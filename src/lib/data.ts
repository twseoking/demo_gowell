import fs from 'fs/promises'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data')

// 確保數據目錄存在
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR)
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true })
  }
}

// 產品數據類型
export interface Product {
  id: string
  title: string
  category: string
  description: string
  keywords: string
  icon: string
  moq: string
  materials: string
  features: string[]
  slug: string
  createdAt: string
  updatedAt: string
}

// 部落格文章數據類型
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  keywords: string[]
  readTime: string
  published: boolean
  createdAt: string
  updatedAt: string
}

// 產品數據操作
export async function getProducts(): Promise<Product[]> {
  await ensureDataDir()
  const filePath = path.join(DATA_DIR, 'products.json')

  try {
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

export async function saveProducts(products: Product[]): Promise<void> {
  await ensureDataDir()
  const filePath = path.join(DATA_DIR, 'products.json')
  await fs.writeFile(filePath, JSON.stringify(products, null, 2))
}

export async function getProduct(id: string): Promise<Product | null> {
  const products = await getProducts()
  return products.find(p => p.id === id) || null
}

export async function createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
  const products = await getProducts()
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  products.push(newProduct)
  await saveProducts(products)
  return newProduct
}

export async function updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
  const products = await getProducts()
  const index = products.findIndex(p => p.id === id)

  if (index === -1) return null

  products[index] = {
    ...products[index],
    ...updates,
    id: products[index].id, // 保持 ID 不變
    createdAt: products[index].createdAt, // 保持創建時間
    updatedAt: new Date().toISOString(),
  }

  await saveProducts(products)
  return products[index]
}

export async function deleteProduct(id: string): Promise<boolean> {
  const products = await getProducts()
  const filtered = products.filter(p => p.id !== id)

  if (filtered.length === products.length) return false

  await saveProducts(filtered)
  return true
}

// 部落格文章數據操作
export async function getBlogPosts(): Promise<BlogPost[]> {
  await ensureDataDir()
  const filePath = path.join(DATA_DIR, 'blog-posts.json')

  try {
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

export async function saveBlogPosts(posts: BlogPost[]): Promise<void> {
  await ensureDataDir()
  const filePath = path.join(DATA_DIR, 'blog-posts.json')
  await fs.writeFile(filePath, JSON.stringify(posts, null, 2))
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find(p => p.id === id) || null
}

export async function createBlogPost(post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<BlogPost> {
  const posts = await getBlogPosts()
  const newPost: BlogPost = {
    ...post,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  posts.push(newPost)
  await saveBlogPosts(posts)
  return newPost
}

export async function updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  const index = posts.findIndex(p => p.id === id)

  if (index === -1) return null

  posts[index] = {
    ...posts[index],
    ...updates,
    id: posts[index].id,
    createdAt: posts[index].createdAt,
    updatedAt: new Date().toISOString(),
  }

  await saveBlogPosts(posts)
  return posts[index]
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  const posts = await getBlogPosts()
  const filtered = posts.filter(p => p.id !== id)

  if (filtered.length === posts.length) return false

  await saveBlogPosts(filtered)
  return true
}
