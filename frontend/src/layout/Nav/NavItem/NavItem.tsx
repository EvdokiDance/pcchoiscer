import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

import styles from './NavItem.module.css';


type PNavItem = {
    
} & LinkProps

export default function NavItem({to, children, ...props} : PNavItem) {
  return (
    <Link {...props} to={to} className={styles.navItem}>{children}</Link>
  )
}
