import React from 'react'
import { Props } from './SavedBuildProps'
import styles from './SaveBuild.module.css'

import { currencyToRub } from '../../../helpers/currencyToRub';
import dateTransform from '../../../helpers/dateTransform';
export function SavedBuild({savedBuild} : Props) {


  const caseImg = savedBuild.build.filter((buildItem) => buildItem.category === 'cases').map((cases) => cases.components[0].img)[0];

  const creation_time = new Date(savedBuild.date);

  const totalPrice = currencyToRub(savedBuild.fullPrice);
  



  return (
    <div className={styles.buildItem}>
        <img className={styles.preview} alt='' src={caseImg}/>
        <div className={styles.info}>
          <div>{totalPrice}</div>
          <div>{dateTransform(creation_time)}</div>
        </div>
    </div>
  )
}
