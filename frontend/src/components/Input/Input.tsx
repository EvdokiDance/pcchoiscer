import React from 'react'

import './Input.css';
import cn from 'classnames';
import { InputProps } from './InputProps';



export default function Input({className, ...props}: InputProps) {
  return (
    <input {...props} className={cn(className, 'input')}/>
  )
}


