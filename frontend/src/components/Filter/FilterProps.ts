
import { PartType } from '../Part/Props';


export type Props = {
    setFiltredParts: (parts: PartType[]) => void;
    setPartsPerPage: (parts: PartType[]) => void;
    setPage: (page: number) => void;
    parts: PartType[];
}