import React from 'react'

// Imported icons ==========>
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {HiOutlinePhone, HiOutlineMail} from 'react-icons/hi'
import {TiSocialFacebook} from 'react-icons/ti'
import {FaLinkedinIn} from 'react-icons/fa'

//Imported Images ===>
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-[1200px]">
        
        {/* Row 1: Sky Blog and Contact, centered */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-8">
          {/* Sky Blog */}
          <div className="flex gap-6">
            <span className="text-gray-400 text-sm">Sky Blog:</span>
            {['Destinations', 'Technology', 'News'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-gray-500 text-sm hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Contact */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+12345678901" className="text-gray-500 text-sm hover:text-primary flex items-center gap-2">
              <HiOutlinePhone className="text-primary" /> +1 (234) 567-8901
            </a>
            <a href="mailto:charter@privatejet.com" className="text-gray-500 text-sm hover:text-primary flex items-center gap-2">
              <HiOutlineMail className="text-primary" /> charter@privatejet.com
            </a>
          </div>
        </div>
        
        {/* Row 2: Social Media */}
        <div className="flex justify-center gap-6 my-8">
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition-all duration-300">
            <TiSocialFacebook className="w-5 h-5" />
          </a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition-all duration-300">
            <AiOutlineTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition-all duration-300">
            <AiOutlineInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition-all duration-300">
            <FaLinkedinIn className="w-4 h-4" />
          </a>
        </div>
        
        {/* Row 3: Copyright */}
        <div className="text-center text-gray-400 text-xs pt-4 border-t border-gray-100">
          © 2025 PrivateJets
        </div>
        
      </div>
    </footer>
  )
}

export default Footer