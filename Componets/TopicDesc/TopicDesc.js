import React, {useState} from 'react';

function TopicDesc() {
    const [active, setActive] =useState(false);
    const [active1, setActive1] =useState(false);
    const [active2, setActive2] =useState(false);
    const [active3, setActive3] =useState(false);

    const activeSw = () => {
        setActive(!active)
    }
    const activeSw1 = () => {
        setActive1(!active1);
    }
    const activeSw2 = () => {
        setActive2(!active2);
    }
    const activeSw3 = () => {
        setActive3(!active3);
    }
  return (
      <div className='m-background'>
  <div className='topicDesc-cont' >

  <div className='background' onMouseEnter={activeSw} onMouseLeave={activeSw}>
      <div className={ active? 'active-topicDesc':'topicDesc'} id='office' >
        <img className={ active? 'active-topDescImg':'topDescImg'} src='/f.PNG' alt=''/>
        <div className={ active? 'active-desc-cont':'desc-cont'}>
            <h2>Office Cleaning</h2>
            <div className={ active? 'active-desc-line':'desc-line'}></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nihil quisquam maxime quasi? Earum, quibusdam debitis! Cumque facilis quos recusandae a explicabo consequatur fugiat impedit doloribus exercitationem rerum! Rerum, quia!</p>
            <div className={ active? 'active-desc-sline':'desc-sline'}></div>
            <div className={ active? 'active':'side-line'}></div>
            <div className={ active? 'active-circle':'circle'}></div>
            <div className={ active? 'active-circle2':'circle2'}></div>
        </div>    
      </div>
      </div>
      
      <div className='background' onMouseEnter={activeSw1} onMouseLeave={activeSw1}>
      <div className={ active1? 'active-topicDesc':'topicDesc'} id='office' >
        <img className={ active1? 'active-topDescImg':'topDescImg'} src='/Capture.PNG' alt=''/>
        <div className={ active1? 'active-desc-cont':'desc-cont'}>
            <h2>Home Cleaning</h2>
            <div className={ active1? 'active-desc-line':'desc-line'}></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nihil quisquam maxime quasi? Earum, quibusdam debitis! Cumque facilis quos recusandae a explicabo consequatur fugiat impedit doloribus exercitationem rerum! Rerum, quia!</p>
            <div className={ active1? 'active-desc-sline':'desc-sline'}></div>
            <div className={ active1? 'active':'side-line'}></div>
            <div className={ active1? 'active-circle':'circle'}></div>
            <div className={ active1? 'active-circle2':'circle2'}></div>
        </div>    
      </div>
      </div>

      <div className='background' onMouseEnter={activeSw2} onMouseLeave={activeSw2}>
      <div className={ active2? 'active-topicDesc':'topicDesc'} id='office' >
        <img className={ active2? 'active-topDescImg':'topDescImg'} src='d.jpg' alt=''/>
        <div className={ active2? 'active-desc-cont':'desc-cont'}>
            <h2>Night Nursing</h2>
            <div className={ active2? 'active-desc-line':'desc-line'}></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nihil quisquam maxime quasi? Earum, quibusdam debitis! Cumque facilis quos recusandae a explicabo consequatur fugiat impedit doloribus exercitationem rerum! Rerum, quia!</p>
            <div className={ active2? 'active-desc-sline':'desc-sline'}></div>
            <div className={ active2? 'active':'side-line'}></div>
            <div className={ active2? 'active-circle':'circle'}></div>
            <div className={ active2? 'active-circle2':'circle2'}></div>
        </div>    
      </div>
      </div>
      
      <div className='background' onMouseEnter={activeSw3} onMouseLeave={activeSw3}>
      <div className={ active3? 'active-topicDesc':'topicDesc'} id='office' >
        <img className={ active3? 'active-topDescImg':'topDescImg'} src='https://www.daynurseries.co.uk/article_photos/largephotos/1588459.jpg' alt=''/>
        <div className={ active3? 'active-desc-cont':'desc-cont'}>
            <h2>Day Nursing</h2>
            <div className={ active3? 'active-desc-line':'desc-line'}></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla nihil quisquam maxime quasi? Earum, quibusdam debitis! Cumque facilis quos recusandae a explicabo consequatur fugiat impedit doloribus exercitationem rerum! Rerum, quia!</p>
            <div className={ active3? 'active-desc-sline':'desc-sline'}></div>
            <div className={ active3? 'active':'side-line'}></div>
            <div className={ active3? 'active-circle':'circle'}></div>
            <div className={ active3? 'active-circle2':'circle2'}></div>
        </div>    
      </div>
      </div>
      
      
  </div>
 </div> )
}

export default TopicDesc;
