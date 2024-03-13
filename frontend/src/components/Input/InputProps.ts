
import { UseFormRegisterReturn } from "react-hook-form/dist/types"

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement> {
    className?: string,
    register?: UseFormRegisterReturn<string>
}