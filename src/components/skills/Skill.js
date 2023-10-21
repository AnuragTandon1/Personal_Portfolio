import React from 'react'
import './skill.css'
import ui from '../../assets/ui-design.png'
import wd from '../../assets/website-design.png'
import ad from '../../assets/app-design.png'
const Skill = () => {
  return (
    <section id='skill'>
   <span className='skillTitle'>What I do</span>
   <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
   <div className='skillBars'>
    <div className='skillBar'>
        <img src={ui} alt='' className='skillBarImage' />
        <div className='skillBarTest'>
            <h2>UI/UX Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
        </div>
    </div>
    <div className='skillBar'>
        <img src={wd} alt='' className='skillBarImage' />
        <div className='skillBarTest'>
            <h2>Website Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
        </div>
    </div>
    <div className='skillBar'>
        <img src={ad} alt='' className='skillBarImage' />
        <div className='skillBarTest'>
            <h2>App Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
        </div>
    </div>
   </div>
    </section>
  )
}

export default Skill
