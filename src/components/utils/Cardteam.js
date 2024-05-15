import React from 'react';

import { FaLinkedin } from "react-icons/fa";
import t from "../../Assets/team/azzi-team.jpg";
const Cardt = ({data}) => {
  return (
   
    <>
  <div className="profile">
  <div className="profile-image">
    <img src={t} />
  </div>
  <h2 className="profile-username">AZZI MOH</h2>
  <small className="profile-user-handle">SOFTWARE ENGINEER</small>
  <div className="profile-links">
    <a href="#" className="link link--icon">
    <FaLinkedin  style={{ marginBottom: "2px" }} />
    </a>
    
   
  </div>
</div>


  
</>
   
  );
};

export default Cardt;