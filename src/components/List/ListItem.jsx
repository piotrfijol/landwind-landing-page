import React from 'react'

export const ListItem = ({bulletpoint, className = "", children}) => {

  return (
    <li 
      className={`${className} py-0.5 mb-4 font-medium text-base leading-normal`}>
       {bulletpoint ?
        <img src={bulletpoint} style={{maxWidth: "2em"}} className="inline-block mr-2.5" aria-hidden="true" />
        : null}
        {children}
    </li>
  )
}
