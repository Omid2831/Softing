import { Button } from '@/components/ui/button'
import React from 'react'

const CallToActionButton = () => {
  return (
    <Button className={'w-45 bg-blue-300 border-2 border-blue-300 px-6 py-4 rounded-3xl hover:bg-black hover:text-white hover:border-black font-bold text-md transition-colors delay-100'}>
        Read More
    </Button>
  )
}

export default CallToActionButton