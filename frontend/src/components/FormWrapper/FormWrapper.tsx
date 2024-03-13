import React from 'react'

import styles from './FormWrapper.module.css';

type TProps = {
    children: JSX.Element | JSX.Element[];
}

export default function FormWrapper({children} : TProps) {
  return (
    <div className={styles.formWrapper}>
        {children}
    </div>
  )
}
