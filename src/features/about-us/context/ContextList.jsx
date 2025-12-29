import React from 'react'
import CallToActionButton from '../components/CallToActionButton';
import FooterContext from './FooterContext';
import HeaderContext from './HeaderContext';

const ContextList = () => {
  return (
    <div className='flex flex-col px-3 py-6'>
      {/** context left - heading and text */}
      <HeaderContext />

      {/** Call to action button */}
      <CallToActionButton />

      {/** Head breaker  */}
      <hr className='mt-6 border-0.5 border-gray-300' />

      {/** context right - footer text */}
      <FooterContext />
    </div>
  )
}

export default ContextList