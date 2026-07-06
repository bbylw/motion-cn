import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Showcase from '@/components/Showcase'
import CodeSection from '@/components/CodeSection'
import Platforms from '@/components/Platforms'
import GridLayout from '@/components/GridLayout'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <GridLayout />
      <Features />
      <Showcase />
      <CodeSection />
      <Platforms />
      <CTA />
      <Footer />
    </main>
  )
}
