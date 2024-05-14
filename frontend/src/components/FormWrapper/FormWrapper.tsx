import React from 'react'

import styles from './FormWrapper.module.css';
import { Logo } from 'components/Logo/Logo';

type TProps = {
    children: JSX.Element | JSX.Element[];
}



export default function FormWrapper({children} : TProps) {
  return (
    <>
       <div className='flex items-center gap-2'>
        <Logo className="w-[50px] h-[50px]"/>
        <h1 className="text-4xl">Pc Picker</h1>
       </div>
       <div className={styles.formWrapper}>
        {children}
       </div>
    </>
  )
}
