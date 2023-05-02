import React from 'react';
import { SectionHeader } from "../SectionHeader";
import { Subtext } from "../Subtext";
import Checkmark from "@assets/images/Checkmark_2.svg";
import { List } from "../List";
import { PricingCard } from '../PricingCard';

export const Pricing = () => {
  return (
    <section className="bg-white py-24">
      <div className="container-padded flex flex-col items-center gap-y-12 mx-auto">
          <div className="text-center max-w-3xl">
              <SectionHeader className="mb-4">Pay as you grow</SectionHeader>
              <Subtext>Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</Subtext>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row justify-center">

            <PricingCard 
              plan="Starter"
              description="Great for personal use and for your side projects."
              cost="$49"
              costPer="month"
              benefits={
                <List bulletpoint={Checkmark} className="text-left !font-normal">
                  <List.Item>Individual configuration</List.Item>
                  <List.Item>No setup, monthly, or hidden fees</List.Item>
                  <List.Item>Team size: <span className="font-semibold m-0 p-0">1 developer</span></List.Item>
                  <List.Item>Premium support: <span className="font-semibold m-0 p-0">6 months</span></List.Item>
                  <List.Item>Free updates: <span className="font-semibold m-0 p-0">6 months</span></List.Item>
                </List>
              }
              className="flex-1"
            />
            
            <PricingCard 
              plan="Company"
              description="Best for large scale uses and extended redistribution rights."
              cost="$99"
              costPer="month"
              benefits={
                <List bulletpoint={Checkmark} className="text-left !font-normal">
                  <List.Item>Individual configuration</List.Item>
                  <List.Item>No setup, monthly, or hidden fees</List.Item>
                  <List.Item>Team size: <span className="font-semibold m-0 p-0">10 developers</span></List.Item>
                  <List.Item>Premium support: <span className="font-semibold m-0 p-0">24 months</span></List.Item>
                  <List.Item>Free updates: <span className="font-semibold m-0 p-0">24 months</span></List.Item>
                </List>
              }
              className="flex-1"
            />
            
            <PricingCard 
              plan="Enterprise"
              description="Best for large scale uses and extended redistribution rights."
              cost="$499"
              costPer="month"
              benefits={
                <List bulletpoint={Checkmark} className="text-left !font-normal">
                  <List.Item>Individual configuration</List.Item>
                  <List.Item>No setup, monthly, or hidden fees</List.Item>
                  <List.Item>Team size: <span className="font-semibold m-0 p-0">100+ developers</span></List.Item>
                  <List.Item>Premium support: <span className="font-semibold m-0 p-0">36 months</span></List.Item>
                  <List.Item>Free updates: <span className="font-semibold m-0 p-0">36 months</span></List.Item>
                </List>
              }
              className="flex-1"
            />
            
        </div>
      </div>
    </section>
  )
}
