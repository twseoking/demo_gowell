export const seoConfig = {
  defaultTitle: 'Pet Supplies Contract Manufacturer - OEM/ODM Solutions | Crazypaws',
  titleTemplate: '%s | Crazypaws Global',
  defaultDescription: 'Leading pet supplies contract manufacturer specializing in OEM/ODM and private label pet products. Custom dog harnesses, pet furniture, toys, and more. CA65, RoHS, REACH certified. Low MOQ available.',
  siteUrl: 'https://crazypaws-global.com',
  siteName: 'Crazypaws Global',
  locale: 'en_US',
  type: 'website',

  // Core keywords for homepage
  keywords: [
    // Highest Priority
    'Pet Supplies Contract Manufacturer',
    'Pet Products OEM',
    'Pet Products ODM',
    'OEM ODM Pet Products',
    'Private Label Pet Products',

    // High Priority
    'Custom Dog Harness Manufacturer',
    'Private Label Pet Furniture',
    'Pet Accessories Manufacturer',
    'OEM Pet Bowl and Feeder',

    // Medium Priority
    'Sustainable Pet Product Manufacturer',
    'Eco-Friendly Pet Supplies OEM',
    'Low MOQ Pet Product Manufacturer',
    'CA65 Compliant Pet Product Manufacturer',
    'RoHS Certified Pet Supplies OEM',

    // Additional Long-tail
    'Custom Pet Product Manufacturing',
    'Multi-Material Pet Product Manufacturing',
    'Pet Product Supply Chain Management',
    'Wholesale Pet Products Manufacturer',
    'Pet Product Sourcing Asia',
    'Turnkey Pet Product Solutions',
  ],

  // Organization Schema
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Crazypaws Global',
    url: 'https://crazypaws-global.com',
    logo: 'https://crazypaws-global.com/images/logo.png',
    description: 'Pet Supplies Contract Manufacturer - OEM/ODM Solutions',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TW',
    },
    sameAs: [
      // Add social media links here when available
    ],
  },

  // Product categories for schema
  productCategories: [
    'Pet Furniture',
    'Dog Harnesses & Leashes',
    'Pet Toys',
    'Pet Bowls & Feeders',
    'Pet Grooming Products',
    'Pet Apparel',
    'Pet Care Accessories',
  ],
}

export const getPageMetadata = (
  title?: string,
  description?: string,
  keywords?: string[]
) => {
  return {
    title: title || seoConfig.defaultTitle,
    description: description || seoConfig.defaultDescription,
    keywords: keywords || seoConfig.keywords,
    openGraph: {
      title: title || seoConfig.defaultTitle,
      description: description || seoConfig.defaultDescription,
      url: seoConfig.siteUrl,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      type: seoConfig.type,
    },
    twitter: {
      card: 'summary_large_image',
      title: title || seoConfig.defaultTitle,
      description: description || seoConfig.defaultDescription,
    },
  }
}
