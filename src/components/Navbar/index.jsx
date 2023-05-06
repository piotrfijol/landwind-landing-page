import React, { useState } from 'react'
import { NavBurgerMenu } from "./NavBurgerMenu";
import { NavLink } from './NavLink';
import { NavMenu } from './NavMenu';
import { Button } from '../Button';
import Logo from '@assets/images/logo.svg';

export const Navbar = () => {
    const [visible, setVisible] = useState(false);

  return (
    <header className="py-6 px-3 relative">
        <div className="container-padded flex w-full items-center justify-center gap-8 mx-auto">
            <a className="font-semibold text-2xl flex items-center gap-x-3 order-first">
                <img className="block" src={Logo} alt="logo" />
                Landwind
            </a>
            <nav className="nav-links order-2 lg:order-1">
                <NavBurgerMenu onToggle={() => setVisible(!visible)} isCollapsed={false}/>
                <NavMenu isVisible={visible}>
                    <NavLink href="#">Company</NavLink>
                    <NavLink href="#">Marketplace</NavLink>
                    <NavLink href="#">Features</NavLink>
                    <NavLink href="#">Team</NavLink>
                    <NavLink href="#">Contact</NavLink>
                    <NavLink className="block sm:hidden" href="#">Log in</NavLink>
                    <NavLink className="block sm:hidden" href="#">Get started</NavLink>
                </NavMenu>
            </nav>
            <div className="ml-auto order-1 lg:order-2">
                <a className="font-semibold text-sm  hidden sm:inline" href="#">Log In</a>
                
                <Button className="ml-3 px-3 py-2 text-sm leading-normal bg-violet-600 hover:bg-purple-500 text-white hidden sm:inline">Get started</Button>
            </div>
        </div>
    </header>
  )
}
