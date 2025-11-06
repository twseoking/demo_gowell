# 安裝指南 / Installation Guide

## 繁體中文

### 快速安裝步驟

#### 1. 下載並上傳外掛

1. 將整個 `wordpress-gutenberg-block` 資料夾重新命名為 `crazypaws-blocks`
2. 壓縮為 ZIP 檔案
3. 登入 WordPress 管理後台
4. 前往「外掛」→「安裝外掛」→「上傳外掛」
5. 選擇 ZIP 檔案並安裝
6. 啟用外掛

#### 2. 開發環境安裝

如果您想要修改或開發這些區塊：

```bash
cd wordpress-gutenberg-block
npm install
npm run build
```

開發模式（自動重新編譯）：
```bash
npm start
```

#### 3. 使用區塊

啟用外掛後：

1. 編輯任何頁面或文章
2. 點擊「+」按鈕新增區塊
3. 搜尋 "Crazypaws" 或直接在「Crazypaws Blocks」分類中找到區塊
4. 可用的區塊：
   - **產品展示** (Product Showcase)
   - **服務特色** (Service Features)
   - **行動呼籲** (CTA Section)

### 系統需求

- WordPress 6.0 或更高版本
- PHP 7.4 或更高版本
- Node.js 14.x 或更高版本（僅開發時需要）

---

## English

### Quick Installation Steps

#### 1. Download and Upload Plugin

1. Rename the `wordpress-gutenberg-block` folder to `crazypaws-blocks`
2. Compress it as a ZIP file
3. Log in to your WordPress admin dashboard
4. Go to "Plugins" → "Add New" → "Upload Plugin"
5. Select the ZIP file and install
6. Activate the plugin

#### 2. Development Installation

If you want to modify or develop these blocks:

```bash
cd wordpress-gutenberg-block
npm install
npm run build
```

Development mode (auto-recompile):
```bash
npm start
```

#### 3. Using the Blocks

After activating the plugin:

1. Edit any page or post
2. Click the "+" button to add a block
3. Search for "Crazypaws" or find blocks in the "Crazypaws Blocks" category
4. Available blocks:
   - **Product Showcase**
   - **Service Features**
   - **CTA Section**

### System Requirements

- WordPress 6.0 or higher
- PHP 7.4 or higher
- Node.js 14.x or higher (for development only)

---

## 常見問題 / FAQ

### Q: 區塊無法顯示？
A: 請確保已執行 `npm run build` 並重新啟用外掛。

### Q: Blocks not showing up?
A: Make sure you've run `npm run build` and reactivated the plugin.

### Q: 如何自訂樣式？
A: 編輯各區塊資料夾中的 `style.scss` 檔案，然後執行 `npm run build`。

### Q: How to customize styles?
A: Edit the `style.scss` file in each block folder, then run `npm run build`.

### Q: 支援哪些 WordPress 版本？
A: WordPress 6.0 或更高版本。

### Q: Which WordPress versions are supported?
A: WordPress 6.0 or higher.
