import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Sections/Hero";
import { Brands } from "./components/Sections/Brands";
import { Features } from "./components/Sections/Features";
import { SocialProof } from "./components/Sections/SocialProof";
import { Testimonials } from "./components/Sections/Testimonials";
import { Pricing } from "./components/Sections/Pricing";
import { FAQ } from "./components/Sections/FAQ";

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
    </>
  )
}

export default App
