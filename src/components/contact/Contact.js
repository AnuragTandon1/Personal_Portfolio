import React from 'react'
import './contact.css'
import a1 from '../../assets/walmart.png'
import a2 from '../../assets/microsoft.png'
import a3 from '../../assets/facebook.png'
import a4 from '../../assets/adobe.png'
import i1 from '../../assets/facebook-icon.png'
import i2 from '../../assets/instagram.png'
import i3 from '../../assets/youtube.png'
import i4 from '../../assets/twitter.png'
const Contact = () => {
  return (
   <section id='contactPage'>
   <div id='client'>
    <h1 className='contactPageTitle'>My Clients</h1>
    <p className='clientDesc'>I have had the opportunity to work with a diverse group of companies.
Some of the notable companies I have worked with includes</p>
<div className='clientImgs'>
    <img src={a1} alt='' className='clientImg' />
    <img src={a2} alt='' className='clientImg' />
    <img src={a3} alt='' className='clientImg' />
    <img src={a4} alt='' className='clientImg' />
</div>
   </div>
   <div id='contact'>
    <h1 className='contactPageTitle'>Contact Me</h1>
    <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
    <form className='contactForm'>
        <input type='text' className='name' placeholder='Your Name'  />
        <input type='email' className='email' placeholder='Your Email'  />
        <textarea className='msg' name='message' rows="5" placeholder='Your Message' />
        <button type='submit' value="Send" className='submitBtn'>Submit</button>
        <div className='links'>
         <img  src={i1} alt='' className='link'/>
         <img  src={i2} alt='' className='link'/>
         <img  src={i3} alt='' className='link'/>
         <img  src={i4} alt='' className='link'/>
        </div> 
    </form>
    
   </div>
   </section>
  )
}

export default Contact
