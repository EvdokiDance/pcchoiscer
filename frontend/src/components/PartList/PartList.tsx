
import { useUIDSeed } from 'react-uid';

import {Props} from './Props';
import cn from 'classnames';
import styles from './PartList.module.css'
import PartItem from '../Part/Part';
import ErrorIcon from '@mui/icons-material/Error';


import { useAppSelector } from '../../hooks/useRedux';


export default function PartList({className, ...props} : Props) : JSX.Element {


  const partsPerPage = useAppSelector((state) => state.partsData.partsPerPage)


  const seed = useUIDSeed();

  const partsList = partsPerPage.length > 0 ? partsPerPage.map((part, index) => <PartItem className='' key={seed(part)} part={part}/>) 
    : (
    <div className={styles.empty}>
      Не найдено
    <ErrorIcon className={styles.errorIcon} sx={{fontSize: 150}}/>
    </div>)

  return (
    <div {...props} className={cn(className, 'grid gap-5')}>
        {partsList}
    </div>
  )
}

