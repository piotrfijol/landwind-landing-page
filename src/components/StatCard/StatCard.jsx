import React from 'react'

export const StatCard = ({ className = "", children }) => {
  return (
    <div className={`${className} text-base`}>
        { children }
    </div>
  )
}
