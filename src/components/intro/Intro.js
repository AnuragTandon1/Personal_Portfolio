import React from 'react'
import './intro.css'
import c from '../../assets/image.png'
import bi from '../../assets/hireme.png'
import {Link} from 'react-scroll'
const Intro = () => {
  return (
   <section id='intro'>
    <div className='introcontent'>
   <span className='hello'>Hello,</span>
   <span className='introText'>I'm <span className='introName'>Anurag</span><br/>Website designer</span>
   <p className='introPara'>I am a skilled and passionate web designer with experience in creating <br/>visually appealing and user-friendly websites.</p>
   <Link><button className='btn'><img src={bi} alt='' className='bi' />Hire me</button></Link>
    </div>
    <img src={c} alt='bg' className='bg' />

   </section>
  )
}

export default Intro
