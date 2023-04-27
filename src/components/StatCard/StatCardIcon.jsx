import React from 'react'

export const StatCardIcon = ({children, className = '', ...restProps}) => {
  return (
    <div className={`${className} flex items-center justify-center w-12 h-12 mr-52`} {...restProps}>
        {children}
    </div>
  )
}
