import React, { useState } from 'react'


import {Props} from './Props';
import cn from 'classnames';
import styles from './Part.module.css'
import LinkTag from '../LinkTag/LinkTag';

export default function Part({className, part} : Props) : JSX.Element {



  let features = !!part.features ? Object.entries(part.features).map((feature, idx) => (
   <div key={idx}>{feature[0]+' : '+feature[1]}</div>
  )) : <div>None</div>;


   

  return (
            <div className={cn(className, styles.part)}>
                <div className={styles.partTable}>
                   <p className={styles.partName}>Имя</p>
                   <p className={styles.partPrice}>Цена</p>
                   <p className={styles.partLink}>Ссылка</p>
                </div>
                <div className={styles.partTable}>
                   <img className={styles.partImg} src= {part.img} alt=''/>

                   <div className={styles.features}>
                   <div className={styles.specName}>{part.name}</div>
                      {features}
                   </div>
                    <div className={styles.partPrice}>{part.price}</div>
                    <LinkTag className={styles.partLink} path={part.link}>выбрать</LinkTag>
                </div>
            </div>
  )
}
