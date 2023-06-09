import React from 'react'

export const SectionHeader = ({className = "", children}) => {
  return (
    <h2 className={`${className} leading-tight tracking-[-0.01em] text-4xl font-extrabold`}>{children}</h2>
  )
}
