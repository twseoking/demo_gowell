# Crazypaws Gutenberg Blocks

Custom WordPress Gutenberg blocks for Crazypaws Global - Pet Supplies Contract Manufacturer.

## Features

This plugin provides three custom Gutenberg blocks:

### 1. Product Showcase Block
Display your pet products with images and descriptions in a beautiful grid layout.

**Features:**
- Add unlimited products
- Upload product images
- Customizable titles and descriptions
- Responsive grid layout
- Hover effects

### 2. Service Features Block
Showcase your OEM/ODM manufacturing services with icons and descriptions.

**Features:**
- Add unlimited features
- Custom emoji icons
- Feature titles and descriptions
- Clean, modern design
- Fully responsive

### 3. CTA Section Block
Eye-catching call-to-action section for lead generation.

**Features:**
- Customizable title and description
- Button text and URL configuration
- Custom background and text colors
- Full-width and wide alignment support
- Mobile responsive

## Installation

### Manual Installation

1. Upload the `crazypaws-gutenberg-blocks` folder to `/wp-content/plugins/`
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Start using the blocks in the Gutenberg editor

### Development Installation

1. Clone this repository into your WordPress plugins directory:
```bash
cd wp-content/plugins/
git clone [repository-url] crazypaws-gutenberg-blocks
cd crazypaws-gutenberg-blocks
```

2. Install dependencies:
```bash
npm install
```

3. Build the blocks:
```bash
npm run build
```

4. For development with auto-rebuild:
```bash
npm start
```

## Development

### Prerequisites
- Node.js 14.x or higher
- npm 6.x or higher
- WordPress 6.0 or higher

### Build Commands

- `npm run build` - Build production-ready blocks
- `npm start` - Start development mode with file watching
- `npm run packages-update` - Update WordPress packages
- `npm run plugin-zip` - Create a distributable plugin ZIP file

### Project Structure

```
crazypaws-gutenberg-blocks/
├── src/
│   ├── product-showcase/
│   │   ├── block.json
│   │   ├── index.js
│   │   ├── style.scss
│   │   └── editor.scss
│   ├── service-features/
│   │   ├── block.json
│   │   ├── index.js
│   │   ├── style.scss
│   │   └── editor.scss
│   └── cta-section/
│       ├── block.json
│       ├── index.js
│       ├── style.scss
│       └── editor.scss
├── build/ (generated)
├── crazypaws-blocks.php
├── package.json
└── README.md
```

## Usage

### Product Showcase Block

1. Add the "Product Showcase" block to your page
2. Edit the title and description
3. In the right sidebar (Inspector Controls), add/edit products:
   - Set product name
   - Add product description
   - Upload product image
4. Add or remove products as needed

### Service Features Block

1. Add the "Service Features" block to your page
2. Edit the main title
3. In the right sidebar, configure features:
   - Add emoji icon
   - Set feature title
   - Add feature description
4. Add or remove features as needed

### CTA Section Block

1. Add the "CTA Section" block to your page
2. Edit the title and description directly on the block
3. In the right sidebar, customize:
   - Button text and URL
   - Background color
   - Text color
4. Optionally set alignment to "wide" or "full width"

## Customization

### Styling

All blocks use SCSS for styling. You can customize the appearance by editing the SCSS files in each block's folder:

- `style.scss` - Frontend styles
- `editor.scss` - Editor-specific styles

After making changes, run `npm run build` to compile the styles.

### Adding New Blocks

1. Create a new folder in `src/`
2. Add `block.json`, `index.js`, `style.scss`, and `editor.scss`
3. Register the block in `crazypaws-blocks.php`
4. Run `npm run build`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## WordPress Compatibility

- WordPress 6.0 or higher
- Gutenberg editor enabled

## License

This plugin is licensed under GPL v2 or later.

## Support

For issues and questions, please visit [https://crazypaws-global.com](https://crazypaws-global.com)

## Changelog

### 1.0.0
- Initial release
- Product Showcase Block
- Service Features Block
- CTA Section Block
