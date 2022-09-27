import React from 'react';

const Page = ({ pageNumber, currentPage, setCurrentPage }) => {
  const onButtonClick = () => {
    setCurrentPage(pageNumber);
  };

  if (currentPage === pageNumber) {
    return (
      <li className="page-item mr-1">
        <button className="page-link button-outline" onClick={onButtonClick}>
          {pageNumber}
        </button>
      </li>
    );
  }
  return (
    <li className="page-item mr-1">
      <button className="page-link" onClick={onButtonClick}>
        {pageNumber}
      </button>
    </li>
  );
};

export default Page;
