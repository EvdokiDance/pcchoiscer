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

export default function PageSavedBuild() {


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
            <div className={cn(styles.buildWrapper)}>
          {savedBuild && Object.keys(savedBuild).length > 0 ? (<>
            <div className='flex flex-col items-center mb-5'>
              <div className={styles.date}>Дата создания: {dateTransform(savedBuild.date)}</div>
              <div className={styles.fullPrice}>Полная цена: {currencyToRub(savedBuild.fullPrice)}</div>
            </div>
            <ul className={styles.itemList}>
              {savedBuild.build.map((buildItem, index) => <BuildContainer key={index} className={cn(styles.buildContain)} buildItem={buildItem}/>)}
            </ul>
          </>) : <div>Сборок нету</div>}
        </div>
        </>}
      </Container>
    </>
  )
}
