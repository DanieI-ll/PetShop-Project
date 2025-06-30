import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './CarouselCategories.module.css';

import { getAllCategories } from '../../redux/thunks.js';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function CarouselCategories() {
  const categories = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();
  const swiperRef = useRef(null);
  const directionRef = useRef('forward');
  const intervalRef = useRef(null);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const startInterval = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      const swiper = swiperRef.current;
      if (!swiper) return;

      if (directionRef.current === 'forward') {
        if (swiper.isEnd) {
          directionRef.current = 'backward';
          swiper.slidePrev();
        } else {
          swiper.slideNext();
        }
      } else {
        if (swiper.isBeginning) {
          directionRef.current = 'forward';
          swiper.slideNext();
        } else {
          swiper.slidePrev();
        }
      }
    }, 2000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  return (
    <div style={{ maxWidth: '1360px', margin: '0 auto' }} onMouseEnter={stopInterval} onMouseLeave={startInterval}>
      <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)} slidesPerView={4} spaceBetween={32} allowTouchMove={true} className={styles.mySwiper}>
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Link to={`/categories/${category.id}`}>
                <div className={styles.categoryContent}>
                  <img src={'https://petshop-backend-33od.onrender.com' + "/" + category.image} className={styles.category_img} alt={category.title} />
                  <p className={styles.category_title}>{category.title}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <p>There are no available categories</p>
        )}
      </Swiper>
    </div>
  );
}
