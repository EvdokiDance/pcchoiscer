
import { Props } from "./BuildItemProps"

import styles from './BuildItem.module.css'
import LinkTag from "../../LinkTag/LinkTag"
import Button from "../../Button/Button"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { currencyToRub } from "../../../helpers/currencyToRub";


import cn from 'classnames'





const BuildItem = ({part, title, category, index, className, handleDeleteItem, ...props} : Props) => {
 
   const {img, name, price, link} = part;


   let features = !!part.features ? Object.entries(part.features).map((feature, idx) => (
    <div key={idx}>{feature[0]+' : '+feature[1]}</div>
   )) : <></>;



  return (
       <li {...props} className={cn(className)}>
                    {/* <div className={styles.title}>{title}</div> */}
                    <img className={styles.img} src={`${img}`} alt='buildItem'/>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.partFeatures}>{features}</div>
                    <div className={styles.price}>{currencyToRub(price)}</div>
                      <LinkTag to={link} className={styles.btn} target='_blank'><ShoppingCartIcon  sx={{fontSize: 22, marginRight: 1}}/> Купить</LinkTag>
                      {handleDeleteItem && <Button id="btn-item" className={styles.btn} onClick={() => handleDeleteItem(category, index)}>X</Button>}
              
        </li>
  );
}




export default BuildItem;
