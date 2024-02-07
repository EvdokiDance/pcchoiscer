import React from 'react'

import styles from './RangeInputGroup.module.css'
import cn from 'classnames';
import { RangeInputGroupProps } from './RangeInputGroupProps';

import RangeInput from './RangeInput/RangeInput';




export default function RangeInputGroup({className, min, max,...props} : RangeInputGroupProps) {
  return (
    <div {...props} className={cn(className, styles.wrapper)}>
      <h3 className={styles.header}>ЦЕНА</h3>
      <article className={styles.inputWrapper}>
        <label className={styles.label}>
          ОТ
          <RangeInput minmax={min}/>
        </label>
        <label className={styles.label}>
          ДО
          <RangeInput minmax={max}/>
        </label>
      </article>
    </div>
  )
}
