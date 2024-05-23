



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import T from "./Cardteam";


// import required modules
import { Pagination } from 'swiper/modules';





const lists=[
  {
    "name":"Samy Benbahmed",
    "image":"samy-team.jpg",
    "title":"Chief operating officer"
  },
  {
    "name":"Mohamed azzi",
    "image":"azzi-team.jpg",
    "title":"Chief Business Developement Officer"
  },
  {
    "name":"Adnan Rebba",
    "image":"reba-team.jpg",
    "title":"Chief Executive officer"
  },
  {
    "name":"Tebbani nassim",
    "image":"nassim-team.jpg",
    "title":"Graphic Designer"
  },
  {
    "name":"Hind Daoudi",
    "image":"hinde-team.jpg",
    "title":"HR Manager"
  },
  {
    "name":"Moundhir Bachene",
    "image":"moundhir-team.jpg",
    "title":"Software engineer"
  },
  {
    "name":"Amine Aissiou",
    "image":"amine-team.jpg",
    "title":"3D Designer"
  },
  {
    "name":"Amine Khir",
    "image":"khir-team.jpg",
    "title":"3D Designer"
  },{
    "name":"Ramzi Lazouni",
    "image":"ramzi-team.jpg",
    "title":"Software engineer"
  },
  {
    "name":"Ali Braiki",
    "image":"random.png",
    "title":"Software engineer"
  }
  ]
  
  
export default function Team() {
  return (
    <div className='team'>
       <h1 className='titles' style={{ fontSize: "2.1em",marginBottom:"50px" }}>
          TEAM
        </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={7}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {lists.map((row, index) => (
        <SwiperSlide>
       
          <T data={row} />
         
          </SwiperSlide>
       
      ))}
        
        
      </Swiper>
    </div>
  );
}











