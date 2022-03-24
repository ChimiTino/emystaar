import React, {useRef} from 'react'

function ContactBox({focusRender}) {
    return (
        <div className='info-container'>
         <div className='contact-container'>
      <div className='contact-box'>
      <form  className='contact-info'  action="https://formsubmit.co/3d408a5325b9401c27ffaf9a79f32bfb" method="POST" >
        <h2>Contact Us</h2>
        <div className='input-container'>
        <input ref={focusRender} type="text" name='Name' placeholder='Name' required/>
        <input type="email" name='Email' placeholder='Email' required/>
        <input type="tel-number" name='Number' placeholder='Number' required/>
        <input type="text" name='Service' placeholder="Type of service e.g 'Day Nursing'" required/>
        <textarea className='message' type='message' name='Message' placeholder='Message (Optional)'/>
        <button type="submit">Send</button>
        </div>
    </form>
    </div>
    </div>

        <div className='niight-nursing'>
            
        </div>
        <div className='niight-nursing'>
            
        </div>
        <div className='niight-nursing'>
            
        </div>

       
       </div>
    )
}

export default ContactBox
