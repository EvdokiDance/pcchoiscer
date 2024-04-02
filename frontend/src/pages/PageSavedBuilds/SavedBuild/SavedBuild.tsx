import { Props } from './SavedBuildProps'
import styles from './SaveBuild.module.css'

import { currencyToRub } from '../../../helpers/currencyToRub';
import dateTransform from '../../../helpers/dateTransform';
export function SavedBuild({savedBuild} : Props) {

  const { build, date } = savedBuild;



  const caseImg = build.filter((buildItem) => buildItem.category === 'cases').map((cases) => cases.components[0].img)[0];



  const totalPrice = currencyToRub(savedBuild.fullPrice);
  



  return (
    <div className={styles.buildItem}>
        <img className={styles.preview} alt='' src={caseImg}/>
        <div className={styles.info}>
          <div>{totalPrice}</div>
          <div>{dateTransform(date)}</div>
        </div>
    </div>
  )
}
