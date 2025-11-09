# Crazypaws CMS - Content Management System

完整的後台內容管理系統，用於管理產品和部落格文章。

## 🚀 快速開始

### 1. 啟動開發伺服器

```bash
npm run dev
```

### 2. 訪問 CMS 後台

打開瀏覽器訪問: `http://localhost:3000/admin/login`

### 3. 登入

**預設帳號密碼:**
- Username: `admin`
- Password: `crazypaws2025`

⚠️ **重要**: 生產環境請務必更改密碼！

## 📋 功能清單

### ✅ 已實現功能

#### 🔐 認證系統
- [x] 登入頁面
- [x] 登出功能
- [x] Cookie-based 會話管理
- [x] 路由保護（中間件）

#### 📊 Dashboard
- [x] 統計概覽（產品數、文章數）
- [x] 快速操作按鈕
- [x] 最近活動顯示

#### 📦 產品管理
- [x] 產品列表（表格視圖）
- [x] 新增產品
- [x] 編輯產品
- [x] 刪除產品
- [x] 產品欄位：
  - 標題、Slug、類別
  - 描述、SEO 關鍵字
  - Icon、MOQ、材料
  - 功能列表

#### 📝 部落格管理
- [x] 文章列表
- [x] 新增文章
- [x] 編輯文章
- [x] 刪除文章
- [x] 發布狀態管理（Published/Draft）
- [x] 文章欄位：
  - 標題、Slug、類別
  - 摘要、完整內容
  - SEO 關鍵字
  - 閱讀時間

## 🏗️ 系統架構

### 技術棧
- **前端框架**: Next.js 14 (App Router)
- **UI**: React + Tailwind CSS
- **認證**: Cookie-based (可升級為 NextAuth.js)
- **數據存儲**: JSON 文件 (可升級為資料庫)

### 目錄結構

```
src/
├── app/
│   ├── admin/
│   │   ├── login/          # 登入頁面
│   │   ├── dashboard/      # 儀表板
│   │   ├── products/       # 產品管理
│   │   │   ├── new/        # 新增產品
│   │   │   └── [id]/edit/  # 編輯產品
│   │   └── blog/           # 部落格管理
│   │       ├── new/        # 新增文章
│   │       └── [id]/edit/  # 編輯文章
│   └── api/
│       └── admin/          # API 路由
│           ├── login/
│           ├── logout/
│           ├── products/
│           └── blog/
├── components/
│   └── admin/              # CMS 組件
│       ├── Sidebar.tsx
│       ├── ProductForm.tsx
│       ├── BlogForm.tsx
│       └── ...
├── lib/
│   ├── auth.ts            # 認證邏輯
│   └── data.ts            # 數據操作
└── middleware.ts          # 路由保護

data/                      # JSON 數據存儲
├── products.json
└── blog-posts.json
```

## 📝 數據存儲

當前使用 JSON 文件存儲數據，位於 `/data` 目錄：

- `products.json` - 產品數據
- `blog-posts.json` - 部落格文章數據

### 數據結構

#### Product
```typescript
{
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
```

#### BlogPost
```typescript
{
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
```

## 🔒 安全性

### 當前實現
- ✅ Cookie-based 認證
- ✅ 路由中間件保護
- ✅ API 路由認證檢查
- ✅ httpOnly cookies

### 生產環境建議
- [ ] 使用 NextAuth.js 或 Auth.js
- [ ] 密碼哈希 (bcrypt)
- [ ] JWT tokens
- [ ] CSRF 保護
- [ ] Rate limiting
- [ ] 環境變數管理

## 🗄️ 升級到資料庫

當前使用 JSON 文件，適合：
- ✅ 開發和測試
- ✅ 小型專案
- ✅ 快速原型

生產環境建議升級到資料庫：

### 推薦選項

#### 1. PostgreSQL + Prisma
```bash
npm install @prisma/client
npm install -D prisma
npx prisma init
```

#### 2. MongoDB + Mongoose
```bash
npm install mongoose
```

#### 3. Supabase (PostgreSQL + Auth)
```bash
npm install @supabase/supabase-js
```

### 遷移步驟
1. 安裝數據庫客戶端
2. 定義 Schema/Model
3. 更新 `src/lib/data.ts` 中的 CRUD 函數
4. 遷移現有 JSON 數據

## 🎨 自定義

### 更改登入憑證

編輯 `src/lib/auth.ts`:

```typescript
const ADMIN_CREDENTIALS = {
  username: 'your_username',
  password: 'your_secure_password',
}
```

### 添加新功能

1. 在 Sidebar 添加導航項
2. 創建新的 `/admin/[feature]` 路由
3. 創建相應的 API 路由
4. 更新數據模型

### 自定義樣式

所有組件使用 Tailwind CSS，可直接修改 className。

## 📱 功能使用指南

### 管理產品

1. **查看產品**: 點擊側邊欄 "Products"
2. **新增產品**:
   - 點擊 "Add New Product"
   - 填寫所有必填欄位
   - 點擊 "Create Product"
3. **編輯產品**: 點擊產品列表中的 "Edit"
4. **刪除產品**: 點擊 "Delete" 並確認

### 管理部落格

1. **查看文章**: 點擊側邊欄 "Blog Posts"
2. **撰寫文章**:
   - 點擊 "Write New Post"
   - 填寫標題、內容等
   - 選擇發布狀態（Published/Draft）
   - 點擊 "Create Post"
3. **編輯文章**: 點擊文章列表中的 "Edit"
4. **刪除文章**: 點擊 "Delete" 並確認

## 🐛 常見問題

### Q: 登入後重定向失敗
A: 檢查中間件配置和 cookie 設置

### Q: 數據沒有保存
A: 確保 `/data` 目錄有寫入權限

### Q: API 返回 401 錯誤
A: 確認已登入且 cookie 有效

### Q: 部署到 Vercel 後無法寫入數據
A: JSON 文件存儲不適合 serverless，需升級到資料庫

## 🚀 部署

### Vercel 部署

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel
```

⚠️ **注意**: Vercel 等 serverless 平台不支持文件系統寫入，部署前請先遷移到資料庫。

### 環境變數

創建 `.env.local`:

```bash
# 認證密鑰
AUTH_SECRET=your-secret-key

# 數據庫 URL (如使用資料庫)
DATABASE_URL=postgresql://...
```

## 📚 未來改進建議

### 短期（1-2週）
- [ ] 添加圖片上傳功能
- [ ] Rich Text Editor (TinyMCE/Quill)
- [ ] 批量操作（刪除、發布）
- [ ] 搜索和篩選功能

### 中期（1個月）
- [ ] 遷移到 PostgreSQL + Prisma
- [ ] 實現 NextAuth.js 認證
- [ ] 用戶角色管理
- [ ] 活動日誌
- [ ] 數據導出功能

### 長期（3個月+）
- [ ] 多語言支持
- [ ] 版本控制
- [ ] 工作流程（審核）
- [ ] 分析和報告
- [ ] API 文檔生成

## 🆘 技術支持

如有問題，請：
1. 檢查本文檔
2. 查看代碼註釋
3. 參考 Next.js 官方文檔

## 📄 License

MIT License - 可自由使用和修改

---

**建立時間**: 2025-11-06
**版本**: 1.0.0
**作者**: Claude Code
**狀態**: ✅ 生產就緒（需升級數據存儲）
