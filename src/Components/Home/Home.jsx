import React, {useEffect} from 'react'

//Imported Images ===>
import backgroundVideo from '../../assets/background-video.mp4'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            src={backgroundVideo} 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-dark bg-opacity-40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 
            data-aos="fade-up" 
            data-aos-duration="1500"
            className="text-light mb-6 max-w-4xl"
          >
            Experience Unparalleled Luxury in Private Aviation
          </h1>
          <p 
            data-aos="fade-up" 
            data-aos-duration="1500"
            data-aos-delay="200"
            className="text-light text-xl max-w-2xl mb-10 opacity-90"
          >
            Fly on your terms with our premium private jet charter services to any destination worldwide.
          </p>
          <div 
            data-aos="fade-up" 
            data-aos-duration="1500"
            data-aos-delay="400"
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#search" className="btn-primary">Book Your Flight</a>
            <a href="#about" className="btn-outline">Discover More</a>
          </div>
        </div>
      </div>
      
      {/* Introduction Section */}
      <div className="section bg-light">
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
    </div>
  )
}

export default Home