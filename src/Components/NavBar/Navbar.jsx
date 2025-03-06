import React, {useState} from 'react'

// Imported Icons
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'

//Imported Images ===>
import Logo from '../../assets/logo.png'

const Navbar = () => {
  // Toggle navbar menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Header background on scroll
  const [isScrolled, setIsScrolled] = useState(false)
  
  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }
  
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='flex flex-col fixed w-full z-50'>
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-secondary p-4">
        <div>
          <SiConsul className='text-xl cursor-pointer hover:text-primary transition-colors'/>
        </div>
        
        <div className='hidden md:flex gap-6'>
          <li className='flex items-center gap-2 text-sm text-textColor hover:text-primary hover:underline cursor-pointer'>
            <BsPhoneVibrate className='text-lg'/> Support
          </li>
          <li className='flex items-center gap-2 text-sm text-textColor hover:text-primary hover:underline cursor-pointer'>
            <AiOutlineGlobal className='text-lg'/> Languages
          </li>
        </div>
        
        <div className='flex gap-4'>
          <span className="text-sm cursor-pointer hover:text-primary hover:font-bold transition-all">Sign In</span>
          <span className="text-sm cursor-pointer hover:text-primary hover:font-bold transition-all">Sign Up</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`flex justify-between items-center p-6 transition-all duration-300 ${
        isScrolled ? 'bg-secondary shadow-md' : ''
      }`}>
        {/* Logo */}
        <div className="w-20">
          <img src={Logo} alt="Logo" className='w-full'/>
        </div>

        {/* Mobile Menu */}
        <div className={`${
          isMenuOpen 
            ? 'absolute top-full right-1/2 translate-x-1/2 w-4/5 md:static md:translate-x-0 md:w-auto' 
            : 'absolute top-full right-[-50%] md:static md:right-0'
        } bg-secondary md:bg-transparent p-6 md:p-0 rounded-lg md:rounded-none shadow-lg md:shadow-none border-3 border-white md:border-none transition-all duration-400 z-20`}>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-center md:text-left">
            <li onClick={() => setIsMenuOpen(false)} className="py-2 md:py-0 px-2 text-sm font-bold text-textColor hover:text-primary cursor-pointer">Home</li>
            <li onClick={() => setIsMenuOpen(false)} className="py-2 md:py-0 px-2 text-sm font-bold text-textColor hover:text-primary cursor-pointer">About</li>
            <li onClick={() => setIsMenuOpen(false)} className="py-2 md:py-0 px-2 text-sm font-bold text-textColor hover:text-primary cursor-pointer">Offers</li>
            <li onClick={() => setIsMenuOpen(false)} className="py-2 md:py-0 px-2 text-sm font-bold text-textColor hover:text-primary cursor-pointer">Seats</li>
            <li onClick={() => setIsMenuOpen(false)} className="py-2 md:py-0 px-2 text-sm font-bold text-textColor hover:text-primary cursor-pointer">Destinations</li>
          </ul>
          
          <button onClick={() => setIsMenuOpen(false)} className='md:hidden mt-4 w-full py-2 px-6 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors'>
            Contact
          </button>
        </div>

        {/* Desktop Contact Button */}
        <button className='hidden md:block py-2 px-6 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors'>
          Contact
        </button>

        {/* Mobile Menu Toggle */}
        <div onClick={toggleMenu} className="md:hidden cursor-pointer">
          <CgMenuGridO className='text-3xl text-black'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar