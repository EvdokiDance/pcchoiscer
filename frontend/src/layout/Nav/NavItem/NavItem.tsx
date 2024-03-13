import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

import styles from './NavItem.module.css';
import cn from 'classnames'

type PNavItem = {
    
} & LinkProps

export default function NavItem({to, children, className, ...props} : PNavItem) {
  return (
    <Link {...props} to={to} className={cn(styles.navItem, className)}>{children}</Link>
  )
}
