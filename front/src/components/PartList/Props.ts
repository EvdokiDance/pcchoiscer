export type Props = {
   className?: string,
   parts: Part[],
}


type Part = {
    name: string,
    img: string,
    link: string,
    price?: string,
    features?: Object,
}