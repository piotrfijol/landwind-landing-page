import React from 'react'

export const Button = ({className, children}) => {
  return (
    <button type="button" className={`${className} text-sm rounded-lg`}>{children}</button> 
  )
}
