import React from "react";


import { PartType } from "../Part/Props";



export interface RangeInputGroupProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    setFiltredParts?: (parts: any) => void;
    filterParts?: (parts: PartType[]) => PartType[];
    searchTerm: string,
    parts: PartType[];
    min?: string | number,
    max?: string | number,
}