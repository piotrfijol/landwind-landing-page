import React from 'react'

export const NavBurgerMenu = ({onToggle, className}) => {
  return (
    <div onClick={onToggle} className={`${className} block p-2 rounded-md lg:hidden hover:cursor-pointer hover:bg-gray-100`}>
        <svg height="32" width="32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z"/>
        </svg>
    </div>
  )
}
