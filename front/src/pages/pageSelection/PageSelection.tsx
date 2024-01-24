import  {useState, useEffect, useCallback, useMemo,memo} from 'react'

import { useNavigate, useParams } from 'react-router-dom';

import { PartList, Spinner, Pagination} from '../../components';

import './PageSelection.css'


import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';







import {PartType as Part} from '../../components/Part/Props'
import Filter from '../../components/Filter/Filter';
import { useFetch } from '../../hooks/useFetch';





 const PageSelection = () => {


    const {hardware = '', id = '1'}  = useParams();
    
    
   
    
    const {data: parts, isPending, error} = useFetch(hardware);
  
    const navigate = useNavigate();
    const ROWS_PER_PAGE = 25;
  
    
    const [partsPerPage, setPartsPerPage] = useState<Part[]>([]);
    const [page, setPage] = useState(Number(id));
    const [filtredParts, setFiltredParts] = useState<Part[]>([]);






    const getTotalPageCount = (rowCount: number): number => {
    return Math.ceil(rowCount / ROWS_PER_PAGE)
    };
    
    const totalPageCount = getTotalPageCount(filtredParts.length ? filtredParts.length : parts.length);

    const handleNextPageClick = () => {
      const current = page;
      const next = page + 1;

      const items = filtredParts.length ?  filtredParts : parts;

      setPartsPerPage(items.slice(current*ROWS_PER_PAGE, next*ROWS_PER_PAGE))
      setPage(next <= totalPageCount ? next : current);

    };
    
    
    const handlePrevPageClick = () => {
      const current = page;
      const prev = current - 1;

      
      const items = filtredParts.length ?  filtredParts : parts;
      
      setPage(prev > 0 ? prev : current);
      setPartsPerPage(items.slice((current-2)*ROWS_PER_PAGE, (current-1)*ROWS_PER_PAGE))
    }


    useEffect(() => {
      console.log('ЗАШЛО');
      
      parts && setPartsPerPage(parts.slice(0, ROWS_PER_PAGE))
    }, [parts])


  
    
      


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

