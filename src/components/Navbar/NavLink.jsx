import React from 'react'

export const NavLink = ({to = "#", children}) => {
  return (
    <li className=" border-gray-200 border-b-2 lg:border-none">
        <a className="block w-full py-3" href={to} >{children}</a>
    </li>
  )
}