import React,{useState} from 'react';
import * as IoIcons from 'react-icons/io'

function FooterCont() {
const [tog, setTog] = useState(false);

const toggle = () =>{
  setTog(!tog)
}
  return (
    <>
    <div className={tog ? 'call-container-act':'call-container'} onMouseEnter={toggle} onMouseLeave={toggle}>
    <div className='call'>
      <IoIcons.IoIosCall/>
      </div>
      <div className={tog ? 'number':'active-no'}>
      <p><a href ='tel:+27 62 825-7338'>Tel: +27 62 825-7338</a></p>
      </div>
      </div>
    
  <div className='footer-container'>
    <div className='reserved'><p> © 2021 Staar . All Rights Reserved.</p><a href='#'> |  Web design by Tinotenda Chibi</a></div>
     
  </div>
  </>
  )
}

export default FooterCont;
