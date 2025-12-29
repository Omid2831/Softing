import React from 'react'
import BannerActionButton from './components/BannerActionButton';
import PlayOverlay from './components/PlayOverlay';

const BannerContextLeft = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl md:text-5xl mb-6">
                We're Building <span className="text-blue-400">Software</span> <br /> For You
            </h1>
            <p className="text-gray-600 mb-8">
                Celebrated delightful an especially increasing instrument am. <br />
                Indulgence contrasted sufficient to unpleasant in in insensible favourable. <br />
                Latter remark hunted enough vulgar say man. <br />
                Sitting hearted on it without me.
            </p>
            <div className='flex flex-row gap-2 px-6 py-4'>
                <BannerActionButton />
                <PlayOverlay />
            </div>
        </div>
    )
}

export default BannerContextLeft