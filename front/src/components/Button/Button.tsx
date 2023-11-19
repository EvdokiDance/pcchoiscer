import React from 'react'

import cn from 'classnames';
import styles from './Button.module.css';

type Props = {
  className?: string; 
  children?: string | JSX.Element;
}


export default function Button({children, className} : Props) : JSX.Element {
  return (
    <button className={cn(className, styles.btn)}>{children}</button>
  )
}
