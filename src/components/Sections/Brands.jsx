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
            <img src={Google} alt="Google logo" />
        </Brand>
        <Brand>
            <img src={Microsoft} alt="Microsoft logo" />
        </Brand>           
        <Brand>
            <img src={Spotify} alt="Spotify logo" />
        </Brand>             
        <Brand>
            <img src={Mailchimp} alt="Mailchimp logo" />
        </Brand>        
        <Brand>
            <img src={Airbnb} alt="Airbnb logo" />
        </Brand>        
        <Brand>
            <img src={Uber} alt="Uber logo" />
        </Brand>  
    </div>
  )
}
