import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import f1 from '../asset/images/portfolio/first/1.jpg'
import f2 from '../asset/images/portfolio/first/2.png'
import f3 from '../asset/images/portfolio/first/3.png'
import f4 from '../asset/images/portfolio/first/4.jpg'
import f5 from '../asset/images/portfolio/first/5.png'
import f6 from '../asset/images/portfolio/first/6.jpg'
import f7 from '../asset/images/portfolio/first/7.png'
import s1 from '../asset/images/portfolio/second/1.jpg'
import s2 from '../asset/images/portfolio/second/2.jpg'
import s3 from '../asset/images/portfolio/second/3.jpg'
import s4 from '../asset/images/portfolio/second/4.jpg'
import s5 from '../asset/images/portfolio/second/5.jpg'
import s6 from '../asset/images/portfolio/second/6.jpg'
import s7 from '../asset/images/portfolio/second/7.jpg'
import s8 from '../asset/images/portfolio/second/8.jpg'
import s9 from '../asset/images/portfolio/second/9.jpg'
import s10 from '../asset/images/portfolio/second/10.jpg'
import s11 from '../asset/images/portfolio/second/11.jpg'
import s12 from '../asset/images/portfolio/second/12.jpg'
import s13 from '../asset/images/portfolio/second/13.jpg'
import s14 from '../asset/images/portfolio/second/14.jpg'
import s15 from '../asset/images/portfolio/second/15.jpg'
import s16 from '../asset/images/portfolio/second/16.jpg'
import s17 from '../asset/images/portfolio/second/17.jpg'
import s18 from '../asset/images/portfolio/second/18.jpg'
import s19 from '../asset/images/portfolio/second/19.png'
import t1 from '../asset/images/portfolio/third/1.png'
import t2 from '../asset/images/portfolio/third/2.png'
import t3 from '../asset/images/portfolio/third/3.png'
import t4 from '../asset/images/portfolio/third/4.png'
import t5 from '../asset/images/portfolio/third/5.png'
import t6 from '../asset/images/portfolio/third/6.png'
import t7 from '../asset/images/portfolio/third/7.png'
import t8 from '../asset/images/portfolio/third/8.png'


const Slider = () => {
  return (
    <>
      <div className="d-none d-lg-block">
        <div className="container" style={{ paddingRight: "5rem", paddingLeft: "5rem" }}>
          <Swiper
            spaceBetween={0}
            grabCursor={true}
            slidesPerView={4}
          >
            <SwiperSlide><img src={f1} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={f2} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={f3} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={f4} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={f5} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={f6} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={f7} className='img-fluid' alt="" /></SwiperSlide>
          </Swiper>
          <Swiper 
            spaceBetween={10}
            slidesPerView={3}
            className='mt-4'
            grabCursor={true}
          >
            <SwiperSlide><img src={s1} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s2} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s3} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s4} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s5} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s6} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s7} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s8} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s9} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s10} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s11} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s12} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s13} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s14} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s15} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s16} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s17} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s18} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s19} className='img-fluid' alt="" /></SwiperSlide>
          </Swiper>
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            grabCursor={true}
            className='mt-4'
            style={{ paddingRight: "0.5rem", paddingLeft: "0.5rem" }}>
            <SwiperSlide><img src={t1} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t2} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t3} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t4} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t5} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t6} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t7} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t8} className='img-fluid' alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="d-block d-lg-none">
        <Swiper
          spaceBetween={10}
          grabCursor={true}
          slidesPerView={3}
        >
          <SwiperSlide><img src={f1} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={f2} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={f3} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={f4} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={f5} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={f6} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={f7} className='img-fluid' alt="" /></SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          className='mt-4'
          grabCursor={true}
        >
          <SwiperSlide><img src={s1} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s2} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s3} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s4} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s5} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s6} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s7} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s8} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s9} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s10} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s11} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s12} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s13} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s14} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s15} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s16} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s17} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s18} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={s19} className='img-fluid' alt="" /></SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          grabCursor={true}
          className='mt-4'
        >
          <SwiperSlide><img src={t1} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t2} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t3} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t4} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t5} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t6} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t7} className='img-fluid' alt="" /></SwiperSlide>
            <SwiperSlide><img src={t8} className='img-fluid' alt="" /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Slider
