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


export default function PageSavedBuild() {


  const [savedBuild, setSavedBuild] = useState<TSavedBuild>(null)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(setHeaderName('Конфигурация ПК'));
  }, [])



  const {id} = useParams();



  useEffect(() => {


    getBuildById(id).then((build) => setSavedBuild(build));
    

  }, [])








  return (
    <div className={styles.buildWrapper}>
      {savedBuild && Object.keys(savedBuild).length > 0 ? (<>
        <div className={styles.date}>Дата создания: {dateTransform(savedBuild.date)}</div>
        <div className={styles.fullPrice}>Полная цена: {currencyToRub(savedBuild.fullPrice)}</div>
        <ul className={styles.itemList}>
          {savedBuild.build.map((buildItem, index) => <BuildContainer key={index} className={styles.buildContain} buildItem={buildItem}/>)}
        </ul>
      </>) : <div>Сборок нету</div>}
    </div>
  )
}
