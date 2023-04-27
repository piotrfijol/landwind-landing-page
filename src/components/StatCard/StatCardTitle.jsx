import React from 'react'

export const StatCardTitle = ({ children, className='', ...restProps }) => {
  return (
    <span className={`${className} block leading-tight text-2xl font-bold mt-4`} {...restProps}>
        {children}
    </span>
  )
}
