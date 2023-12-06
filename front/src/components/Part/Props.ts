
export type Props = {
    className?: string,
    part: Part,
    key: number,
}


 type Part = {
    name: string,
    img: string,
    link: string,
    price?: string,
    features?: Object,
}