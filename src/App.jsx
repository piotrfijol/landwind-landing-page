import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Sections/Hero";
import { Brands } from "./components/Sections/Brands";
import { Features } from "./components/Sections/Features";
import { SocialProof } from "./components/Sections/SocialProof";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <SocialProof />
    </>
  )
}

export default App
