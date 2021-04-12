import React from 'react';

const ProductList = (props) => (
  <div className="items" key={props.data._id}>
    <h3>
      Passenger Name: {" "}
      {props.data.name}
    </h3>
    <ul>
      <p>
        Airline Name: {" "}
        {props.data.airline.name || (props.data.airline.length > 0 && props.data.airline[0].name)}
      </p>
      <p>
        Airline Country: {" "}
        {props.data.airline.country
        || (props.data.airline.length > 0 && props.data.airline[0].country)}
      </p>
      <p>Airline Logo : {" "}</p>
      <img src={props.data.airline.logo || (props.data.airline.length > 0 && props.data.airline[0].logo)} alt="" />
    </ul>
  </div>
);

export default ProductList;
