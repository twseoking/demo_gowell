import { cookies } from 'next/headers'

// 簡單的認證系統（生產環境建議使用 NextAuth.js）
export const AUTH_COOKIE = 'cms_auth_token'

// 預設管理員帳號（生產環境請使用環境變數和加密）
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'crazypaws2025', // 請在生產環境中更改！
}

export async function login(username: string, password: string): Promise<boolean> {
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    // 生成簡單的 token（生產環境建議使用 JWT）
    const token = Buffer.from(`${username}:${Date.now()}`).toString('base64')

    // 設置 cookie
    cookies().set(AUTH_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 天
      path: '/',
    })

    return true
  }

  return false
}

export async function logout() {
  cookies().delete(AUTH_COOKIE)
}

export async function isAuthenticated(): Promise<boolean> {
  const token = cookies().get(AUTH_COOKIE)
  return !!token
}

export async function requireAuth() {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    throw new Error('Unauthorized')
  }
}
