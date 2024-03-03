
import { Props } from "./BuildContainerProps"
import styles from './BuildContainer.module.css'
import { memo, useEffect, useMemo } from 'react';
import cn from 'classnames'
import BuildItem from "../BuildItem/BuildItem";







function BuildContainer({buildItem, handleDeleteItem, handleTotalPrice, className} : Props)  {

console.log(buildItem);

const {components, name : title, category} = buildItem;

  return (
   <div className={cn(className)} >
        {components.map((component, index) => <BuildItem key={index} index={index} handleDeleteItem={handleDeleteItem} title={title} category={category} part={component}/>)}
   </div>
  );
}



const BuildContainerMemo = memo(BuildContainer);


export default BuildContainerMemo;
