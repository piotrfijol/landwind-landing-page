import React from 'react'

export const StatCardDescription = ({children, className = '', ...restProps}) => {
  return (
    <p className={`${className} mt-2 text-base text-gray-500 font-normal leading-normal`} {...restProps}>
        {children}
    </p>
  )
}
