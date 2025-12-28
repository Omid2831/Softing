import React from 'react';
import BannerActionButton from '../BannerActionButton';
import '../../styles/slider-list.css';

const SliderList = () => {
    return (
        <section className='slider-section border-4 border-gray-600'>
            <div className="content flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
                {/* Left: Text */}
                <div className="max-w-xl">
                    <h1 className="font-bold text-3xl md:text-5xl mb-6">
                        We're Building <span className="text-blue-400">Software</span> <br /> For You
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Celebrated delightful an especially increasing instrument am. <br />
                        Indulgence contrasted sufficient to unpleasant in in insensible favourable. <br />
                        Latter remark hunted enough vulgar say man. <br />
                        Sitting hearted on it without me.
                    </p>
                    <BannerActionButton />
                </div>
                {/* Right: Illustration */}
                <div className="mt-10 md:mt-0 md:ml-10">
                    {/* the banner as for the sliders */}
                    <img src="" alt="Banner Illustration" className=" max-w-full" />
                </div>
            </div>

            {/* Wave image at the bottom */}
            <div className="slider-wave">
                <img src="wave-frame.png" alt="wave frame" />
            </div>
        </section>
    );
};

export default SliderList;