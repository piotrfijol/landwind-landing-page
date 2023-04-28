import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Sections/Hero";
import { Brands } from "./components/Sections/Brands";
import { Features } from "./components/Sections/Features";
import { SocialProof } from "./components/Sections/SocialProof";
import { Testimonials } from "./components/Sections/Testimonials";
import { Pricing } from "./components/Sections/Pricing";
import { FAQ } from "./components/Sections/FAQ";
import { CTA } from "./components/Sections/CTA";
import { Footer } from "./components/Sections/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <SocialProof />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}

export default App
