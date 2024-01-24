export type Props = {
   className?: string,
   parts: PartType[],
}


export type PartType = {
    name: string,
    img: string,
    link: string,
    price?: string,
    features?: Object,
}