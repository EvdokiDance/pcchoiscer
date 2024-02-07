import  {useState, useEffect, useCallback, useMemo,memo} from 'react'

import { useNavigate, useParams } from 'react-router-dom';



import './PageSelection.css'


import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';







import {PartType as Part} from '../../components/Part/Props'

import { useFetch } from '../../hooks/useFetch';

import {PartList, Spinner, Pagination, Filter} from '../../components';
import { usePagination } from '../../hooks/usePagination';






 const PageSelection = () => {


    const {hardware = '', id = '1'}  = useParams();
    
    
    const {data: parts, isPending, error} = useFetch(hardware);
  
    const navigate = useNavigate();

  
    
    const [filtredParts, setFiltredParts] = useState<Part[]>([]);


    const partItems = filtredParts.length ? filtredParts : parts;


    const {handleNextPageClick, handlePrevPageClick, page, partsPerPage, setPage, totalPageCount, setPartsPerPage} = usePagination(partItems)


  

  return (
    <div className='pageSelection'>
      <span className='backward' onClick={() => navigate('/build')}>
        <KeyboardArrowLeftIcon sx={{fontSize: 65, "&:hover": { color: "purple" }}} />
      </span>
        {isPending && <Spinner className="spinner"/>}
        {error && <div>{error}</div>}
        {parts && <Filter setFiltredParts={setFiltredParts} setPartsPerPage={setPartsPerPage} setPage={setPage} parts={parts}/>}
        {partsPerPage && <PartList parts={partsPerPage} />}
           <Pagination
            onNextPageClick={handleNextPageClick}
            onPrevPageClick={handlePrevPageClick}
            disable={{
              left: page === 1,
              right: page === totalPageCount,
            }}
            nav={{ current: page, total: totalPageCount, hardware }}
          />
      </div>
    
  )
        }

export default memo(PageSelection);

