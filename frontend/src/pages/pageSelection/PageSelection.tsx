import  {useEffect} from 'react'

import { useParams } from 'react-router-dom';



import styles from './PageSelection.module.css'




import { getData } from '../../api/api';



import {PartType} from '../../components/Part/Props'



import {PartList, Spinner, Pagination, Filter} from '../../components';
import { usePagination } from '../../hooks/usePagination';

import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';

import { setFiltredParts, setParts, setPartsPerPage } from '../../store/reducers/partsReducer';
import { setHeaderName } from '../../store/reducers/headerReducer';


 const PageSelection = () => {


    const hardwares = {'processors': 'Процессор', 'coolers': 'Кулер', 'moutherboards': 'Материнская плата', 'ram': 'Оперативная память', 'ssd': 'SSD', 'hdd': 'HDD', 'videocards': 'Видеокарта', 'cases': 'Корпус', 'power': 'Блок питания'};
   
   
  
    const {hardware = ''}  = useParams();

  
    const dispatch = useAppDispatch();

    const filtredParts = useAppSelector((state) => state.partsData.filtredParts);
    
    
    useEffect(() => {

      dispatch(setHeaderName(hardwares[hardware]));
      getData(hardware).then((parts : PartType[]) => {
        dispatch(setParts(parts));
        dispatch(setFiltredParts(parts));
      }).catch((error) => console.log(error));;
    }, [])



    const {handleNextPageClick, handlePrevPageClick, page, totalPageCount, setPage, setTotalPageCount, getTotalPageCount} = usePagination()


    useEffect(() => {

        if (filtredParts.length === 0) {
          setTotalPageCount(1);
        } else {
          setTotalPageCount(getTotalPageCount(filtredParts.length));
        }

        
        dispatch(setPartsPerPage(filtredParts.slice(0, 25)))
        setPage(1);

    }, [filtredParts])

  



  return (
    <div className={styles.pageSelection}>
      <Filter className={styles.filter}/>
      <PartList className={styles.partList} />
      <Pagination
        className={styles.pagination}
        onNextPageClick={handleNextPageClick}
        onPrevPageClick={handlePrevPageClick}
        disable={{
          left: page === 1,
          right: page === totalPageCount,
        }}
        nav={{ current: page, total: totalPageCount, hardware }}/>
    
     </div>
    )
      }

export default PageSelection;

