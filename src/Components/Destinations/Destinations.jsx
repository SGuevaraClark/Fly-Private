import React, {useEffect} from 'react'

//Imported Destination Images ====>
import paris from '../../assets/paris.jpg'
import NewYork from '../../assets/new-york.png'
import london from '../../assets/london.png'
import dubai from '../../assets/dubai.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const destinations = [
  {
    id: 1,
    image: NewYork,
    name: 'New York',
    description: 'Business hub with exclusive access to Teterboro',
    flightTime: '2-6 hours from most US cities'
  },
  {
    id: 2,
    image: paris,
    name: 'Paris',
    description: 'Luxury shopping and fine dining in the City of Light',
    flightTime: '7 hours from NYC, 3 hours from London'
  },
  {
    id: 3,
    image: london,
    name: 'London',
    description: 'Global finance center with premium amenities',
    flightTime: '7.5 hours from NYC, 3 hours from Paris'
  },
  {
    id: 4,
    image: dubai,
    name: 'Dubai',
    description: 'Ultimate luxury experience in the desert metropolis',
    flightTime: '12 hours from NYC, 7 hours from London'
  }
]

const Destinations = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div id="destinations" className='section bg-white'>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-12">
          <span className="section-subtitle">Jet Away</span>
          <h2 
            data-aos="fade-up" 
            data-aos-duration="2000"
            className="section-title-center"
          >
            Popular Private Jet Destinations
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Discover the most sought-after locations accessible by our luxury fleet, with simplified arrivals and VIP handling at all destinations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map(({id, image, name, description, flightTime}) => (
            <div 
              key={id}
              data-aos="fade-up" 
              data-aos-duration="2000"
              data-aos-delay={id * 100} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Destination Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={image} 
                  alt={`${name} - Private Jet Destination`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-dark bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-dark to-transparent">
                  <h3 className="font-semibold text-light text-xl">{name}</h3>
                </div>
              </div>

              {/* Destination Details */}
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">{description}</p>
                <div className="flex items-center text-sm text-primary font-medium">
                  <span className="mr-2">✈</span>
                  <span>{flightTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Destinations 