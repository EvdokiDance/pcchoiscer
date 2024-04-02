


import { Button, LinkTag } from '../../components';
import { useEffect, useState } from 'react';
import styles from './PageBuild.module.css';
import BuildList from '../../components/BuildList/BuildList';

import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useDispatch } from 'react-redux';
import { setHeaderName } from '../../store/reducers/headerReducer';
import { BuildType } from './PageBuildProps';
import { useLocalStorage } from '@uidotdev/usehooks';
import Container from '../../components/Container/Container';
import CheckBox from '../../components/CheckBox/CheckBox';

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
      'isDisabled': false,
      'isHidden': false,
  },
  {
      'category': 'moutherboards',
      'name': 'Материнская плата',
      'components': [],
      'isDisabled': false,
      'isHidden': false,
  },
  {
      'category': 'ram',
      'name': 'Оперативная память',
      'components': [],
      'isDisabled': false,
      'isHidden': false,
  },
  {
      'category': 'ssd',
      'name': 'SSD',
      'components': [],
      'isDisabled': false,
      'isHidden': false,
  },
  {
      'category': 'hdd',
      'name': 'HDD',
      'components': [],
      'isDisabled': false,
      'isHidden': false,
  },
  {
      'category': 'videocards',
      'name': 'Видеокарта',
      'components': [],
      'isDisabled': false,
      'isHidden': false,
  },
  {
      'category': 'cases',
      'name': 'Корпус',
      'components': [],
      'isDisabled': false,
      'isHidden': false,
  },
  {
      'category': 'power',
      'name': 'Блок питания',
      'components': [],
      'isDisabled': false,
      'isHidden': false,
  }
]



const handleIsDisabled = (build : BuildType[]) => {
  

  const recur = (buildItem : BuildType, index : number) => {

      

        if (index === build.length) {
              return;
        }

        if (buildItem.category === 'ssd' && buildItem.components.length === 0) {
              return recur(build[index+1], index+1);
        } else if (buildItem.category === 'ssd' && buildItem.components.length > 0) {

              build[index].isDisabled = false;
              build[index+1].isDisabled =false;

             return recur(build[index+2], index+2);
        }

        if (buildItem.category === 'hdd' && buildItem.components.length === 0) {

              build[index-1].isDisabled = false;
              build[index].isDisabled = false;

              return;

        } else if (buildItem.category === 'hdd' && buildItem.components.length > 0) {

              build[index-1].isDisabled = false;
              build[index].isDisabled = false;

              return recur(build[index+1], index+1);
        }




        if (buildItem.components.length === 0) {
            build[index].isDisabled = false;
            build = build.map((buildItem, mapIdx) => {
              if (index < mapIdx) {
                buildItem.isDisabled = true;
              }
              return buildItem;
            }) 
        } else {
              build[index].isDisabled = false;
              return recur(build[index+1], index+1);
        }

  }

  recur(build[0], 0);



  return build;

}


const handleIsHidden = (build : BuildType[]) => {
  const newStorageBuild = build.map((buildItem) => {
        if (buildItem.category ===  'processors' || buildItem.category === 'moutherboards' || buildItem.category === 'power' || buildItem.category === 'cases') {
             buildItem.isHidden = buildItem.components.length > 0 ? true : false;
        }
        return buildItem;
  })
  return newStorageBuild;
}




 export default function PageBuild() {

  const localeBuild = useLocalStorage('build', initialBuild);
  const localeStrict = useLocalStorage('strict', true);


  

  const [storageBuild, setStorageBuild] = useState<BuildType[]>(localeBuild[0]);


  const [strict, setStrict] = useState(localeStrict[0]);

  

  useEffect(() => {

  
    

    let newStorageBuild = handleIsHidden(storageBuild);
  
    
    if (strict) {
      newStorageBuild = handleIsDisabled(storageBuild);
    }
    
    localStorage.setItem('build', JSON.stringify(newStorageBuild));
  }, [storageBuild])


  useEffect(() => {

  let newStorageBuild;

    if (strict) {
      newStorageBuild = handleIsDisabled(storageBuild);
   }

   if (!strict) {
      newStorageBuild = storageBuild.map((BuildItem) => {BuildItem.isDisabled = false; return BuildItem});
   }


   setStorageBuild(newStorageBuild);


  }, [strict])



 
  

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(setHeaderName('Сборка'));
  }, [dispatch])



  const handleDeleteItem = (category : string, id : number) => {

    const newStorageBuild = storageBuild.map((buildItem : BuildType, i) => {
      if (buildItem.category === category) {
       buildItem.components = buildItem.components.filter((_, idx) => idx !== id);
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

  const handleCheckBox = (e) => {    
    e.preventDefault()
  
    setStrict(!strict);
    localStorage.setItem('strict', JSON.stringify(!strict));
  }




  return (
    <article className='pb-5'>
          <div className='flex flex-row gap-8 justify-between py-5'>
            <div className='flex flex-row gap-5'>
              <h4 className={styles.headerComponent}>Компонент</h4>
            </div>
            <div className='flex flex-col gap-5 items-center sm:flex-row'>
              <CheckBox onChange={handleCheckBox} checked={strict}  label='Строгая сборка'/>
              <div className='self-end' onClick={handleClearBuild}><RestartAltIcon sx={{fontSize: 40, cursor: 'pointer'}}/></div>
            </div>
          </div>
          <BuildList dataBuild={storageBuild} setStorageBuild={setStorageBuild} initialBuild={initialBuild} handleDeleteItem={handleDeleteItem}/>
    </article>
  );
}

