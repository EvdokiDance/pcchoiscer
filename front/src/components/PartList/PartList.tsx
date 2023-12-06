import React, { useState } from 'react'


import {Props} from './Props';
import cn from 'classnames';
import styles from './PartList.module.css'
import Part from '../Part/Part';

export default function PartList({className, parts} : Props) : JSX.Element {

  return (
    <div className={cn(className, styles.partList)}>
        {!!parts && parts.map((part, idx) => (
            <Part key={idx} part={part}/>
        ))}
    </div>
  )
}
