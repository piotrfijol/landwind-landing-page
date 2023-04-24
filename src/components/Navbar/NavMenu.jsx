import React from 'react'

export const NavMenu = ({isVisible, children}) => {

    const isHidden = () => isVisible ? "" : "hidden";

  return (                
    <ul className={`${isHidden()} flex-column top-full left-0 text-center absolute 
        w-full lg:static lg:flex lg:flex-row text-md gap-x-8 font-semibold`}
    >
            {children}
    </ul>

  )
}
