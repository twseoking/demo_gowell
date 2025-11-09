import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 檢查是否訪問後台頁面（除了登入頁）
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    // 檢查認證 cookie
    const token = request.cookies.get('cms_auth_token')

    if (!token) {
      // 未認證，重定向到登入頁
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // 如果已登入用戶訪問登入頁，重定向到 dashboard
  if (request.nextUrl.pathname === '/admin/login') {
    const token = request.cookies.get('cms_auth_token')

    if (token) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
