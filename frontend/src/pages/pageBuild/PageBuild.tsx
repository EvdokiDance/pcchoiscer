


import { Button, LinkTag } from '../../components';
import { useEffect, useState } from 'react';
import styles from './PageBuild.module.css';
import BuildList from '../../components/BuildList/BuildList';

import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useDispatch } from 'react-redux';
import { setHeaderName } from '../../store/reducers/headerReducer';
import { initial } from 'lodash';
import { BuildType } from './PageBuildProps';
import { useLocalStorage } from '@uidotdev/usehooks';

export const initialBuild : BuildType[] = [
  {
      'category': 'processors',
      'name': 'Процессор',
      'components': [],
      'isDisabled': false,
      'isHidden': false,
  },
  {
      'category': 'coolers',
      'name': 'Кулер',
      'components': [],
      'isDisabled': true,
      'isHidden': false,
  },
  {
      'category': 'moutherboards',
      'name': 'Материнская плата',
      'components': [],
      'isDisabled': true,
      'isHidden': false,
  },
  {
      'category': 'ram',
      'name': 'Оперативная память',
      'components': [],
      'isDisabled': true,
      'isHidden': false,
  },
  {
      'category': 'ssd',
      'name': 'SSD',
      'components': [],
      'isDisabled': true,
      'isHidden': false,
  },
  {
      'category': 'hdd',
      'name': 'HDD',
      'components': [],
      'isDisabled': true,
      'isHidden': false,
  },
  {
      'category': 'videocards',
      'name': 'Видеокарта',
      'components': [],
      'isDisabled': true,
      'isHidden': false,
  },
  {
      'category': 'cases',
      'name': 'Корпус',
      'components': [],
      'isDisabled': true,
      'isHidden': false,
  },
  {
      'category': 'power',
      'name': 'Блок питания',
      'components': [],
      'isDisabled': true,
      'isHidden': false,
  }
]


function PageBuild()  {

  const localeBuild = useLocalStorage('build', initialBuild)

  


  const [storageBuild, setStorageBuild] = useState<BuildType[]>(localeBuild[0]);


 
  

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(setHeaderName('Сборка'));
  }, [dispatch])




  const handleDeleteItem = (category : string, id : number) => {

    const newStorageBuild = storageBuild.map((buildItem : BuildType, i) => {
      if (buildItem.category === category) {
       buildItem.components = buildItem.components.filter((_, idx) => idx !== id);
       buildItem.isHidden = false;


        if (buildItem.category === 'ssd' || buildItem.category === 'hdd') {
          
          if (storageBuild[4].components.length > 0 || storageBuild[5].components.length > 0) {
            storageBuild[4].isDisabled = false;
            storageBuild[5].isDisabled = false;
          } else {
            i = 5;
            storageBuild.map((buildItem : BuildType, j) => {
              if (j > i) {
                console.log(j);
                
                buildItem.isDisabled = true;
              }
            })
  
          }

          
        } else if (buildItem.components.length === 0)  {

          storageBuild.map((buildItem : BuildType, j) => {


            if (j > i) {
    
              console.log(i);
              
    
              buildItem.isDisabled = true;
            }
    
          })
       }

      }
      return buildItem;
    })

    setStorageBuild(newStorageBuild);
    localStorage.setItem('build', JSON.stringify(newStorageBuild));
    

  }






  const handleClearBuild = () => {
    setStorageBuild(initialBuild);
    localStorage.setItem('build', JSON.stringify(initialBuild));
  }


  return (
    <article className={styles.parts}>
      <article className={styles.partsWrapper}>
        <h4 className={styles.headerComponent}>Компонент</h4>
        <section className={styles.headerChoice}>Выбор</section>
       <div onClick={handleClearBuild} className={styles.restart}><RestartAltIcon sx={{fontSize: 40, cursor: 'pointer'}}/></div>
      </article>
     <BuildList dataBuild={storageBuild} setStorageBuild={setStorageBuild} initialBuild={initialBuild} handleDeleteItem={handleDeleteItem}/>
    </article>
  );
}

export default PageBuild;
