import React from 'react'

export const NavLink = ({to = "#", children}) => {
  return (
    <li className="bg-white border-gray-200 border-b-2 lg:border-none">
        <a className="block w-full text-base font-medium" href={to} >{children}</a>
    </li>
  )
}
