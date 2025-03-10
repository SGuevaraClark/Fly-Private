import React, {useEffect} from 'react'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])  

  return (
    <div id="contact" className='py-16 bg-light'>
      <div 
        data-aos="fade-up" 
        data-aos-duration="2500" 
        className="container mx-auto px-4 max-w-[1200px] text-center"
      >
        <span className="uppercase text-xs tracking-[0.8rem] text-blackColor block mb-2">
          stay connected
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-blackColor mb-4">
          Join Our VIP Flight List
        </h2>
        <p className="text-base text-greyText max-w-2xl mx-auto mb-8">
          Receive exclusive offers, empty leg notifications, and personalized flight recommendations tailored to your travel preferences
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <input 
            type="email"  
            placeholder='Enter your email address'
            className="w-full sm:flex-1 px-6 py-3 rounded-full border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
          />
          <button className='w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg'>
            Request VIP Access
          </button>
        </div>
        
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Direct Inquiries</h3>
            <p className="text-sm text-greyText">
              <a href="tel:+12345678901" className="text-primary hover:underline">+1 (234) 567-8901</a>
            </p>
            <p className="text-sm text-greyText">
              <a href="mailto:charter@privatejet.com" className="text-primary hover:underline">charter@privatejet.com</a>
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Charter Support</h3>
            <p className="text-sm text-greyText">
              Available 24/7 for personalized assistance with flight planning and special requests
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
            <p className="text-sm text-greyText">
              Mon-Fri: 24 Hours<br />
              Sat-Sun: 24 Hours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 