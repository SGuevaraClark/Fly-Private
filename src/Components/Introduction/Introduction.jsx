import React, {useEffect} from 'react'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Introduction = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div id="introduction" className="section bg-light">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              data-aos="fade-up" 
              data-aos-duration="1500"
            >
              Redefining Private Aviation
            </h2>
            <p 
              data-aos="fade-up" 
              data-aos-duration="1500"
              data-aos-delay="200"
              className="my-6"
            >
              Our fleet of meticulously maintained aircraft offers unmatched comfort, privacy, and flexibility. Whether you're traveling for business or leisure, we ensure a seamless experience from takeoff to landing.
            </p>
            <p 
              data-aos="fade-up" 
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              With access to over 3,000 airports worldwide, we can take you closer to your final destination than commercial airlines, saving you valuable time.
            </p>
          </div>
          <div 
            className="aspect-video bg-secondary"
            data-aos="fade-left" 
            data-aos-duration="1500"
          >
            {/* Placeholder for a luxury jet interior image */}
            <div className="w-full h-full flex items-center justify-center text-muted">
              Luxury Jet Interior Image
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction 