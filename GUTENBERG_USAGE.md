# WordPress Gutenberg 區塊標記使用指南

## 📄 檔案說明

**gutenberg-block-markup.html** - 使用 WordPress Gutenberg 標準區塊標記語法的完整內容檔案

## 🎯 包含的內容

### 1. 產品展示區塊
- 3個產品卡片（寵物高架床、狗狗胸背帶、寵物玩具）
- 使用區塊：`wp:group`, `wp:columns`, `wp:image`, `wp:heading`, `wp:paragraph`
- 網格排列，響應式設計

### 2. 服務特色區塊
- 3個服務特色（OEM代工、ODM設計、自有品牌）
- 使用區塊：`wp:group`, `wp:columns`, `wp:paragraph`, `wp:heading`
- 包含 emoji 圖示

### 3. CTA 行動呼籲區塊
- 醒目的藍色背景
- 使用區塊：`wp:cover`, `wp:heading`, `wp:paragraph`, `wp:buttons`
- 包含「立即詢價」按鈕

---

## 🚀 使用方法

### 方法 1: 整頁匯入（推薦）

1. **開啟檔案**
   - 打開 `gutenberg-block-markup.html`
   - 全選並複製所有內容（Ctrl+A, Ctrl+C）

2. **切換到 WordPress 程式碼編輯器**
   - 在 WordPress 後台，新增或編輯頁面/文章
   - 點擊右上角「⋮」（選項）按鈕
   - 選擇「程式碼編輯器」(Code Editor)

3. **貼上內容**
   - 將複製的內容貼上到程式碼編輯器中
   - 點擊「退出程式碼編輯器」

4. **查看效果**
   - Gutenberg 會自動解析區塊
   - 你會看到所有區塊以視覺化方式呈現
   - 可以點擊任何區塊進行編輯

### 方法 2: 單個區塊匯入

如果你只需要某個特定區塊：

1. **找到區塊代碼**
   ```html
   <!-- wp:group ... -->
   ...所有內容...
   <!-- /wp:group -->
   ```

2. **複製區塊**
   - 從開頭的 `<!-- wp:group` 到結尾的 `<!-- /wp:group -->`
   - 複製整個區塊

3. **使用自訂 HTML 區塊**
   - 在 Gutenberg 編輯器中點擊「+」
   - 搜尋「自訂 HTML」或「Custom HTML」
   - 貼上複製的區塊代碼

4. **預覽**
   - 點擊「預覽」查看效果
   - Gutenberg 可能會自動轉換為視覺化區塊

### 方法 3: 手動重建（學習用）

參考檔案中的區塊結構，手動在 Gutenberg 中建立：

1. **產品展示區塊結構**
   ```
   群組 (Group)
   └─ 標題 (Heading H2)
   └─ 段落 (Paragraph)
   └─ 欄位 (Columns, 3欄)
       ├─ 欄位1
       │   └─ 群組
       │       ├─ 圖片
       │       ├─ 標題 H3
       │       └─ 段落
       ├─ 欄位2 (相同結構)
       └─ 欄位3 (相同結構)
   ```

2. **在編輯器中建立**
   - 點擊「+」新增「群組」區塊
   - 在群組內新增「標題」
   - 新增「段落」
   - 新增「欄位」，選擇3欄
   - 在每個欄位內新增「群組」
   - 在每個群組內依序新增：圖片、標題、段落

---

## 📋 Gutenberg 區塊標記語法說明

### 基本格式
```html
<!-- wp:block-name {"attribute": "value"} -->
<div class="wp-block-class">內容</div>
<!-- /wp:block-name -->
```

### 常用區塊

#### 1. 標題 (Heading)
```html
<!-- wp:heading {"level":2,"style":{"typography":{"fontSize":"2rem"}}} -->
<h2 style="font-size:2rem">標題文字</h2>
<!-- /wp:heading -->
```

#### 2. 段落 (Paragraph)
```html
<!-- wp:paragraph {"style":{"color":{"text":"#666666"}}} -->
<p style="color:#666666">段落文字</p>
<!-- /wp:paragraph -->
```

#### 3. 圖片 (Image)
```html
<!-- wp:image {"sizeSlug":"large"} -->
<figure class="wp-block-image size-large">
    <img src="圖片網址" alt="替代文字"/>
</figure>
<!-- /wp:image -->
```

#### 4. 群組 (Group)
```html
<!-- wp:group {"style":{"spacing":{"padding":{"top":"20px"}}}} -->
<div class="wp-block-group" style="padding-top:20px">
    <!-- 內部區塊 -->
</div>
<!-- /wp:group -->
```

#### 5. 欄位 (Columns)
```html
<!-- wp:columns -->
<div class="wp-block-columns">
    <!-- wp:column -->
    <div class="wp-block-column">內容1</div>
    <!-- /wp:column -->

    <!-- wp:column -->
    <div class="wp-block-column">內容2</div>
    <!-- /wp:column -->
</div>
<!-- /wp:columns -->
```

#### 6. 按鈕 (Button)
```html
<!-- wp:buttons -->
<div class="wp-block-buttons">
    <!-- wp:button {"style":{"color":{"background":"#1e40af"}}} -->
    <div class="wp-block-button">
        <a class="wp-block-button__link" href="#link">按鈕文字</a>
    </div>
    <!-- /wp:button -->
</div>
<!-- /wp:buttons -->
```

#### 7. 封面 (Cover)
```html
<!-- wp:cover {"overlayColor":"contrast","minHeight":400} -->
<div class="wp-block-cover" style="min-height:400px">
    <div class="wp-block-cover__inner-container">
        <!-- 內容 -->
    </div>
</div>
<!-- /wp:cover -->
```

---

## 🎨 自訂樣式屬性

### 顏色 (Color)
```json
"style": {
    "color": {
        "text": "#1f2937",
        "background": "#ffffff"
    }
}
```

### 字體 (Typography)
```json
"style": {
    "typography": {
        "fontSize": "1.5rem",
        "fontWeight": "600"
    }
}
```

### 間距 (Spacing)
```json
"style": {
    "spacing": {
        "padding": {
            "top": "20px",
            "right": "20px",
            "bottom": "20px",
            "left": "20px"
        },
        "margin": {
            "top": "1rem",
            "bottom": "1rem"
        }
    }
}
```

### 邊框 (Border)
```json
"style": {
    "border": {
        "radius": "12px",
        "width": "2px",
        "color": "#cccccc"
    }
}
```

---

## ✏️ 修改內容

### 更換文字
直接在 HTML 標籤之間修改文字：
```html
<h2>我們的產品</h2>  <!-- 改成你要的標題 -->
<p>產品描述</p>      <!-- 改成你要的描述 -->
```

### 更換圖片
修改 `src` 屬性：
```html
<img src="你的圖片網址.jpg" alt="圖片描述"/>
```

### 更換顏色
修改 `style` 屬性或 JSON 中的顏色值：
```html
style="color:#1f2937"           <!-- 改成你要的顏色 -->
"style":{"color":{"text":"#1f2937"}}  <!-- 改成你要的顏色 -->
```

### 更換按鈕連結
修改 `href` 屬性：
```html
<a href="#contact">立即詢價</a>  <!-- 改成你要的連結 -->
```

---

## 🔧 疑難排解

### Q1: 貼上後沒有正確顯示
**A:** 確保你複製了完整的區塊代碼，從 `<!-- wp:` 開頭到 `<!-- /wp:` 結尾

### Q2: 樣式沒有正確呈現
**A:** 確認你的 WordPress 主題支援 Gutenberg 區塊樣式

### Q3: 圖片無法顯示
**A:** 更換為你自己上傳到 WordPress 媒體庫的圖片網址

### Q4: 無法編輯區塊
**A:** 嘗試切換到「程式碼編輯器」再切換回來

### Q5: 區塊變成「無效」
**A:** 點擊「嘗試恢復區塊」或「轉換為 HTML」

---

## 📚 進階技巧

### 1. 複製區塊
- 點擊區塊右上角的「⋮」
- 選擇「複製」
- 在需要的地方貼上

### 2. 轉換區塊類型
- 選擇區塊
- 點擊工具列的「轉換」圖示
- 選擇要轉換的區塊類型

### 3. 群組區塊
- 選擇多個區塊（按住 Shift 點擊）
- 點擊「群組」
- 可以統一設定背景、間距等

### 4. 儲存為可重複使用區塊
- 選擇區塊
- 點擊「⋮」→「新增至可重複使用的區塊」
- 命名並儲存
- 之後可以在「可重複使用」分類中找到

---

## 🌐 瀏覽器相容性

- Chrome / Edge (建議)
- Firefox
- Safari
- 需要 WordPress 5.0 或更高版本

---

## 📖 參考資源

- [WordPress Gutenberg 官方文件](https://wordpress.org/gutenberg/)
- [區塊編輯器手冊](https://developer.wordpress.org/block-editor/)
- [Gutenberg 區塊參考](https://developer.wordpress.org/block-editor/reference-guides/core-blocks/)

---

## 💡 提示

1. **先預覽再發布** - 使用「預覽」功能確認效果
2. **定期儲存** - WordPress 會自動儲存，但手動儲存更安全
3. **使用版本控制** - 可以在「修訂」中查看歷史版本
4. **行動裝置測試** - 使用「預覽」的行動版功能測試

---

需要更多協助？查看 WordPress 官方論壇或聯繫主題開發者。
