import React from 'react'
import SliderList from '@/features/Slider/SliderList'

const HomePage = () => {
    return (
        <div className='min-h-screen border-4 border-dashed border-gray-400'>
            <SliderList />
            <AboutUs />
        </div>
    )
}

export default HomePage