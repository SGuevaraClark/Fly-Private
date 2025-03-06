import React, {useEffect} from 'react'

// Imported icons ==========>
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'

//Imported Images ===>
import Logo from '../../assets/logo.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []) 

  return (
    <footer className='bg-white pt-16 pb-8'>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Section */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2500" 
            className="space-y-6"
          >
            <div className="w-32">
              <img src={Logo} alt="Company Logo" className='w-full h-auto'/>
            </div>
            <p className="text-greyText">Your mind should be stronger than your feelings, fly!</p>
            <div className="flex space-x-4">
              <a href="#" className="text-greyText hover:text-primary transition-colors duration-300">
                <TiSocialFacebook className='w-6 h-6'/>
              </a>
              <a href="#" className="text-greyText hover:text-primary transition-colors duration-300">
                <AiOutlineTwitter className='w-6 h-6'/>
              </a>
              <a href="#" className="text-greyText hover:text-primary transition-colors duration-300">
                <AiFillYoutube className='w-6 h-6'/>
              </a>
              <a href="#" className="text-greyText hover:text-primary transition-colors duration-300">
                <FaPinterestP className='w-6 h-6'/>
              </a>
            </div>
          </div>

          {/* Information Links */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2500" 
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-blackColor">Information</h3>
            <ul className="space-y-2">
              {['Home', 'Explore', 'Travel', 'Flight Status', 'Check-In', 'Manage your booking'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-greyText hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Guide Links */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2500" 
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-blackColor">Quick Guide</h3>
            <ul className="space-y-2">
              {['FAQ', 'How to', 'Features', 'Baggage', 'Route Map', 'Our communities'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-greyText hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Queries Links */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2500" 
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-blackColor">Queries</h3>
            <ul className="space-y-2">
              {['Chauffeur', 'Our partners', 'Destination', 'Careers', 'Transportation', 'Programme Rules'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-greyText hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div 
          data-aos="fade-up" 
          data-aos-duration="2500"
          className="border-t border-gray-200 mt-12 pt-8 text-center text-greyText"
        >
          <p>© {new Date().getFullYear()} PrivateJets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer