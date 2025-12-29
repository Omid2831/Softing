import React from 'react'
import '../../../../styles/play-overlay.css'
import { FaPlay } from "react-icons/fa";
import { Button } from '@/components/ui/button';

const PlayOverlay = () => {
  return (
    <div>
      <Button className={'play-button px-2 py-4'}>
        <FaPlay />
      </Button>
    </div>
  )
}

export default PlayOverlay