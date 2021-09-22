import React from 'react';

const SearchComponent = ({ searchKey, onSearchFunction }) => {
  return (
    <div>
      <input
        type='search'
        name=''
        id='search'
        placeholder='Search'
        value={searchKey}
        onChange={(e) => onSearchFunction(e.target.value)}
      />
    </div>
  );
};

export default SearchComponent;
