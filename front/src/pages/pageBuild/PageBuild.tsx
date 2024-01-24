


import { Button, LinkTag } from '../../components';
import { useState } from 'react';
import styles from './PageBuild.module.css';
import BuildList from '../../components/BuildList/BuildList';

import RestartAltIcon from '@mui/icons-material/RestartAlt';

function PageBuild()  {



  let localeBuild = JSON.parse(localStorage.getItem('build') || JSON.stringify(''));

  
  
  const [storageBuild, setStorageBuild] = useState(localeBuild);


  const handleDeleteItem = (category : string, id : number) => {
    const build = {
      ...storageBuild,
      [category] : storageBuild[category].filter((_ : any, idx : number) => {

        console.log(idx);
        
        return idx !== id}
        )
    }
    console.log(build);
    setStorageBuild(build);
    localStorage.setItem('build', JSON.stringify(build));
  }


  const handleClearBuild = () => {
    setStorageBuild('');
    localStorage.clear()
  }


  return (
    <>  
    <article className={styles.parts}>
      <article className={styles.partsWrapper}>
        <h4 className={styles.headerComponent}>Компонент</h4>
        <section className={styles.headerChoice}>Выбор</section>
        <section className={styles.headerPrice}>Цена</section>
       <div onClick={handleClearBuild} className={styles.restart}><RestartAltIcon sx={{fontSize: 40, cursor: 'pointer'}}/></div>
      </article>
     <BuildList dataBuild={storageBuild} handleDeleteItem={handleDeleteItem}/>
    </article>
    </>
  );
}

export default PageBuild;
