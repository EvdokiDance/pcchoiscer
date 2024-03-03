import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setHeaderName } from '../../store/reducers/headerReducer'
import { getSavedBuilds } from '../../api/api'
import { TSavedBuild } from '../../api/typesApi'
import { SavedBuild } from './SavedBuild/SavedBuild'

import styles from './PageSavedBuilds.module.css';
import { Link } from 'react-router-dom'


export default function PageSavedBuilds() {

  const [builds, setBuilds] = useState<TSavedBuild[] | []>([]);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHeaderName('Мои сборки'));
  }, [])




  useEffect(() => {

    getSavedBuilds().then((builds) => setBuilds(builds));
    

  }, [])




  return (
    <div className={styles.buildWrapper}>
      {builds.length > 0 ? builds.map((savedBuild : TSavedBuild, index) => (
        <div className={styles.buildItem}>
          <div className={styles.buildItemTitle} key={index}>Сборка #{index+1}</div>
          <Link className={styles.link} to={`${savedBuild.id}`}><SavedBuild savedBuild={savedBuild}/></Link>
        </div>
      )) : <div>Сборок нету</div>}
    </div>
  )
}
