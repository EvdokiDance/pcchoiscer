
import { Props } from "./BuildItemProps"

import styles from './BuildItem.module.css'
import LinkTag from "../../LinkTag/LinkTag"
import Button from "../../Button/Button"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { currencyToRub } from "../../../helpers/currencyToRub";


import cn from 'classnames'





const BuildItem = ({part, title, category, index, className, handleDeleteItem, ...props} : Props) => {
 
   const {img, name, price, link} = part;


  return (
       <div {...props} className={cn(handleDeleteItem ? styles.selectionHrdw : styles.anotherSelection)}>
                    <div className={styles.title}>{title}</div>
                    <img src={`${img}`} alt='buildItem' height={50} width={50}/>
                    <div className={styles.name}>{name}</div>
                    <div>{currencyToRub(price)}</div>
                    <LinkTag to={link} className={styles.btnBuy} target='_blank'><ShoppingCartIcon  sx={{fontSize: 22, marginRight: 1}}/> Купить</LinkTag>
                    {handleDeleteItem && <Button className={styles.btnX} onClick={() => handleDeleteItem(category, index)}>X</Button>}
        </div>
  );
}




export default BuildItem;
