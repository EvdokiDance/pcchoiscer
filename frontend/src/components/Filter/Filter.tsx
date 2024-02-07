import React, { useEffect, useState, memo } from 'react'

import styles from './Filter.module.css'
import { useNavigate, useParams } from 'react-router-dom';

import { PartType } from '../Part/Props';

import Input from '../Input/Input';
import { Props } from './FilterProps';
import { useDebounce } from '@uidotdev/usehooks';
import Select from '../RangeInputGroup/RangeInputGroup';
import RangeInputGroup from '../RangeInputGroup/RangeInputGroup';


const Filter = memo(({setFiltredParts, setPartsPerPage, setPage, parts} : Props) => {

  const [searchItem, setSearchItem] = useState('');
  
  const [option, setOption] = useState('');

  const debouncedSearchTerm = useDebounce(searchItem, 700);

  const {hardware = ''}  = useParams();
  
  const ROWS_PER_PAGE = 25; 

  const navigate = useNavigate();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(e.target.value);
    }

  const filterParts = (inputValue : string) => {
    return inputValue === '' ? parts : parts.filter((part) => part.name.toLowerCase().includes(inputValue.toLowerCase()))
  } 


  useEffect( () => {

    const search = () => {
      let filtredItems = filterParts(debouncedSearchTerm);
      setFiltredParts(filtredItems);
      setPartsPerPage(filtredItems.slice(0, ROWS_PER_PAGE))
      setPage(1);
      navigate(`/${hardware}/${1}`)
    }

    search();

  }, [debouncedSearchTerm])


  const handleChangeOption = (e) => {
    setOption(e.target.value);
  }



  return (
    <>
      <Input value={searchItem} onChange={(e) => handleChange(e)} className={styles.input}/>
      <RangeInputGroup min='0' max={1000} />
    </>
  );
});


export default Filter;
