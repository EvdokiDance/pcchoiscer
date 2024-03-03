import React, { useEffect, useState, memo, useMemo } from 'react'

import styles from './Filter.module.css'

import Input from '../Input/Input';

import { RangeInputGroup } from '../RangeInputGroup/RangeInputGroup';
import { changeCurrentMax, changeCurrentMin, changeMax, changeMin } from '../../store/reducers/rangeInputReducer';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import { setFiltredParts, setPartsPerPage } from '../../store/reducers/partsReducer';
import { PartType } from '../Part/Props';
import { useDebounce } from '../../hooks/useDebunce';
import { Props } from './FilterProps';



const Filter = ({setPage, setTotalPageCount, getTotalPageCount} : Props) => {

  const dispatch = useAppDispatch();

  const storeParts = useAppSelector((state) => state.partsData.parts);
  const filtredParts = useAppSelector((state) => state.partsData.filtredParts);
  const rangeInputData = useAppSelector((state) => state.rangeInputData);


  const [searchItem, setSearchItem] = useState("");
  let debouncedSearchTerm = useDebounce(searchItem, 700);





  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  }
  
  const filterParts = (parts: PartType[]) => {
  
    return debouncedSearchTerm === '' ? parts : parts.filter((part) => part.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase().trim()))
  }



  // useEffect(() => {

  //   if (rangeInputData.currentMin === '' && rangeInputData.currentMax === '') {
  //     console.log('FSASFSFFS');
      
  //     const max = storeParts.length > 0 ? Math.max(...storeParts.map((part) => part.price)) : 0;
  //     const min = storeParts.length > 0 ? Math.min(...storeParts.map((part) => part.price)) : 0;
    
  
  //     // dispatch(changeMax(max))
  //     // dispatch(changeMin(min))
  //     dispatch(changeCurrentMin(''))
  //     dispatch(changeCurrentMax(''))
  //     setFiltredParts(storeParts)
  //   } 

    
  // }, [rangeInputData, storeParts])



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


    console.log(max, min);
    
    dispatch(changeMax(max))
    dispatch(changeMin(min))
   



    dispatch(setFiltredParts(searchParts));

    
   }, [debouncedSearchTerm])

  return (
    <>
      <Input value={searchItem} onChange={(e) => handleChange(e)} className={styles.input}/>
      <RangeInputGroup searchTerm={debouncedSearchTerm} filterParts={filterParts} parts={storeParts}/>
    </>
  );
};


export default Filter;
