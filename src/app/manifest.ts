import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Crazypaws Global - Pet Supplies Contract Manufacturer',
    short_name: 'Crazypaws',
    description: 'Leading pet supplies contract manufacturer specializing in OEM/ODM and private label pet products',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
