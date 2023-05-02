import React from 'react'
import { Subtext } from "../Subtext";
import { Card } from "flowbite-react";

export const PricingCard = ({className = "", plan, description, cost, costPer, benefits}) => {
  return (
    <Card className={`${className} p-2 text-center max-w-sm lg:max-w-none`}>
      <h3 className='text-2xl font-semibold'>
        {plan}
      </h3>
      <Subtext className="!text-lg pb-4">{description}</Subtext>
      <div className="mx-auto mb-4 flex items-baseline text-gray-900 dark:text-white">
        <span className="text-5xl font-extrabold tracking-tight">
          {cost}
        </span>
        <span className="ml-2.5 text-lg font-normal text-gray-500 dark:text-gray-400">
          /{costPer}
        </span>
      </div>
      { benefits }
    <button
      type="button"
      className="mt-auto w-full justify-center rounded-lg bg-purple-600 0 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
    >
      Get started
    </button>
    </Card>
  )
}