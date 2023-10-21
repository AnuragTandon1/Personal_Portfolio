import React ,{useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import c from '../../assets/contact.png'
import m from '../../assets/menu.png'
import {Link} from 'react-scroll'
const Navbar = () => {
    const [showState , setShowState] =useState(false)
  return (
    <nav className='navbar'>
      <img src={logo} alt=''  className='logo'/>
      <div className='desktopMenu'>
       <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem '><span className='hh'>Home</span></Link>
       <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'><span className='hh'>About</span></Link>
       <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'><span className='hh'>Portfolio</span></Link>
       <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'><span className='hh'>Client</span></Link>
      </div>
      <button className='desktopMenuBtn' onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior : 'smooth'});
      }}>
      <img src={c} alt='' className='desktopMenuImg' />Contact Me
      </button>
      <img src={m} alt=''  className='mobMenu' onClick={()=>setShowState(!showState)}/>
      <div className='navMenu' style={{display : showState ? 'flex' : 'none'}}>
       <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowState(false)}><span className='hh'>Home</span></Link>
       <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowState(false)}><span className='hh'>About</span></Link>
       <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowState(false)}><span className='hh'>Portfolio</span></Link>
       <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowState(false)}><span className='hh'>Client</span></Link>
       <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowState(false)}><span className='hh'>Contact</span></Link>
      </div>
    </nav>
  )
}

export default Navbar
