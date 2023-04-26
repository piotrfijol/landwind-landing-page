import React from 'react'

export const List = ({bulletpoint, className = "", children}) => {
  return (
    <ul className={className} style={{'listStyleImage': `url(${bulletpoint})`}}>
        {children}
    </ul>
  )
}
