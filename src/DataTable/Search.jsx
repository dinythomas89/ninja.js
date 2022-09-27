import React from 'react';

const Search = ({ handleSearchInput }) => {
  return (
    <div>
      <input
        className="form-control"
        type="search"
        onChange={handleSearchInput}
        placeholder="Søg brugere"
      />
    </div>
  );
};

export default Search;
