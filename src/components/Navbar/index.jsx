import React, { useState } from 'react'
import { NavBurgerMenu } from "./NavBurgerMenu";
import { NavLink } from './NavLink';
import { NavMenu } from './NavMenu';
import { Button } from '../Button';

export const Navbar = () => {
    const [visible, setVisible] = useState(false);

  return (
    <nav className="py-6 px-3 relative">
        <div className="container flex w-full items-center justify-center gap-8 mx-auto">
            <div className="flex items-center gap-3 order-first">
                <img className="block" src="/logo.svg" alt="" />
                <span className="font-semibold text-2xl">Landwind</span>
            </div>
            <div className="nav-links order-2 lg:order-1">
                <NavBurgerMenu onToggle={() => setVisible(!visible)} isCollapsed={false}/>
                <NavMenu isVisible={visible}>
                    <NavLink href="#">Company</NavLink>
                    <NavLink href="#">Marketplace</NavLink>
                    <NavLink href="#">Features</NavLink>
                    <NavLink href="#">Team</NavLink>
                    <NavLink href="#">Contact</NavLink>
                </NavMenu>
            </div>
            <div className="ml-auto order-1 lg:order-2">
                <a className="font-semibold text-sm" href="#">Log In</a>
                
                <Button className="ml-3 px-3 py-2 bg-violet-600 hover:bg-violet-800 text-white">Get started</Button>
            </div>
        </div>
    </nav>
  )
}
