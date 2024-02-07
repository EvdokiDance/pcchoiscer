import React from "react";






export interface RangeInputGroupProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    min: string | number,
    max: string | number,
}