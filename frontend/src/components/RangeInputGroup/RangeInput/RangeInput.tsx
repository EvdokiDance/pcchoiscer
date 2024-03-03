import React from 'react'

import styles from './RangeInput.module.css'
import cn from 'classnames';
import { RangeInputProps } from './RangeInputProps';
import Input from '../../Input/Input';
import { useSelector } from 'react-redux';





export default function RangeInput({className, minmax, handleOnChange, ...props} : RangeInputProps) {


  return (
      <Input {...props} value={minmax}  onChange={handleOnChange} maxLength={10} className={cn(className, styles.rangeInput)}/>
  )
}
