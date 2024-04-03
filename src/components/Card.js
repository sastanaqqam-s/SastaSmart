import React from 'react';



const Card = ({data}) => {
  return (
   
    <>
  <div class="card1">
    <div class="wrapper">
      <img src={data.image1} class="cover-image-2" />
    </div>
    
    <img src={data.image2} class="character" />
  </div>
  
</>
   
  );
};

export default Card;