import React from 'react';
import styles from './category.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , autoplay} from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Category = () => {
    return (
        <div className={styles.wrapperBg}>

            <div className={styles.wrapper}>

                <div className={styles.info}>
                    <h2 className={styles.title}>Category Donation</h2>
                </div>
                <Swiper
                     modules={[Navigation, Pagination, Scrollbar, A11y]}
                     spaceBetween={10}
                     slidesPerView={3}
                     navigation 
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

             </Swiper>
            </div>

        </div>
    );
};

export default Category;