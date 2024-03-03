import { useEffect, useState, useMemo } from "react";
import { PartType } from "../components/Part/Props";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { setPartsPerPage } from "../store/reducers/partsReducer";


 export const usePagination = () => {




  const dispatch = useAppDispatch();

  const filtredParts = useAppSelector((state) => state.partsData.filtredParts);


  
    const ROWS_PER_PAGE = 25;

    const {hardware = '', id = '1' }  = useParams();
    const navigate = useNavigate();

    // const partsItem = filtredParts.length > 0 ? filtredParts : parts;


    // const partsItem = useMemo(() => {
    //   return filtredParts.length > 0 ? filtredParts : parts;
    // }, [parts, filtredParts])

  // console.log(id);

 
  


    // const partsItem = useMemo(() => filtredParts, [filtredParts])


    // const [partsPerPage, setPartsPerPage] = useState<PartType[]>([]);
    const [page, setPage] = useState(Number(id));

    const [totalPageCount, setTotalPageCount] = useState(1);

    const getTotalPageCount = (rowCount: number): number => {
        return Math.ceil(rowCount / ROWS_PER_PAGE)
        };

    
    const handleNextPageClick = () => {
        const current = page;
        const next = page + 1;
        dispatch(setPartsPerPage(filtredParts.slice(current*ROWS_PER_PAGE, next*ROWS_PER_PAGE)))
        setPage(next <= totalPageCount ? next : current);
  
      };
      
      
      const handlePrevPageClick = () => {
        const current = page;
        const prev = current - 1;
        setPage(prev > 0 ? prev : current);
        dispatch(setPartsPerPage(filtredParts.slice((current-2)*ROWS_PER_PAGE, (current-1)*ROWS_PER_PAGE)))
      }

    // useEffect(() => {

    //   navigate(`/${hardware}/${page}`);
    // }, [page])

    
        
    return {page, totalPageCount, handleNextPageClick, handlePrevPageClick, setPage, setTotalPageCount, getTotalPageCount}
}

