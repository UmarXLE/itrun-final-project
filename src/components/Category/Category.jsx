import React from 'react';
import styles from './category.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from 'react-router-dom'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Category = () => {
    return (
        <div className={styles.wrapperBg}>

            <div className={styles.wrapper}>

                <div className={styles.info}>
                    <h2 className={styles.title}>Category Donation</h2>
                </div>
                {/* <Swiper
                     modules={[Navigation, Pagination, Scrollbar, A11y]}
                     spaceBetween={10}
                     slidesPerView={3}
                     speed={1000}
                     loop={true}
                     navigation 
                     effect={"flip"}
                     pagination={{ clickable: true }}                   
                     onSwiper={(swiper) => console.log(swiper)}
                     onSlideChange={() => console.log('slide change')}
                    >
                    <SwiperSlide>
                        <Link to='/naturaldisasters'>
                            <img className={styles.icon} src="img/naturaldisasters.jpg" alt="" />
                            <h2 className={styles.subTitle}>Natural Disasters</h2>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                    <Link to='/halpinganimals'>
                            <img src='img/animal.jpg' className={styles.icon} alt="" />
                            <h2 className={styles.subTitle}>Halping Animals</h2>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide><Link to='/poaching'>
                            <img className={styles.icon} src="img/poaching.jpg" alt="" />
                            <h2 className={styles.subTitle}>Poaching</h2>
                        </Link></SwiperSlide>
                    <SwiperSlide>
                    <Link to='/war'>
                            <img className={styles.icon} src="img/war.jpg" alt="" />
                            <h2 className={styles.subTitle}>War</h2>
                        </Link>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <Link to='/elderly'>
                            <img  className={styles.icon} src="img/elderly.jpg" alt="" />
                            <h2 className={styles.subTitle}>Halp for the elderly</h2>
                        </Link>
                    </SwiperSlide>

             </Swiper> */}

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          576:{
            maxWidth:576,
            slidesPerView: 1,
          },
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
            <Link to='/naturaldisasters'>
                <img className={styles.icon} src="img/naturaldisasters.jpg" alt="" />
                <h2 className={styles.subTitle}>Natural Disasters</h2>
             </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to='/halpinganimals'>
                            <img src='img/animal.jpg' className={styles.icon} alt="" />
                            <h2 className={styles.subTitle}>Halping Animals</h2>
                        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to='/poaching'>
                            <img className={styles.icon} src="img/poaching.jpg" alt="" />
                            <h2 className={styles.subTitle}>Poaching</h2>
                        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to='/war'>
                            <img className={styles.icon} src="img/war.jpg" alt="" />
                            <h2 className={styles.subTitle}>War</h2>
                        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to='/elderly'>
                            <img  className={styles.icon} src="img/elderly.jpg" alt="" />
                            <h2 className={styles.subTitle}>Halp for the elderly</h2>
                        </Link>
        </SwiperSlide>
        
      </Swiper>
            </div>

        </div>
    );
};

export default Category;