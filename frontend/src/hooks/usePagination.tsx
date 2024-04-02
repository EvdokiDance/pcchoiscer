import { useEffect, useState, useMemo } from "react";
import { PartType } from "../components/Part/Props";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { setPartsPerPage } from "../store/reducers/partsReducer";


 export const usePagination = () => {




  const dispatch = useAppDispatch();

  const filtredParts = useAppSelector((state) => state.partsData.filtredParts);


  
    const ROWS_PER_PAGE = 25;

    const {hardware = '', page = '1' }  = useParams();
    const navigate = useNavigate();

    // const partsItem = filtredParts.length > 0 ? filtredParts : parts;


    // const partsItem = useMemo(() => {
    //   return filtredParts.length > 0 ? filtredParts : parts;
    // }, [parts, filtredParts])

  // console.log(id);

 
  


    // const partsItem = useMemo(() => filtredParts, [filtredParts])


    // const [partsPerPage, setPartsPerPage] = useState<PartType[]>([]);
    const [pageN, setPageN] = useState(Number(page));

    const [totalPageCount, setTotalPageCount] = useState(1);

    const getTotalPageCount = (rowCount: number): number => {
        return Math.ceil(rowCount / ROWS_PER_PAGE)
        };

    
    const handleNextPageClick = () => {
        const current = pageN;
        const next = pageN + 1;
        dispatch(setPartsPerPage(filtredParts.slice(current*ROWS_PER_PAGE, next*ROWS_PER_PAGE)))
        setPageN(next <= totalPageCount ? next : current);
  
      };
      
      
      const handlePrevPageClick = () => {
        const current = pageN;
        const prev = current - 1;
        setPageN(prev > 0 ? prev : current);
        dispatch(setPartsPerPage(filtredParts.slice((current-2)*ROWS_PER_PAGE, (current-1)*ROWS_PER_PAGE)))
      }

    // useEffect(() => {

    //   navigate(`/${hardware}/${page}`);
    // }, [page])

    
        
    return {pageN, totalPageCount, handleNextPageClick, handlePrevPageClick, setPageN, setTotalPageCount, getTotalPageCount}
}

