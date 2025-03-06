import React, {useEffect} from 'react'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribe = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])  

  return (
    <div className='py-16 bg-gray-50'>
      <div 
        data-aos="fade-up" 
        data-aos-duration="2500" 
        className="container mx-auto px-4 max-w-[1200px] text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blackColor mb-8">
          Subscribe Newsletters & get Latest News
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <input 
            type="email"  
            placeholder='Enter your email address'
            className="w-full sm:flex-1 px-6 py-3 rounded-full border border-gray-300 focus:border-primaryColor focus:outline-none focus:ring-2 focus:ring-primaryColor/20 transition-all duration-300"
          />
          <button className='w-full sm:w-auto px-8 py-3 rounded-full bg-primaryColor text-white font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg'>
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe