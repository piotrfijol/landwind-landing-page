import React from 'react'
import { Subheader } from "../Subheader";
import { Subtext } from "../Subtext";
import CartIcon from "@assets/images/stat/cart.svg";
import GlobeIcon from "@assets/images/stat/globe.svg";
import PeopleIcon from "@assets/images/stat/people.svg";
import ServersIcon from "@assets/images/stat/servers.svg";
import { StatCard } from '../StatCard';

export const SocialProof = () => {
  return (
    <div className="bg-white py-24">
        <div className="container mx-auto flex flex-col lg:flex-row gap-y-24 gap-x-24">
            
            {/* Left content */}
            <div className="py-5">
                <span className="leading-none text-lg font-medium text-purple-600">Trusted Worldwide</span>
                <Subheader className="mb-4 mt-3">Trusted by over 600 million users and 10,000 teams</Subheader>
                <Subtext>Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</Subtext>

                <div className="pt-6 mt-6 border-t border-gray-200">
                    <a href="#" className="block leading-none text-base font-medium text-purple-600 ">Explore Legality Guide</a>
                    <a href="#" className="block leading-none text-base font-medium text-purple-600 mt-4">Visit the Trust Center</a>
                </div>
            </div>

            {/* Right content */}
            <div className="flex flex-col gap-y-9">
                <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">

                    <StatCard className="flex-1">
                        <StatCard.Icon className="max-md:mx-auto">
                            <img src={ServersIcon} />
                        </StatCard.Icon>
                        <StatCard.Title>99.99% uptime</StatCard.Title>
                        <StatCard.Description>for Flowbite, with zero maintenance downtime</StatCard.Description>
                    </StatCard>

                    <StatCard className="flex-1">
                        <StatCard.Icon className="max-md:mx-auto">
                            <img src={PeopleIcon} />
                        </StatCard.Icon>
                        <StatCard.Title>600M+ Users</StatCard.Title>
                        <StatCard.Description>trusted by over 600 milion users around the world</StatCard.Description>
                    </StatCard>

                </div>    

                <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">

                    <StatCard className="flex-1">
                        <StatCard.Icon className="max-md:mx-auto">
                            <img src={CartIcon} />
                        </StatCard.Icon>
                        <StatCard.Title>Millions</StatCard.Title>
                        <StatCard.Description>of transactions per day</StatCard.Description>
                    </StatCard>

                    <StatCard className="flex-1">
                        <StatCard.Icon className="max-md:mx-auto">
                            <img src={GlobeIcon} />
                        </StatCard.Icon>
                        <StatCard.Title>100+ countries</StatCard.Title>
                        <StatCard.Description>have used Flowbite to create functional websites</StatCard.Description>
                    </StatCard>

                </div>    
                
            </div>
        </div>
    </div>
  )
}
