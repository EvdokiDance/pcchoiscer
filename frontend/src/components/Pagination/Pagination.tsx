import React from 'react'

import styles from './Pagination.module.css';
import cn from 'classnames';
import { PaginationProps } from './PaginationProps';
import { Link, useParams } from 'react-router-dom';
import Button from '../Button/Button';




export default function Pagination({ nav, disable, onNextPageClick, onPrevPageClick, className } : PaginationProps) {



  



  const handleNextPageClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    onNextPageClick()
  }

  const handlePrevPageClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    onPrevPageClick()
  }

  return (
    <div className={cn(styles.paginator, className)}>
    <Link to={`/hardware/${nav.hardware}/page/${nav.current-1}`}>
    <Button
      className={styles.arrow}
      type="button"
      onClick={handlePrevPageClick}
      disabled={disable.left}
    >
      {'<'}
    </Button>
    </Link>
    {nav && (
      <span className={styles.navigation} >
        {nav.current} / {nav.total}
      </span>
    )}
    <Link to={`/hardware/${nav.hardware}/page/${nav.current+1}`}>
      <Button
        className={styles.arrow}
        type="button"
        onClick={handleNextPageClick}
        disabled={disable.right}
      >
        {'>'}
    </Button>
    </Link>
  </div>
  );
}
