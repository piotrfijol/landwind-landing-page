import React from 'react'

export const ListItem = ({bulletpoint, className = "", children}) => {

  return (
    <li 
      className={`${className} flex gap-x-2.5 py-0.5 mb-4 font-medium text-base leading-normal`}>
       {bulletpoint ?
        <img src={bulletpoint} aria-hidden="true" />
        : null}
        {children}
    </li>
  )
}
