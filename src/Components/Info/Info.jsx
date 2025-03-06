import React, {useEffect} from 'react'

// Imported Icons ===========>
import {RxCalendar} from 'react-icons/rx'
import {BsBookmarkCheck, BsShieldCheck} from 'react-icons/bs'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Info = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])  

  return (
    <div className='py-16 bg-white'>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 
            data-aos="fade-right" 
            data-aos-duration="2500"
            className="text-2xl md:text-3xl font-bold text-blackColor md:max-w-[70%]"
          >
            Travel to make memories all around the world
          </h2>
          <button 
            data-aos="fade-left" 
            data-aos-duration="2500" 
            className='px-6 py-2 rounded-full bg-primaryColor text-white hover:bg-opacity-90 transition-all duration-300'
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Book & Relax Card */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2500" 
            className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-primaryColor flex items-center justify-center mb-4">
              <RxCalendar className='text-white text-2xl'/>
            </div>
            <h3 className="text-xl font-semibold text-blackColor mb-3">Book & Relax</h3>
            <p className="text-greyText text-sm leading-relaxed">
              You can also call airlines from your phone and book a flight ticket.
            </p>
          </div>

          {/* Smart Checklist Card */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="3500" 
            className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-colorOne flex items-center justify-center mb-4">
              <BsShieldCheck className='text-white text-2xl'/>
            </div>
            <h3 className="text-xl font-semibold text-blackColor mb-3">Smart Checklist</h3>
            <p className="text-greyText text-sm leading-relaxed">
              You can also call airlines from your phone and book a flight ticket.
            </p>
          </div>

          {/* Save More Card */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="4500" 
            className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-colorTwo flex items-center justify-center mb-4">
              <BsBookmarkCheck className='text-white text-2xl'/>
            </div>
            <h3 className="text-xl font-semibold text-blackColor mb-3">Save More</h3>
            <p className="text-greyText text-sm leading-relaxed">
              You can also call airlines from your phone and book a flight ticket.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info