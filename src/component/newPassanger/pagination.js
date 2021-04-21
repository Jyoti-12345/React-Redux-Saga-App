import React, { useState } from 'react';
import './newPassangers.css';
import {Link} from 'react-router-dom';

const Pagination = ({ posts, userLength, paginate }) => {
  const pageNumbers = [];
  console.log("pagenumber", pageNumbers);

  for (let i = 1; i <= Math.ceil(userLength / posts); i++) {
    pageNumbers.push(i);
  }
  const [currentButton, setCurrentButton] = useState(1)
  return (
    <nav>
      <ul className='pagination'>
      <Link
        to={`/newPassangers/page_${currentButton}`}
        // className={`${currentButton === 1 ? 'disabled' : ''}`}
        onClick={() => setCurrentButton(prev => prev <= 1 ? prev : prev - 1)}
      >
        Prev
      </Link>
        {pageNumbers.map(number => (
          <li key={number}>
            <Link onClick={() => paginate(number)} to={`/newPassangers/page_${number}`}>
              {number}
            </Link>
          </li>
        ))}

      <Link
        to={`/newPassangers/page_${currentButton}`}
        // className={`${currentButton === pageNumbers.length ? 'disabled' : ''}`}
        onClick={() => setCurrentButton(prev => prev >= pageNumbers.length ? prev : prev + 1)}
      >
        Next
      </Link>
      </ul>
    </nav>
  );
};

export default Pagination;