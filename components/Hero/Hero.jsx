'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image'
import'./Hero.scss'
import { heroImages } from '../../data'
import { Navigation, Pagination} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); 
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);


  return (
    <section className='hero'>
        <Swiper
            loop={true}
            slidesPerView={1}
            speed={800}
            navigation
            pagination={isMobile ? { clickable: true } : false} 
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination]}
        >
            {heroImages.map((image) => (
            <SwiperSlide
               key={image.id}
               className='hero__slide-item'
            >
            <img 
                className='hero__slide-image'
                src={image.imageUrl} 
                alt={image.alt} 
            />
            </SwiperSlide>
            ))}
       </Swiper>
    </section>
  )
}
