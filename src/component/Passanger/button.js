import React from 'react';

const Button = ({loadMoreData,loadingMoreUser, userLength,page}) => (
  <div className="container">
     {loadingMoreUser ? <h1>loading...</h1>
     : (page < userLength)?
    <button
      onClick={loadMoreData}
    >
      Load More
    </button>:null}
  </div>
);
export default Button;
