
import { useUIDSeed } from 'react-uid';

import {Props} from './Props';
import cn from 'classnames';
import styles from './PartList.module.css'
import PartItem from '../Part/Part';
import ErrorIcon from '@mui/icons-material/Error';

import { useParams } from 'react-router-dom';


export default function PartList({className, parts} : Props) : JSX.Element {



  console.log('PartList', parts);
  
    


  const seed = useUIDSeed();







  const partsList = parts.length > 0 ? parts.map((part, index) => <PartItem key={seed(part)} part={part}/>) 
    : (
    <div className={styles.empty}>
      Не найдено
    <ErrorIcon className={styles.errorIcon} sx={{fontSize: 150}}/>
    </div>)

  return (
    <div className={cn(className, styles.partList)}>
        {partsList}
    </div>
  )
}

