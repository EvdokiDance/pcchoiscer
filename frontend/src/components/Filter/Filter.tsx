import React, { useEffect, useState, memo, useMemo } from 'react'

import styles from './Filter.module.css'

import Input from '../Input/Input';

import { RangeInputGroup } from '../RangeInputGroup/RangeInputGroup';
import { changeCurrentMax, changeCurrentMin, changeMax, changeMin } from '../../store/reducers/rangeInputReducer';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import { setFiltredParts } from '../../store/reducers/partsReducer';
import { PartType } from '../Part/Props';
import { useDebounce } from '../../hooks/useDebunce';
import { Props } from './FilterProps';

import cn from 'classnames'


const Filter = ({className, ...props} : Props) => {

  const dispatch = useAppDispatch();

  const storeParts = useAppSelector((state) => state.partsData.parts);

  const [searchItem, setSearchItem] = useState("");
  let debouncedSearchTerm = useDebounce(searchItem, 700);





  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  }
  
  const filterParts = (parts: PartType[]) => {
  
    return debouncedSearchTerm === '' ? parts : parts.filter((part) => part.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase().trim()))
  }

  useEffect(() => {

    
      const max = storeParts.length > 0 ? Math.max(...storeParts.map((part) => part.price)) : 0;
      const min = storeParts.length > 0 ? Math.min(...storeParts.map((part) => part.price)) : 0;
  
      dispatch(changeMax(max))
      dispatch(changeMin(min))
      dispatch(changeCurrentMin(''))
      dispatch(changeCurrentMax(''))
      setFiltredParts(storeParts)
    

    
  }, [storeParts])

  

  useEffect( () => {    
    

  
    let searchParts = filterParts(storeParts);

    const max = searchParts.length > 0 ? Math.max(...searchParts.map((part) => part.price)) : 0;
    const min = searchParts.length > 0 ? Math.min(...searchParts.map((part) => part.price)) : 0;
    
    dispatch(changeMax(max))
    dispatch(changeMin(min))
   
    dispatch(setFiltredParts(searchParts));

    
   }, [debouncedSearchTerm])

  return (
    <div className={cn(className, styles.filterContain)} {...props}>
      <Input className={styles.input} value={searchItem} placeholder='Поиск...' onChange={(e) => handleChange(e)}/>
      <RangeInputGroup className={styles.rangeInput} searchTerm={debouncedSearchTerm} filterParts={filterParts}/>
    </div>
  );
};


export default Filter;
