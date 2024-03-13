import React from 'react'



import styles from './ErrorMessage.module.css';


type PErrorMessage = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>


export default function ErrorMessage({children, ...props} : PErrorMessage) {
  return (
    <div className={styles.error} {...props}>{children}</div>
  )
}
