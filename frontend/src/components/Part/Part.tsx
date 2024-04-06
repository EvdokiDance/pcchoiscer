import {Props} from './Props';
import cn from 'classnames';
import styles from './Part.module.css'
import LinkTag from '../LinkTag/LinkTag';
import Button from '../Button/Button'


import { useNavigate, useParams } from 'react-router-dom';
import { currencyToRub } from '../../helpers/currencyToRub';
import { BuildType } from '../../pages/pageBuild/PageBuildProps';



export default function Part({className, part} : Props) : JSX.Element {


   

  let features = !!part.features ? Object.entries(part.features).map((feature, idx) => (
   <div key={idx}>{feature[0]+' : '+feature[1]}</div>
  )) : <></>;




  const navigate = useNavigate();
  
  const {hardware = ''} = useParams();
  
  
 
  

  
  const addBuildComponent = () => {

        
        let localeBuild : BuildType[] = JSON.parse(localStorage.getItem('build'));

        const newComponent = {...part};

            let newLocaleBuild = localeBuild.map((buildItem, index) => {
                  if (buildItem.category === hardware) {
                        buildItem.components.push(newComponent);
                  }
                  return buildItem;
            })

                  // newLocaleBuild = handleIsDisabled(newLocaleBuild);
                  localStorage.setItem('build', JSON.stringify(newLocaleBuild));


                  
                  
            navigate('/build');
            return;  

      }


   
   
  return (
            <article className={cn(className, styles.part, 'py-5')}>
                  <div className={cn(styles.partImgContainer, 'flex justify-center')}>
                       <div>
                              <img className={styles.partImg} src= {part.img} alt=''/>
                       </div>
                  </div>
                  <div className={styles.partName}>{part.name}</div>
                  <div className={styles.partFeatures}>{features}</div>
                  <div className={cn(styles.partPrice, 'flex justify-center md:justify-self-end')}>Цена: {currencyToRub(part.price)}</div>
                  <div className={cn(styles.actions, 'flex flex-wrap gap-4 shrink-0 items-center justify-center content-between sm:justify-end')}>
                        <Button onClick={addBuildComponent} className={cn(styles.btnAdd, 'w-36 shrink-0')}>Добавить</Button>
                        <LinkTag to={part.link} className='w-8 h-8 shrink-0' target='_blank' type='yandex'/>  
                  </div>
            </article>
  )
}
