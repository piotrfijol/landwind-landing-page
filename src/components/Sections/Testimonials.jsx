import React from 'react';
import QuoteIcon from "@assets/images/Quote.svg";
import AvatarImage from "@assets/images/avatar.png";

export const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-24">
        <div className="container mx-auto flex flex-col items-center gap-y-6">
            <img src={ QuoteIcon } className="w-12"/>
            <blockquote>
                <p className="max-w-3xl text-center leading-relaxed text-2xl font-semibold">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                <div className="flex gap-x-3.5 justify-center mt-6">
                    <img src={AvatarImage} className='w-6 h-6 bg-black rounded-full' />
                    <div>
                        <span className="leading-tight font-semibold">Micheal Gough</span>
                        <span className="font-semibold leading-tight mx-3">/</span>
                        <span className="leading-tight text-sm font-normal text-gray-500">CEO at Google</span>
                    </div>
                </div>
            </blockquote>
        </div>
    </div>
  )
}
