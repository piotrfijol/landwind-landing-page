import React from 'react'
import { ListItem } from './ListItem'

const List = ({bulletpoint, className = "", children}) => {
  return (
    <ul className={className}>
      {
        bulletpoint ? (
        React.Children.map(children, (child) => {
          
          if(child.type.name === "ListItem") {
            return React.cloneElement(child, {
              bulletpoint,
              ...child.props
            })
          }
        }))
        : children
      }
    </ul>
  )
}

List.Item = ListItem;

export {
  List
};