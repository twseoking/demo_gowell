import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ProductCategories from '@/components/ProductCategories'
import Capabilities from '@/components/Capabilities'
import Certifications from '@/components/Certifications'
import TargetCustomers from '@/components/TargetCustomers'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Main H1 with Core Keywords */}
      <Hero />

      {/* Core Services - OEM/ODM/Private Label */}
      <Services />

      {/* Product Categories - 9 Major Categories */}
      <ProductCategories />

      {/* Manufacturing Capabilities - Multi-material, Sustainable */}
      <Capabilities />

      {/* Certifications - CA65, RoHS, REACH */}
      <Certifications />

      {/* Target Customers - B2B Buyer Segments */}
      <TargetCustomers />

      {/* Call to Action */}
      <CTA />
    </main>
  )
}
