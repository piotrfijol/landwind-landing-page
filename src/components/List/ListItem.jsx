import React from 'react'

export const ListItem = ({className = "", children}) => {
  return (
    <li className={`${className} mb-4 font-medium text-base`}>{children}</li>
    )
}
