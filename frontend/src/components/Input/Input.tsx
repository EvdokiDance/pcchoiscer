import React from 'react'

import './Input.css';
import cn from 'classnames';
import { InputProps } from './InputProps';



export default function Input({className, register,...props}: InputProps) {
  return (
    <input {...props} {...register} className={cn(className, 'input')}/>
  )
}


