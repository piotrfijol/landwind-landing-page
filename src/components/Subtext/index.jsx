import React from 'react'

export const Subtext = ({className = "", children}) => {
  return (
    <p className={`${className} text-gray-500 font-normal text-xl`}>
        {children}
    </p>
  )
}
