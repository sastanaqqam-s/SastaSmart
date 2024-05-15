import React from 'react';

import { FaLinkedin } from "react-icons/fa";

const Cardt = ({data}) => {
  return (
   
    
  <div className="profile">
  <div className="profile-image">
    <img src={require(`../../Assets/team/${data.image}`)} />
  </div>
  <h2 className="profile-username">{data.name}</h2>
  <small className="profile-user-handle">{data.title}</small>
  <div className="profile-links">
    <a href="#" className="link link--icon">
    <FaLinkedin  style={{ marginBottom: "2px" }} />
    </a>
    
   
  </div>
</div>


  

   
  );
};

export default Cardt;