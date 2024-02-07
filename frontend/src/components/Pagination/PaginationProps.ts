
export type PaginationProps = {
    className?: string,
    onNextPageClick: () => void;
    onPrevPageClick: () => void;
    disable: {
        left: boolean,
        right: boolean,
    }
    nav: {
        current: number;
        total: number;
        hardware: string | undefined;
    }
}