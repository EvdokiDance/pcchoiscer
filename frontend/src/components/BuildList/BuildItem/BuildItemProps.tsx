

import { PartType } from "../../Part/Props"

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    category: string,
    handleDeleteItem: (category: string, index: any) => void,
    part: PartType,
    index: any,

}