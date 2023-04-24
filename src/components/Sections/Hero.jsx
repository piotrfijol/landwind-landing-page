import React from 'react'
import HeroImage from "@assets/images/marketing-strategy.png";
import { Button } from "@components/Button";
import { Subtext } from "@components/Subtext";

export const Hero = () => {
  return (
    <div class="my-16 flex flex-row gap-x-24 items-center container mx-auto">
        <div class="py-16">
            <h1 class="leading-none text-gray-900 font-extrabold text-6xl">Building digital products & brands.</h1>
            <Subtext className="my-6">Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</Subtext>
            <div class="flex gap-4 my-10">
                <Button className="py-3 px-5 bg-violet-600 hover:bg-violet-800 text-white">Start 30 day free trial</Button>
                <Button className="py-3 px-5 bg-white text-black border border-gray-200">Pricing & FAQ</Button>
            </div>
        </div>
        <div class="hidden md:block">
            <img src={HeroImage} alt="" />
        </div>
    </div>
  )
}
