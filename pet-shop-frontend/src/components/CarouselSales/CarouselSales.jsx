import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useEffect, useRef } from 'react';
import { getAllProducts } from '../../redux/thunks.js';
import { useDispatch, useSelector } from 'react-redux';

import Product from '../../pages/Products/Product/Product.jsx';

export default function CarouselSales() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const swiperRef = useRef(null);
  const directionRef = useRef('forward');
  const intervalRef = useRef(null);

  useEffect(() => {
    dispatch(getAllProducts());
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
      <Swiper onSwiper={(swiper) => (swiperRef.current = swiper)} slidesPerView={4} spaceBetween={32} allowTouchMove={true}>
        {products && products.length > 0 ? (
          products.map(
            (product) =>
              product.discont_price !== null && (
                <SwiperSlide key={product.id}>
                  <Product product={product} />
                </SwiperSlide>
              ),
          )
        ) : (
          <p>There are no available sales</p>
        )}
      </Swiper>
    </div>
  );
}
