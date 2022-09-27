import React from 'react';

import Page from './Page';

const Pagination = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1);

  return (
    <ul className="pagination">
      {pageNumbers.map((pageNumber) => (
        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </ul>
  );
};

export default Pagination;
