import {Props} from './Props';
import cn from 'classnames';
import styles from './Part.module.css'
import LinkTag from '../LinkTag/LinkTag';
import Button from '../Button/Button'

import {useContext} from 'react';
import { BuildContext } from '../../App';
import { useNavigate, useParams } from 'react-router-dom';
import { useUID, useUIDSeed } from 'react-uid';

export default function Part({className, part} : Props) : JSX.Element {


   

  let features = !!part.features ? Object.entries(part.features).map((feature, idx) => (
   <div key={idx}>{feature[0]+' : '+feature[1]}</div>
  )) : <div>None</div>;




      let localeBuild = JSON.parse(localStorage.getItem('build') || JSON.stringify(''));


      
      const navigate = useNavigate();

      const {hardware = ''} = useParams();

      
      
      
      
      
      const addBuildComponent = () => {
            
            const newComponent = {...part};
            console.log(newComponent);
            

                  for (const key in localeBuild) {

                       if (String(key) === hardware) {
                              localeBuild[key].push(newComponent);
                              localStorage.setItem('build', JSON.stringify(localeBuild));
                              navigate('/build');
                              return;
                       }
                  }  


                  localStorage.setItem('build', JSON.stringify({
                        ...localeBuild,
                        [hardware]:[{...newComponent}]
                  }))

                  navigate('/build');

                  return;  
            

      }


   
   
  return (
            <article className={cn(className, styles.part)}>
                <section className={styles.partTable}>
                     <img className={styles.partImg} src= {part.img} alt=''/>
                     <section className={styles.middle}>
                           <div className={styles.partName}>{part.name}</div>
                           <div className={styles.partFeatures}>{features}</div>
                     </section>
                     <section  className={styles.right}>
                        <div className={styles.partPrice}>{part.price}</div>
                        <div className={styles.partNav}>
                              <Button onClick={addBuildComponent} className={styles.btnAdd}>Добавить</Button>
                              <LinkTag path={part.link} type='yandex'/>  
                        </div>
                     </section>
                </section>
            </article>
  )
}
