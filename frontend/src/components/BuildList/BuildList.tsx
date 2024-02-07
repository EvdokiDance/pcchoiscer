



import { memo, useState } from 'react';
import styles from './BuildList.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import { useUIDSeed } from 'react-uid';
import Button from '../Button/Button';
import LinkTag from '../LinkTag/LinkTag';

const hardwares = [['processors', 'Процессор'], ['coolers', 'Кулер'], ['moutherboards', 'Материнская плата'], ['ram', 'Оперативная память'], ['ssd', 'SSD'], ['hdd', 'HDD'], ['videocards', 'Видеокарта'], ['cases', 'Корпус'], ['power', 'Блок питания']];

type PartType = {
  id: string,
  name: string,
  img: string,
  link: string,
  price?: string,
  features?: Object,
}

type BuildType = {
  [key : string] : PartType[]
}


type Props = {
  dataBuild : BuildType,
  handleDeleteItem: (category : string, index : number) => void;
}


const memoBuildList = memo(function BuildList({dataBuild, handleDeleteItem} : Props)  {
  
  let currentPrice = 0;
  let totalPrice = '';



  return (
    <>  
      {hardwares.map(([category, title] : any) => (
        <article key={category} className={styles.partsWrapper}>
          <section className={styles.selectionWrapper} >
            { !!dataBuild[category as keyof BuildType] && dataBuild[category as keyof BuildType].length > 0  ? dataBuild[category as keyof BuildType].map((hardware, index) => {
              
              currentPrice += Number(hardware.price?.split('₽')[0].replace(/\s/g,''));
         
               totalPrice = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0, }).format(
                currentPrice,
              ) 

              return (
                <div key={index} className={styles.selectionHrdw}>
                  <div>{title}</div>
                  <img src={`${hardware.img}`} alt='' height={50} width={50}/>
                  <div>{hardware.name}</div>
                  <div>{hardware.price}</div>
                  <LinkTag path={hardware.link}><ShoppingCartIcon  sx={{fontSize: 22, marginRight: 1}}/> Купить</LinkTag>
                  <Button onClick={() => handleDeleteItem(category,index)} className={styles.btnDelete}>X</Button>  
                </div>
              )
            }) : <></>
          }
          </section>
          <h4 className={styles.title}>{title}</h4>
          <LinkTag path={`/${category}/1`} hardware={category} className={styles.partBtn}><><AddIcon sx={{fontSize: 30}}/>Выбор</></LinkTag>
        </article>
      ))}
      <div className={styles.bottomWrapper}><Button className={styles.btnSave}>Сохранить сборку</Button><span className={styles.totalPrice}>ВСЕГО: {totalPrice}</span></div>
    </>
  );
})

export default memoBuildList;
