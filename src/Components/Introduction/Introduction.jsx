import React, {useEffect} from 'react'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Introduction = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div id="introduction" className="py-16 bg-light">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              data-aos="fade-up" 
              data-aos-duration="1500"
              className="text-2xl md:text-3xl font-bold text-blackColor mb-6"
            >
              Redefining Private Aviation
            </h2>
            <p 
              data-aos="fade-up" 
              data-aos-duration="1500"
              data-aos-delay="200"
              className="text-greyText text-base leading-relaxed mb-6"
            >
              Our fleet of meticulously maintained aircraft offers unmatched comfort, privacy, and flexibility. Whether you're traveling for business or leisure, we ensure a seamless experience from takeoff to landing.
            </p>
            <p 
              data-aos="fade-up" 
              data-aos-duration="1500"
              data-aos-delay="300"
              className="text-greyText text-base leading-relaxed"
            >
              With access to over 3,000 airports worldwide, we can take you closer to your final destination than commercial airlines, saving you valuable time.
            </p>
          </div>
          <div 
            className="aspect-video bg-secondary rounded-lg shadow-lg"
            data-aos="fade-left" 
            data-aos-duration="1500"
          >
            {/* Placeholder for a luxury jet interior image */}
            <div className="w-full h-full flex items-center justify-center text-primary font-light">
              Luxury Jet Interior Image
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction 