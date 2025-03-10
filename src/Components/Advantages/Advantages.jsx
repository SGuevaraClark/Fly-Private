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
    <div id="advantages" className='section bg-white'>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-12">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 
            data-aos="fade-right" 
            data-aos-duration="2000"
            className="section-title-center"
          >
            Why Choose Private Jet Charter
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury air travel with benefits that commercial flights simply cannot match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Time Efficiency Card */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000" 
            className="luxury-card"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
              <AiOutlinePhone className='text-white text-2xl'/>
            </div>
            <h3 className="text-xl font-semibold text-dark mb-3">Time Efficiency</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Skip long security lines and boarding processes. Fly directly to your destination with access to over 5,000 airports worldwide, saving hours of travel time.
            </p>
          </div>

          {/* Ultimate Flexibility Card */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000"
            data-aos-delay="100" 
            className="luxury-card"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
              <AiOutlineGlobal className='text-white text-2xl'/>
            </div>
            <h3 className="text-xl font-semibold text-dark mb-3">Ultimate Flexibility</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Depart on your schedule, not the airlines'. Change your itinerary, departure time, or even destination with minimal notice as your plans evolve.
            </p>
          </div>

          {/* Unmatched Privacy Card */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000"
            data-aos-delay="200" 
            className="luxury-card"
          >
            <div className="w-12 h-12 rounded-full bg-secondary border border-primary flex items-center justify-center mb-4">
              <AiOutlineMenu className='text-primary text-2xl'/>
            </div>
            <h3 className="text-xl font-semibold text-dark mb-3">Unmatched Privacy</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Conduct meetings, work uninterrupted, or simply relax in a private cabin. Enjoy confidentiality and security throughout your journey with vetted crew members.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages 