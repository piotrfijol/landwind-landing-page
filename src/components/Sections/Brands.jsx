import React from 'react'
import Airbnb from "@assets/images/Airbnb.svg";
import Google from "@assets/images/Google.svg";
import Mailchimp from "@assets/images/Mailchimp.svg";
import Microsoft from "@assets/images/Microsoft.svg";
import Spotify from "@assets/images/Spotify.svg";
import Uber from "@assets/images/Uber.svg";
import { Brand } from '../Brand/brand';

export const Brands = () => {
  return (
    <div className="container mx-auto grid items-center gap-x-16 gap-y-6 lg:flex lg:justify-between grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mb-24 w-full">
        <Brand>
            <img src={Google} alt="" srcset="" />
        </Brand>
        <Brand>
            <img src={Microsoft} alt="" />
        </Brand>           
        <Brand>
            <img src={Spotify} alt="" />
        </Brand>             
        <Brand>
            <img src={Mailchimp} alt="" />
        </Brand>        
        <Brand>
            <img src={Airbnb} alt="" />
        </Brand>        
        <Brand>
            <img src={Uber} alt="" />
        </Brand>  
    </div>
  )
}
