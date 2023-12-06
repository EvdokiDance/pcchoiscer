import React from 'react'

import './Input.css';
import cn from 'classnames';
import { InputProps } from './InputProps';



export default function Input({className}: InputProps) {
  return (
    <input className={cn(className, 'input')}/>
  )
}
