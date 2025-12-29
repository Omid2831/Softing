import React from 'react';
import BannerContextLeft from './BannerContextLeft';
import BannerSliderRight from './BannerSliderRight';
import '../../styles/slider-list.css';

const SliderList = () => {
    return (
        <section className='slider-section border-4 border-gray-600'>
            <div className="content flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
                {/* Left: Text */}
                <BannerContextLeft />
                {/* Right: Illustration */}
                <BannerSliderRight />
            </div>

            {/* Wave image at the bottom */}
            <div className="slider-wave">
                <img src="wave-frame.png" alt="wave frame" />
            </div>
        </section>
    );
};

export default SliderList;