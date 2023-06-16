import React from 'react'
import './infinite.css'
import scroll1 from './scroll-1.png'
import scroll2 from './scroll-2.png'
import scroll3 from './scroll-3.png'
import scroll4 from './scroll-4.png'

function InfiniteScroll() {
  return (
    <div class="scroll">
    <div class="m-scroll">
        <span className='scrollitem'><img src={scroll1} alt=''/></span>
        <span className='scrollitem'><img src={scroll2} alt=''/></span>
        <span className='scrollitem'><img src={scroll3} alt=''/></span>
        <span className='scrollitem'><img src={scroll4} alt=''/></span>
    </div>
    </div>

  )
}

export default InfiniteScroll