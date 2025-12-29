import React from 'react'
import HeaderContext from './context/ContextList';
import HighlightCard from './CardList/HighlightCard';

const AboutUs = () => {
    return (
        <section className='container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 border-4 border-dashed max-w-8xl px-15 py-7 mx-auto '>
            {/** context left -  header text */}
            <HeaderContext />
            {/** CardLists */}
            <HighlightCard />
            

        </section>
    )
}

export default AboutUs