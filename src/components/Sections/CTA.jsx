import React from 'react'
import { Subheader } from '../Subheader'
import { Subtext } from '../Subtext'
import { Button } from '../Button'

export const CTA = () => {
  return (
    <div className="bg-gray-50 py-24">
        <div className="container-padded mx-auto flex flex-col gap-y-6 text-center">
            <Subheader>Start your free trial today</Subheader>
            <Subtext>Try Flowbite Platform for 30 days. No credit card required.</Subtext>
            <div>
                <Button className="py-3 px-5 text-base font-medium bg-violet-600 hover:bg-violet-800 text-white">Free trial for 30 days</Button>
            </div>
        </div>
    </div>
    )
}
