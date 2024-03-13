import {Props} from './Props';
import cn from 'classnames';
import styles from './Part.module.css'
import LinkTag from '../LinkTag/LinkTag';
import Button from '../Button/Button'


import { useNavigate, useParams } from 'react-router-dom';
import { currencyToRub } from '../../helpers/currencyToRub';
import { BuildType } from '../../pages/PageBuild/PageBuildProps';

export default function Part({className, part} : Props) : JSX.Element {


   

  let features = !!part.features ? Object.entries(part.features).map((feature, idx) => (
   <div key={idx}>{feature[0]+' : '+feature[1]}</div>
  )) : <></>;




  const navigate = useNavigate();
  
  const {hardware = ''} = useParams();
  
  
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
            } else {

                  build[index].isDisabled = false;
                  return recur(build[index+1], index+1);
            }

      }

      recur(build[0], 0);



      return build;

 }
  

  
  const addBuildComponent = () => {

        
        let localeBuild : BuildType[] = JSON.parse(localStorage.getItem('build'));

        

        const newComponent = {...part};

                  if (hardware ===  'processors' || hardware === 'moutherboards' || hardware === 'power' || hardware === 'cases') {
                           
                           let newLocaleBuild = localeBuild.map((buildItem, i) => {
                                    if (buildItem.category === hardware) {
                                          buildItem.components = [{...newComponent}];
                                          buildItem.isHidden = true;
                                    }
                                    return buildItem;
                             })


                             newLocaleBuild = handleIsDisabled(newLocaleBuild);
                             


                             localStorage.setItem('build', JSON.stringify(newLocaleBuild))

                  } else {
                        let newLocaleBuild = localeBuild.map((buildItem, index) => {
                              if (buildItem.category === hardware) {
                                    buildItem.components.push(newComponent);
                              }
                              return buildItem;
                       })

                             newLocaleBuild = handleIsDisabled(newLocaleBuild);
                       localStorage.setItem('build', JSON.stringify(newLocaleBuild))


                  }
                  
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
                        <div className={styles.partPrice}>{currencyToRub(part.price)}</div>
                        <Button onClick={addBuildComponent} className={styles.btnAdd}>Добавить</Button>
                        <LinkTag to={part.link} target='_blank' type='yandex'/>  
                     </section>
                </section>
            </article>
  )
}
