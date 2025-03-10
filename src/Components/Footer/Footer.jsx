import React, {useEffect} from 'react'

// Imported icons ==========>
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'
import {HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker} from 'react-icons/hi'

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
    <footer className='bg-gradient-to-b from-white to-gray-50 pt-24 pb-8 border-t border-gray-100'>
      <div className="container mx-auto px-4 max-w-[1200px]">
  
        {/* Main Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 mb-16">
          {/* Contact Info */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000" 
            className="space-y-6 lg:col-span-1"
          >
            <h3 className="text-lg font-bold text-blackColor relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">Contact</h3>
            
            <div className="flex items-start gap-3">
              <HiOutlineLocationMarker className="text-primary text-xl flex-shrink-0 mt-1" />
              <p className="text-greyText">
                New York LeBourget<br />
                United States
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <HiOutlinePhone className="text-primary text-xl flex-shrink-0" />
              <a href="tel:+12345678901" className="text-greyText hover:text-primary transition-colors">
                +1 (234) 567-8901
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <HiOutlineMail className="text-primary text-xl flex-shrink-0" />
              <a href="mailto:charter@privatejet.com" className="text-greyText hover:text-primary transition-colors">
                charter@privatejet.com
              </a>
            </div>
            
            <div className="flex gap-4 pt-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-greyText hover:bg-primary hover:text-white transition-all duration-300">
                <TiSocialFacebook className='w-5 h-5'/>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-greyText hover:bg-primary hover:text-white transition-all duration-300">
                <AiOutlineTwitter className='w-5 h-5'/>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-greyText hover:bg-primary hover:text-white transition-all duration-300">
                <AiOutlineInstagram className='w-5 h-5'/>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-greyText hover:bg-primary hover:text-white transition-all duration-300">
                <AiOutlineLinkedin className='w-5 h-5'/>
              </a>
            </div>
          </div>

          {/* Get Started Links */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000"
            data-aos-delay="100"
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-blackColor relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">Get Started</h3>
            <ul className="space-y-3">
              {['Book a Jet', 'Charters', 'Price & Cost', 'Jets & Airports'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-greyText hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-70"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000"
            data-aos-delay="200"
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-blackColor relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">Quick Links</h3>
            <ul className="space-y-3">
              {['Why Choose Us', 'VIP Services +', 'Safety & Privacy', 'FAQ & Glossary'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-greyText hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-70"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sky Blog */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000"
            data-aos-delay="300"
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-blackColor relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">Sky Blog</h3>
            <ul className="space-y-3">
              {['Destinations', 'Technology', 'Price & Rate', 'Lifestyle & News'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-greyText hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-70"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trends */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000"
            data-aos-delay="400"
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-blackColor relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">Trends</h3>
            <ul className="space-y-3">
              {['Popular Countries', 'Popular Destinations', 'Popular Routes', 'Popular Jets'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-greyText hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-70"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* Copyright */}
        <div 
       
          className="text-center text-greyText"
        >
          <p>© {new Date().getFullYear()} PrivateJets. All rights reserved.</p>
          <div className="flex justify-center gap-8 mt-4 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer