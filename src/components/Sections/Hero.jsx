import React from 'react'
import HeroImage from "@assets/images/marketing-strategy.png";
import { Button } from "@components/Button";
import { Subtext } from "@components/Subtext";

export const Hero = () => {
  return (
    <section className="my-16 flex gap-x-3 flex-row items-center leading-none container-padded mx-auto">
        <div className="py-16 flex-1">
          <h1 className="leading-none font-black text-6xl">Building digital products & brands.</h1>
          <Subtext className="my-6">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</Subtext>
          <div className="mt-10">
              <Button className="py-3 px-5 mr-4 text-base font-medium bg-violet-600 hover:bg-purple-500 text-white">Start 30 day free trial</Button>
              <Button className="py-3 px-5 text-base font-medium bg-white hover:bg-slate-50 text-black border border-gray-200">Pricing & FAQ</Button>
          </div>
        </div>
        <div className="hidden md:block flex-1 lg:flex-none">
            <img src={HeroImage} alt="Marketing strategy"/>
        </div>
    </section>
  )
}
