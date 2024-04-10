import { useDispatch } from 'react-redux';
import styles from './PageSavedBuild.module.css';
import { setHeaderName } from '../../store/reducers/headerReducer';
import {useEffect, useState} from 'react'

import { TSavedBuild } from '../../api/typesApi';
import { getBuildById } from '../../api/api';
import { useParams } from 'react-router-dom';

import dateTransform from '../../helpers/dateTransform';
import { currencyToRub } from '../../helpers/currencyToRub';
import BuildContainer from '../../components/BuildList/BuildContainer/BuildContainer';
import Container from '../../components/Container/Container';
import cn from 'classnames'
import { Spinner } from '../../components';
import { usePDF, Resolution, Margin } from 'react-to-pdf';
import {ReactComponent as PdfIcon} from '../../images/pdf-icon.svg'


export default function PageSavedBuild() {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  const [savedBuild, setSavedBuild] = useState<TSavedBuild>(null);
  const [spinner, setSpinner] = useState(true);

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(setHeaderName('Конфигурация ПК'));
  }, [])



  const {id} = useParams();



  useEffect(() => {
    
    window.scrollTo(0, 0)
    getBuildById(id).then((build) => setSavedBuild(build)).finally(() => setSpinner(false));
    

  }, [])






  return (
    <>
      <Container>
        {spinner ? <Spinner/> : 
        <>
          <div className={cn(styles.buildWrapper)} ref={targetRef}>
          {savedBuild && Object.keys(savedBuild).length > 0 ? (<>
            <div className='flex items-center justify-center mb-3 gap-2'>
              <PdfIcon onClick={() => toPDF()} className=' cursor-pointer w-10 h-10'/>
              <div className='flex flex-col items-center'>
                <div className={styles.date}>Дата создания: {dateTransform(savedBuild.date)}</div>
                <div className={styles.fullPrice}>Полная цена: {currencyToRub(savedBuild.fullPrice)}</div>
              </div>
            </div>
            <ul className={styles.itemList}>
              {savedBuild.build.map((buildItem, index) => <BuildContainer key={index} className={cn(styles.buildContain)} buildItem={buildItem}/>)}
            </ul>
          </>) : <div>Сборока не найдена</div>}
        </div>
        </>}
      </Container>
    </>
  )
}
