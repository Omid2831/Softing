import React from 'react'
import CallToActionButton from '../components/CallToActionButton';
const HeaderContext = () => {
  return (
    <div className='flex flex-col px-3 py-6'>
      <div className='mb-6'>
        <h4 className='font-bold text-md text-blue-300'>STORY ABOUT US</h4>
        <h2 className='text-3xl font-bold'>
          Create your app page
          <br />
          with expert developer
        </h2>
        <p className='text-body text-gray-600 mt-4'>
          Both rest of know draw fond post as. It agreement defective to excellent. Feebly do <br />
          engage of narrow. Extensive repulsive belonging depending if promotion be <br /> zealously as.
          Preference inquietude ask now are dispatched led appearance.
          Small <br /> meant in so doubt hopes.
        </p>
      </div>
      <CallToActionButton />
      
      {/** Head breaker  */}
      <hr className='mt-6 border-0.5 border-gray-300' />
    </div>
  )
}

export default HeaderContext