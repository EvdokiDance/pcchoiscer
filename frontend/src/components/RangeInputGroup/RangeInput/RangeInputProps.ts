import React from "react";






export interface RangeInputProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string,
    minmax: string | number
}