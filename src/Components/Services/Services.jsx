import React, {useEffect} from 'react'

//Imported Images
import gridImage from '../../assets/Images-Grid.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div id="services" className='py-16 bg-white'>
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Title Section */}
        <div className="text-center mb-12">
          <span className="uppercase text-xs tracking-[0.8rem] text-blackColor block mb-2">
            premier services
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-blackColor mb-4">
            Exceptional Private Jet Experience
          </h2>
          <p className="text-base text-greyText max-w-2xl mx-auto">
            Discover our comprehensive range of private aviation services tailored to your needs
          </p>
        </div>

        {/* Info Grid Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Text Column */}
          <div className="grid gap-8">
            {/* Info Card 1 */}
            <div 
              data-aos="fade-down" 
              data-aos-duration="2500" 
              className="flex gap-4"
            >
              <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                01
              </span>
              <div>
                <h4 className="text-lg font-bold text-blackColor mb-2">
                  On-Demand Charter Flights
                </h4>
                <p className="text-greyText text-base leading-relaxed">
                  Access our fleet of luxury jets available 24/7 to any destination worldwide. Book with as little as 4 hours notice and enjoy complete flexibility with your travel schedule.
                </p>
              </div>
            </div>

            {/* Info Card 2 */}
            <div 
              data-aos="fade-down" 
              data-aos-duration="3500" 
              className="flex gap-4"
            >
              <span className="bg-dark text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                02
              </span>
              <div>
                <h4 className="text-lg font-bold text-blackColor mb-2">
                  Elite Aircraft Fleet
                </h4>
                <p className="text-greyText text-base leading-relaxed">
                  Choose from our diverse fleet of meticulously maintained aircraft, from light jets for short trips to ultra-long-range jets for intercontinental flights. Each aircraft is maintained to the highest safety standards and features luxurious interiors.
                </p>
              </div>
            </div>

            {/* Info Card 3 */}
            <div 
              data-aos="fade-down" 
              data-aos-duration="4500" 
              className="flex gap-4"
            >
              <span className="bg-secondary border border-primary text-primary w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                03
              </span>
              <div>
                <h4 className="text-lg font-bold text-blackColor mb-2">
                  Personalized Flight Experience
                </h4>
                <p className="text-greyText text-base leading-relaxed">
                  From custom catering and premium beverages to cabin configuration and entertainment options, every aspect of your flight is tailored to your preferences. Our dedicated concierge team ensures a seamless, personalized journey.
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div 
            data-aos="fade-left" 
            data-aos-duration="2500" 
            className="mx-auto max-w-md md:max-w-none"
          >
            <img 
              src={gridImage} 
              alt="Luxury private jet services" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 