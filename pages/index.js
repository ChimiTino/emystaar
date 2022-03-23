import Head from 'next/head'
import { useRef } from 'react'
import Link from 'next/link'
import SlideShow from '../Componets/SlideShow/slideShow'
import ContactBox from '../Componets/ContactBox/ContactBox'
import Description from '../Componets/Descriptions/description'
import Process from '../Componets/Process/process'
import FooterCont from '../Componets/Footer/FooterCont'
import * as BsIcons from 'react-icons/bs'
import DescriptionMedia from '../Componets/DescriptionMedia/DescriptionMedia'
import ContactBo from '../Componets/ContactBo/ContactBo'




export default function Home() {
  const focusRender = useRef()
 
 
  function focus() {
    focusRender.current.focus()
  }

  return (
    <>
      <Head>
        <title>Emystar Night Nursing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Capture.jpg" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
      </Head>
      <div className='slide-con'>
      <nav className='nav-container'>
         <div className='image-container'>
           <Link href='/'><header className='logo'>EmmySt<span>< BsIcons.BsFillStarFill/></span>
           
           r</header></Link>
          
         </div>
         
         <li>
           <Link className='contact' href='/'>Home </Link>
           <Link href='#form' >Contact Us</Link>
         </li>
       </nav>
       
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
       
       
       <div className='main-info-container'>
         <h1 className='h1-header'> Dont fear EmmyStar is here</h1>
           <div className='line'></div>
           <p>
           No matter how big or small your needs are EmmyStar provides professional and affordable services. We provide a wide range of services that include Day and Night nursing, Office cleaning and House cleaning  
           </p>
         
         
         
       </div><button onClick={focus} className='getSt' >Get Started</button>
       <ContactBox focusRender={focusRender}/></div>
       <Description/>
       <DescriptionMedia/>
       <Process/>
       <ContactBo/>
       <FooterCont/>
       
       

       
    
      
    </>
  )
}
