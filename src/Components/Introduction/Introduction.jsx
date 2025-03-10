import React, {useEffect} from 'react'

//Imported Images
import introJet from '../../assets/introJet.jpeg'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Introduction = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div id="introduction" className="section bg-light">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              data-aos="fade-up" 
              data-aos-duration="2000"
              className="section-title"
            >
              Redefining Private Aviation
            </h2>
            <p 
              data-aos="fade-up" 
              data-aos-duration="2000"
              data-aos-delay="200"
              className="text-gray-600 text-base leading-relaxed mb-6"
            >
              Our fleet of meticulously maintained aircraft offers unmatched comfort, privacy, and flexibility. Whether you're traveling for business or leisure, we ensure a seamless experience from takeoff to landing.
            </p>
            <p 
              data-aos="fade-up" 
              data-aos-duration="2000"
              data-aos-delay="300"
              className="text-gray-600 text-base leading-relaxed"
            >
              With access to over 3,000 airports worldwide, we can take you closer to your final destination than commercial airlines, saving you valuable time.
            </p>
          </div>
          <div 
            className="rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-left" 
            data-aos-duration="2000"
          >
            <img 
              src={introJet} 
              alt="Luxury private jet interior"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction 