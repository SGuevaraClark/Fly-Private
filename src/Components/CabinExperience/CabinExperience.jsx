import React, {useEffect} from 'react'

// Imported Images =======>
import cabinImage from '../../assets/cabinExp.webp'
// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const CabinExperience = () => {  
    useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div id="cabin-experience" className='section bg-light'>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div 
            data-aos="fade-right" 
            data-aos-duration="2000" 
            className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={cabinImage} 
              alt="Luxury private jet interior" 
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* Text Section */}
          <div className="order-1 md:order-2">
            <h2 
              data-aos="fade-up" 
              data-aos-duration="2000"
              className="section-title"
            >
              Exceptional Cabin Experience
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Luxurious Comfort */}
              <div 
                data-aos="fade-up" 
                data-aos-duration="2000" 
                className="luxury-card"
              >
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Luxurious Comfort
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Spacious leather seating, convertible beds, and elegant interiors designed for ultimate comfort and relaxation at 40,000 feet.
                </p>
              </div>

              {/* Gourmet Dining */}
              <div 
                data-aos="fade-up" 
                data-aos-duration="2000"
                data-aos-delay="100" 
                className="luxury-card"
              >
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Gourmet Dining
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Fine dining experience with custom menus prepared by expert chefs, paired with premium wines and spirits of your choice.
                </p>
              </div>

              {/* Advanced Entertainment */}
              <div 
                data-aos="fade-up" 
                data-aos-duration="2000"
                data-aos-delay="200" 
                className="luxury-card"
              >
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Advanced Entertainment
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  High-speed Wi-Fi, satellite communications, and state-of-the-art entertainment systems to keep you connected and entertained.
                </p>
              </div>

              {/* Personalized Service */}
              <div 
                data-aos="fade-up" 
                data-aos-duration="2000"
                data-aos-delay="300" 
                className="luxury-card"
              >
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Personalized Service
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Dedicated cabin crew trained to the highest standards, anticipating your needs and providing discreet, attentive service throughout your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CabinExperience 