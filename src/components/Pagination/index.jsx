import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

export default function Pagination({ currentPage, onChangePage }) {
  return (
    <ReactPaginate
      className={styles.root}
      previousLabel="<"
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={2}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
}
