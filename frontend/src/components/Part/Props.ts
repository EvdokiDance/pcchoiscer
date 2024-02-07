import { ReactNode } from "react"

export type Props = {
    className?: string,
    part: PartType,
}


 export type PartType = {
    name: string,
    img: string,
    link: string,
    price?: string,
    features?: Object,
}