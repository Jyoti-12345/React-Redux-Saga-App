import React from 'react';

const Button = (props) => (
  <div className="container">
    <button
      type="button"
      onClick={props.loadMoreData}
    >
      Load More
    </button>
  </div>
);
export default Button;
