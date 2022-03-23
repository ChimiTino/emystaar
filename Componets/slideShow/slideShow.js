import React from 'react'

import * as BsIcons from 'react-icons/bs'



function SlideShow() { 
    return (
        <>
       <div className='slider' >
        <div className ="slider-container"  interval={10000}>
            <div>
          <video src='/ivri.jpg.mp4' autoPlay loop muted  className='slide'   />
         </div>
         </div> 
         <a href='#scroll2desc' className='ser-but'>Our Services 
         <div className='icon2'>< BsIcons.BsChevronCompactDown/></div>
         </a>
      </div>
        </>
        
    )
}

export default SlideShow
