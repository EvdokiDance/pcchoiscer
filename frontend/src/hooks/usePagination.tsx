import { useEffect, useState } from "react";
import { PartType } from "../components/Part/Props";
import { useParams } from "react-router-dom";

export const usePagination = (parts : PartType[]) => {


    console.log('usePagination', parts);
    

    const ROWS_PER_PAGE = 25;

    const {hardware = '', id = '1'}  = useParams();


    const [partsPerPage, setPartsPerPage] = useState<PartType[]>([]);
    const [page, setPage] = useState(Number(id));


    const getTotalPageCount = (rowCount: number): number => {
        return Math.ceil(rowCount / ROWS_PER_PAGE)
        };

    
    const totalPageCount = getTotalPageCount(parts.length);


    const handleNextPageClick = () => {
        const current = page;
        const next = page + 1;
        setPartsPerPage(parts.slice(current*ROWS_PER_PAGE, next*ROWS_PER_PAGE))
        setPage(next <= totalPageCount ? next : current);
  
      };
      
      
      const handlePrevPageClick = () => {
        const current = page;
        const prev = current - 1;
        setPage(prev > 0 ? prev : current);
        setPartsPerPage(parts.slice((current-2)*ROWS_PER_PAGE, (current-1)*ROWS_PER_PAGE))
      }



    useEffect(() => {
        setPartsPerPage(parts.slice(0, ROWS_PER_PAGE))
        setPage(1);
    }, [parts])
        
    return {page, totalPageCount, partsPerPage, handleNextPageClick, handlePrevPageClick, setPage, setPartsPerPage}
}