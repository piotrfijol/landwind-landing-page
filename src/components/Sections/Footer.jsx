import React from 'react';
import { Footer as FBFooter } from 'flowbite-react';
import { Github } from "../icons/Github";
import { Facebook } from "../icons/Facebook";
import { Dribbble } from "../icons/Dribbble";
import { Twitter } from "../icons/Twitter";
import Logo from '@assets/images/logo.svg';

export const Footer = () => {
  return (
    <div className="bg-white py-16">
        <div className="container-padded mx-auto">
        <FBFooter className="!shadow-none">
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-5 ">
                    <div>
                        <FBFooter.Title title="Company" />
                        <FBFooter.LinkGroup col={true}>
                        <FBFooter.Link href="#">
                            About
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Premium
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Blog
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Affiliate Program
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Get Coupon
                        </FBFooter.Link>
                        </FBFooter.LinkGroup>
                    </div>
                    <div>
                        <FBFooter.Title title="Help And Support" />
                        <FBFooter.LinkGroup col={true}>
                        <FBFooter.Link href="#">
                            Contact Us
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Knowledge Center
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Premium Support
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Sponsorships
                        </FBFooter.Link>
                        </FBFooter.LinkGroup>
                    </div>
                    <div>
                        <FBFooter.Title title="Learning" />
                        <FBFooter.LinkGroup col={true}>
                        <FBFooter.Link href="#">
                            Learn Hub
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Manuals
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Tutorials
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Communities
                        </FBFooter.Link>
                        </FBFooter.LinkGroup>
                    </div>
                    <div>
                        <FBFooter.Title title="Resources" />
                        <FBFooter.LinkGroup col={true}>
                        <FBFooter.Link href="#">
                            Thirt-Party Tools
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Illustrations
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Themesberg
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Bluehost
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Stock Photos
                        </FBFooter.Link>
                        </FBFooter.LinkGroup>
                    </div>
                    <div>
                        <FBFooter.Title title="Legal" />
                        <FBFooter.LinkGroup col={true}>
                        <FBFooter.Link href="#">
                            Privacy Policy
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            Terms & Conditions
                        </FBFooter.Link>
                        <FBFooter.Link href="#">
                            EULA
                        </FBFooter.Link>
                        </FBFooter.LinkGroup>
                    </div>
                </div>
                
                <div className="flex flex-col items-center gap-y-5 mt-16">

                    <FBFooter.Brand
                        href="#"
                        src={Logo}
                        alt="Landwind Logo"
                        name="Landwind"
                    />
                    <div>
                        <div></div>
                        <FBFooter.Copyright
                            href="#"
                            by="Flowbite, Inc."
                            year={2022}
                            className="!text-base inline"
                        /> 
                        <span className="text-base text-gray-500">All rights reserved.</span>
                    </div>

                    <div className="flex gap-x-5">
                        <div className="w-6 h-6 flex items-center justify-center">
                            <FBFooter.Icon
                                href="#"
                                icon={Github}
                            />
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center">
                            <FBFooter.Icon
                                href="#"
                                icon={Twitter}
                            />
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center">
                            <FBFooter.Icon
                                href="#"
                                icon={Dribbble}
                            />
                        </div>
                        <div className="w-6 h-6 flex items-center justify-center">
                            <FBFooter.Icon
                                href="#"
                                icon={Facebook}
                            />
                        </div>
                    </div>
                        
                </div>
            </div>
            </FBFooter>

        </div>
    </div>
  )
}
