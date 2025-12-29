import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from './data/sliderData';
import 'swiper/css';
import '../../styles/swiper.css';

const BannerSliderRight = () => {
  const { title, intro, services } = data.service;

  return (
    <section className="flex flex-col justify-center w-450 md:w-120 lg:w-full ">
      {/* heading above slider */}
      <div className="mb-6 text-center md:text-left">
        <h2 className="text-md font-sm md:text-md lg:font-bold">{title}</h2>
        <p className="text-gray-600 mt-2 max-w-xl">{intro}</p>
      </div>

      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {services.map((service) => (
          <SwiperSlide
            key={service.id}
            className="flex items-center justify-center w-100"
          >
            <article className="card-banner">
              <img
                src={`${service.icon}`}
                alt={service.title}
              />

              <header className="overlay-context">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </header>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSliderRight;
