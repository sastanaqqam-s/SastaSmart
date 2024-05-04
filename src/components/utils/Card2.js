import React from 'react';

import img from '../../Assets/piece1.png';

const Card2 = ({data}) => {
  return (
   
    <>
  <section className="card2">
  <div className="product-image">
    <img src={require(`../../Assets/${data.image}`)} alt="OFF-white Red Edition" draggable="false" />
  </div>
  <div className="product-info">
    <h2>{data.title}</h2>
    <p>{data.description}</p>
  
  </div>
</section>

  
</>
   
  );
};

export default Card2;