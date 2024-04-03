import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

import Card from '../Card';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import watch0 from '../../Assets/Projects/watch0.png';
import watch1 from '../../Assets/Projects/watch.png';
import watch01 from '../../Assets/Projects/watch01.png';
import watch11 from '../../Assets/Projects/watch11.png';

const mydata=[
  {
       "image1":watch0,
       "image2":watch1

  },
  {
    "image1":watch01,
    "image2":watch11

}
]

const Acc = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const breakpoints = {
    320: {
      slidesPerView: 1,
      centeredSlides: true
    },
    480: {
      slidesPerView: 2,
      centeredSlides: true
    },
    768: {
      slidesPerView: 3,
      centeredSlides: true
    },
    1024: {
      slidesPerView: 5,
      centeredSlides: true
    }
  };

  return (
    <section>
      <h1 className="title-black" style={{ paddingTop: 50 }}>
        Latest Versions
      </h1>

      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={10}
        pagination={false}
        navigation={true}
        initialSlide={2}
        breakpoints={breakpoints}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Card data={mydata[0]} /></SwiperSlide>
        <SwiperSlide><Card data={mydata[1]} /></SwiperSlide>
        <SwiperSlide><Card data={mydata[0]} /></SwiperSlide>
        <SwiperSlide><Card data={mydata[1]} /></SwiperSlide>
        <SwiperSlide><Card data={mydata[0]} /></SwiperSlide>
        <SwiperSlide><Card data={mydata[1]} /></SwiperSlide>
        <SwiperSlide><Card data={mydata[0]} /></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Acc;