import React from "react";






export interface RangeInputProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    className?: string,
    minmax: string | number,
    type?: React.HTMLInputTypeAttribute,
    placeholder?: React.HTMLInputTypeAttribute,
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}