'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image'
import'./Hero.scss'
import { heroImages } from '../../data'
import { Navigation} from 'swiper/modules';
import 'swiper/css/navigation';



export default function Hero() {
  return (
    <div className='hero'>
        <Swiper
            loop={true}
            slidesPerView={1}
            speed={800}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
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
    </div>
  )
}
