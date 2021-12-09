import React from 'react';

const Searchbox = props => {
  return (
    <div>
      <label>filter shown with</label>
      <input value={props.searchTerm} onChange={props.handleSearchTermChange} />
    </div>
  );
};

export default Searchbox;
