import React from 'react'
import './works.css'
import a1 from '../../assets/portfolio-1.png'
import a2 from '../../assets/portfolio-2.png'
import a3 from '../../assets/portfolio-3.png'
import a4 from '../../assets/portfolio-4.png'
import a5 from '../../assets/portfolio-5.png'
import a6 from '../../assets/portfolio-6.png'
const Works = () => {
  return (
   <section id='works'>
    <h2 className='workTitle'>My Portfolio</h2>
    <span className='workDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
    <div className='worksImgs'>
        <img src={a1} alt='' className='worksImg' />
        <img src={a2} alt='' className='worksImg' />
        <img src={a3} alt='' className='worksImg' />
        <img src={a4} alt='' className='worksImg' />
        <img src={a5} alt='' className='worksImg' />
        <img src={a6} alt='' className='worksImg' />
    </div>
    <button className='workBtn'>See my Projects</button>
   </section>
  )
}

export default Works
