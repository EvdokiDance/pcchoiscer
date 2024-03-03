import { useDispatch } from 'react-redux';
import styles from './PageSavedBuild.module.css';
import { setHeaderName } from '../../store/reducers/headerReducer';
import {useEffect, useState} from 'react'

import { TSavedBuild } from '../../api/typesApi';
import { getBuildById } from '../../api/api';
import { useParams } from 'react-router-dom';
import { PartType } from '../../components/Part/Props';
import BuildContainerMemo from '../../components/BuildList/BuildContainer/BuildContainer';

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
      {savedBuild && Object.keys(savedBuild).length > 0 ? savedBuild.build.map((buildItem) => buildItem.components.length > 0 && (
        <BuildContainerMemo className={styles.buildContain}  buildItem={buildItem}/>
      )) : <div>Сборок нету</div>}
    </div>
  )
}
