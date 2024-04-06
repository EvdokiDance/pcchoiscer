import { Props } from "./BuildItemProps"

import LinkTag from "../../LinkTag/LinkTag"
import Button from "../../Button/Button"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { currencyToRub } from "../../../helpers/currencyToRub";
import './BuildItem.css'

import cn from 'classnames'

const BuildItem = ({part, title, category, index, className, handleDeleteItem, ...props} : Props) => {
 
   const {img, name, price, link} = part;


   let features = !!part.features ? Object.entries(part.features).map((feature, idx) => (
    <div key={idx}>{feature[0]+' : '+feature[1]}</div>
   )) : <></>;



  return (
       <li {...props} className={cn(className, 'build-item border-t border-[var(--border-color)]')}>
                    <div className="build-item__img_container flex justify-center">
                      <div>
                        <img className="build-item__img" src={`${img}`} alt='buildItem'/>
                      </div>
                    </div>
                    <div className="build-item__name">{name}</div>
                    <div className="build-item__features">{features}</div>
                    <div className="build-item__price flex justify-center md:justify-self-end">Цена: {currencyToRub(price)}</div>
                    <div className="build-item__actions flex flex-wrap gap-4 shrink-0 items-center justify-center content-between sm:justify-end">
                      <LinkTag to={link} className="w-36 shrink-0" target='_blank'><ShoppingCartIcon  sx={{fontSize: 22, marginRight: 1}}/> Купить</LinkTag>
                      {handleDeleteItem && <Button id="btn-item" className='w-36 shrink-0' onClick={() => handleDeleteItem(category, index)}>X</Button>}
                    </div>
              
        </li>
  );
}




export default BuildItem;
