


import React from 'react';

import { BsWatch } from "react-icons/bs";

const Feature = ({data}) => {
  return (
   
    <>
 
<div className="newcard">
  
  <span className="icon">
          {/* Replace the SVG icon with an image */}
          <BsWatch style={{ marginBottom: "2px" }} />
        </span>
 
  <h4>  {data.title}</h4>
  <p>
  {data.description}
  </p>
  <div className="shine" />
  <div className="background">
    <div className="tiles">
      <div className="tile tile-1" />
      <div className="tile tile-2" />
      <div className="tile tile-3" />
      <div className="tile tile-4" />
      <div className="tile tile-5" />
      <div className="tile tile-6" />
      <div className="tile tile-7" />
      <div className="tile tile-8" />
      <div className="tile tile-9" />
      <div className="tile tile-10" />
    </div>
    <div className="line line-1" />
    <div className="line line-2" />
    <div className="line line-3" />
  </div>
</div>
  
</>
   
  );
};

export default Feature;



