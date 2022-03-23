import React, {useState} from 'react'

import TopicDesc from '../TopicDesc/TopicDesc'

function Description() {
    
    const [hover1, setHover1] = useState(false)
    const onHover1 = () =>{
        setHover1(!hover1)
    }
    const [hover2, setHover2] = useState(false)
    const onHover2 = () =>{
        setHover2(!hover2)
    }
    const [hover3, setHover3] = useState(false)
    const onHover3 = () =>{
        setHover3(!hover3)
    }
    const [hover4, setHover4] = useState(false)
    const onHover4 = () =>{
        setHover4(!hover4)
    }
    const[makeAct, setMakeAct]=useState(false);
    const makeActive =()=>{
        setMakeAct('true')
    }









    return (
        
        <>
<div className='serv-descr'>
        <header id='scroll2desc'>
            <h1 className='header'>Our Services</h1>
            
        </header>
        <div className='lines'></div>
     <main className='description' id='scroll2desc'>
         <div className='subs'onMouseEnter={onHover1} onMouseLeave={onHover1}>
             <h1 className={hover1? 'ser-h' : 'ue'} >Office Cleaning</h1>
             <a onClick={makeActive} href='#office' className={hover1? 'read-btn' : 'read'}>Read More</a>
             <img className='ser-img' alt='' src='https://www.officelovin.com/wp-content/uploads/2015/10/Fullscreen-la-8.jpg' />
         

         </div>
         <div className='subs' onMouseEnter={onHover2} onMouseLeave={onHover2}>
             <h1 className={hover2? 'ser-h' : 'ue'}>House Cleaning</h1>
             <a href='#house' className={hover2? 'read-btn' : 'read'}>Read More</a>
             <img className='ser-img' alt='' src='https://th.bing.com/th/id/R.49047ec9251a9fadc3295728c5719d17?rik=4d32nYXvZXwX6Q&riu=http%3a%2f%2fwww.letsbegamechangers.com%2fwp-content%2fuploads%2f2020%2f04%2fClean-House-Pexels.jpg&ehk=GTAGv0ZWL8hbaT0McKqXCMviiXntWJ42j8rDmXQnGQc%3d&risl=&pid=ImgRaw&r=0' />
             
             
         </div> 
         <div className='subs' onMouseEnter={onHover3} onMouseLeave={onHover3}> 
         <h1 className={hover3? 'ser-h' : 'ue'}>Night Nursing</h1>
         <a href='#night' className={hover3? 'read-btn' : 'read'}>Read More</a>
             <img className='ser-img' alt='' src='https://th.bing.com/th/id/R.6355b86f7463e38d9c427f012e796ccc?rik=yCGcUCo8ZunkBA&pid=ImgRaw&r=0'/>
             
             
         </div>
         <div className='subs' onMouseEnter={onHover4} onMouseLeave={onHover4}>
             <h1 className={hover4? 'ser-h' : 'ue'}>Day Nursing</h1>
             <a href='#Day' className={hover4? 'read-btn' : 'read'}>Read More</a>
             <img className='ser-img' alt='' src='https://www.wimbledondaynursery.co.uk/blog/wp-content/uploads/2019/01/Best-Day-Care-Nursery-for-Your-Child-980x600.jpg'/>
             
             
         </div>
         
     </main>
        </div>
        <TopicDesc
        makeAct={makeAct}
        />
        
        </>
    )
}

export default Description
//Amatic SC