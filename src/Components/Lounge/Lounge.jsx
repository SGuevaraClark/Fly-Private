import React, {useEffect} from 'react'

// Imported Images =======>
import imageGrid from '../../assets/images-Grid2.png'
// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {  
    useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div className='py-16 bg-white'>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div 
            data-aos="fade-left" 
            data-aos-duration="2500" 
            className="order-2 md:order-1"
          >
            <img 
              src={imageGrid} 
              alt="Lounge services grid" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="order-1 md:order-2">
            <h2 
              data-aos="fade-down" 
              data-aos-duration="2500"
              className="text-2xl md:text-3xl font-bold text-blackColor mb-8"
            >
              Unaccompanied Minor Lounge
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Help through the airport */}
              <div 
                data-aos="fade-down" 
                data-aos-duration="2500" 
                className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-blackColor mb-2">
                  Help through the airport
                </h3>
                <p className="text-sm text-greyText leading-relaxed">
                  You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                </p>
              </div>

              {/* Priority Boarding */}
              <div 
                data-aos="fade-down" 
                data-aos-duration="2500" 
                className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-blackColor mb-2">
                  Priority Boarding
                </h3>
                <p className="text-sm text-greyText leading-relaxed">
                  You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                </p>
              </div>

              {/* Care on the flight */}
              <div 
                data-aos="fade-down" 
                data-aos-duration="2500" 
                className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-blackColor mb-2">
                  Care on the flight
                </h3>
                <p className="text-sm text-greyText leading-relaxed">
                  You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                </p>
              </div>

              {/* Chauffeur-drive service */}
              <div 
                data-aos="fade-down" 
                data-aos-duration="2500" 
                className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-blackColor mb-2">
                  Chauffeur-drive service
                </h3>
                <p className="text-sm text-greyText leading-relaxed">
                  You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lounge