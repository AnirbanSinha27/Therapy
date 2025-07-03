// app/page.tsx
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import FAQ from '@/app/components/FAQ';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}