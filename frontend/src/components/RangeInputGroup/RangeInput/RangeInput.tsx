import React from 'react'

import styles from './RangeInput.module.css'
import cn from 'classnames';
import { RangeInputProps } from './RangeInputProps';
import Input from '../../Input/Input';





export default function RangeInput({className, minmax = 0,...props} : RangeInputProps) {
  return (
      <Input value={minmax} className={cn(className, styles.rangeInput)}/>
  )
}
