import React from 'react'
import { Link, NavLink, NavLinkProps } from 'react-router-dom'

import styles from './NavItem.module.css';
import cn from 'classnames'

type PNavItem = {
    
} & NavLinkProps

export default function NavItem({to, children, className, ...props} : PNavItem) {
  return (
    <NavLink   style={({isActive}) => { return {color: isActive ? "#884bc5" : ""}}} {...props} to={to} className={cn(styles.navItem, className)}>{children}</NavLink>
  )
}
