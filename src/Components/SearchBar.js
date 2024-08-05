import React from 'react';

function SearchBar({ handleChange }) {
  return (
    <div className="ui huge fluid icon input">
      <input type="text" placeholder="Search your Transactions" onChange={handleChange} />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default SearchBar;
