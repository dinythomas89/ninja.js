import React from 'react';

const Search = ({ locale, handleSearchInput }) => {
  return (
    <div>
      <input
        className="form-control"
        type="search"
        onChange={handleSearchInput}
        placeholder={locale === 'da' ? 'Søg brugere' : 'Search user'}
      />
    </div>
  );
};

export default Search;
