import React from 'react';

const ProductList = ({data}) => (
  <div className="items" key={data._id}>
    <h3>
      Passenger Name: {" "}
      {data.name}
    </h3>
    <ul>
      <p>
        Airline Name: {" "}
        {data.airline.name || (data.airline.length > 0 && data.airline[0].name)}
      </p>
      <p>
        Airline Country: {" "}
        {data.airline.country
        || (data.airline.length > 0 && data.airline[0].country)}
      </p>
      <p>Airline Logo : {" "}</p>
      <img src={data.airline.logo || (data.airline.length > 0 && data.airline[0].logo)} alt="" />
    </ul>
  </div>
);

export default ProductList;
