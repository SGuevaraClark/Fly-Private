import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

// Imported Icons
import {AiOutlinePhone, AiOutlineGlobal, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

//Imported Images ===>
import Logo from '../../assets/flyprivatelogo.png'

const Navbar = () => {
  // Get current location for context awareness
  const location = useLocation();
  const isBlogPage = location.pathname.includes('/blog');
  
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
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items - updated to match site content
  const navItems = ['Home', 'Services', 'Destinations', 'Why Us']

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isBlogPage ? 'bg-light shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container">
        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="z-20">
            <img src={Logo} alt="PrivateJets Logo" className="h-12 md:h-16" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a 
                    href={isBlogPage ? 
                      (item === 'Home' ? '/' : `/#${item.toLowerCase().replace(/\s+/g, '-')}`) : 
                      `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`text-sm font-light uppercase tracking-widest transition-colors hover:opacity-80 ${
                      isScrolled || isBlogPage ? 'text-dark hover:text-primary' : 'text-light hover:text-primary'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <a 
              href={isBlogPage ? '/#search' : '#search'}
              className={`btn-primary text-sm font-light tracking-wider py-2.5 px-7 ml-4 transition-all duration-300 hover:shadow-lg ${
                isScrolled || isBlogPage ? '' : 'border border-light'
              }`}
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden z-20 text-2xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <AiOutlineClose className={isScrolled || isBlogPage ? 'text-dark' : 'text-light'} />
            ) : (
              <AiOutlineMenu className={isScrolled || isBlogPage ? 'text-dark' : 'text-light'} />
            )}
          </button>

          {/* Mobile Menu */}
          <div className={`fixed inset-0 bg-dark bg-opacity-95 z-10 flex flex-col justify-center items-center transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            <nav className="w-full max-w-md px-6">
              <ul className="flex flex-col gap-6 text-center">
                {navItems.map((item) => (
                  <li key={item}>
                    <a 
                      href={isBlogPage ? 
                        (item === 'Home' ? '/' : `/#${item.toLowerCase().replace(/\s+/g, '-')}`) : 
                        `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-xl font-light tracking-widest text-light hover:text-primary block py-2 border-b border-light border-opacity-20"
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Mobile CTA */}
              <div className="mt-12">
                <a 
                  href={isBlogPage ? '/#search' : '#search'}
                  className="btn-primary w-full block text-center py-4 font-light tracking-wider hover:shadow-lg transition-all duration-300" 
                  onClick={toggleMenu}
                >
                  Request a Quote
                </a>
              </div>
              
              <div className="mt-12 flex justify-center gap-6">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-light hover:text-primary font-light tracking-wide">
                  <AiOutlinePhone className="text-lg" /> +34 661 088 250
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar