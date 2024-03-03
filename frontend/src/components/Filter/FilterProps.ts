
import { PartType } from '../Part/Props';


export interface Props extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setPage: (page: number) => void;
    setTotalPageCount: (count : number) => void;
    getTotalPageCount: (length : number) => number; 
}