import React, {useRef} from 'react'

function ContactBox({focusRender}) {
    return (
        <div className='info-container'>
         <div className='contact-container'>
      <div className='contact-box'>
      <form  className='contact-info'  action="https://formsubmit.co/tinotendachibi33@gmail.com" method="POST" >
        <h2>Contact Us</h2>
        <div className='input-container'>
        <input ref={focusRender} type="text" name='name' placeholder='Name' required/>
        <input type="email" name='email' placeholder='Email' required/>
        <input type="tel-number" name='number' placeholder='Number' required/>
        <input type="text" name='service' placeholder="Type of service e.g 'Day Nursing'" required/>
        <textarea className='message' type='message' name='message' placeholder='Message (Optional)'/>
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