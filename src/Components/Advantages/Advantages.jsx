import React, {useEffect} from 'react'

// Imported Icons ===========>
import {AiOutlinePhone, AiOutlineGlobal, AiOutlineMenu} from 'react-icons/ai'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Advantages = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])  

  return (
    <div id="advantages" className='py-16 bg-white'>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 
            data-aos="fade-right" 
            data-aos-duration="2500"
            className="text-2xl md:text-3xl font-bold text-blackColor md:max-w-[70%]"
          >
            Why Choose Private Jet Charter
          </h2>
          <a 
            href="#fleet"
            data-aos="fade-left" 
            data-aos-duration="2500" 
            className='px-6 py-2 rounded-full bg-primary text-white hover:bg-opacity-90 transition-all duration-300'
          >
            View Fleet
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Time Efficiency Card */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2500" 
            className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
              <AiOutlinePhone className='text-white text-2xl'/>
            </div>
            <h3 className="text-xl font-semibold text-blackColor mb-3">Time Efficiency</h3>
            <p className="text-greyText text-sm leading-relaxed">
              Skip long security lines and boarding processes. Fly directly to your destination with access to over 5,000 airports worldwide, saving hours of travel time.
            </p>
          </div>

          {/* Ultimate Flexibility Card */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="3500" 
            className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
              <AiOutlineGlobal className='text-white text-2xl'/>
            </div>
            <h3 className="text-xl font-semibold text-blackColor mb-3">Ultimate Flexibility</h3>
            <p className="text-greyText text-sm leading-relaxed">
              Depart on your schedule, not the airlines'. Change your itinerary, departure time, or even destination with minimal notice as your plans evolve.
            </p>
          </div>

          {/* Unmatched Privacy Card */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="4500" 
            className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-secondary border border-primary flex items-center justify-center mb-4">
              <AiOutlineMenu className='text-primary text-2xl'/>
            </div>
            <h3 className="text-xl font-semibold text-blackColor mb-3">Unmatched Privacy</h3>
            <p className="text-greyText text-sm leading-relaxed">
              Conduct meetings, work uninterrupted, or simply relax in a private cabin. Enjoy confidentiality and security throughout your journey with vetted crew members.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages 