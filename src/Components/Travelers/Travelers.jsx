import React, {useEffect} from 'react'

//Imported Destination Images ====>
import paris from '../../assets/paris.jpg'
import NewYork from '../../assets/new-york.png'
import london from '../../assets/london.png'
import dubai from '../../assets/dubai.png'

//Imported Users Images ====>
import traveler1 from '../../assets/user1.png'
import traveler2 from '../../assets/user2.png'
import traveler3 from '../../assets/user3.png'
import traveler4 from '../../assets/user4.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [
  {
    id: 1,
    destinationImage: NewYork,
    travelerImage: traveler2,
    travelerName: 'IsraTech',
    socialLink: '@isratech8'
  },
  {
    id: 2,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'Wilson Lindsey',
    socialLink: '@wilsonlindsey'
  },
  {
    id: 3,
    destinationImage: london,
    travelerImage: traveler3,
    travelerName: 'Nicole Web',
    socialLink: '@nicoleweb'
  },
  {
    id: 4,
    destinationImage: dubai,
    travelerImage: traveler4,
    travelerName: 'Naresh Lamer',
    socialLink: '@nareshlamer'
  }
]

const Travelers = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div className='py-16 bg-white'>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 
          data-aos="fade-down" 
          data-aos-duration="2500"
          className="text-2xl md:text-3xl font-bold text-blackColor text-center mb-12"
        >
          Top travelers of this month!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) => (
            <div 
              key={id}
              data-aos="fade-up" 
              data-aos-duration="2500" 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Destination Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destinationImage} 
                  alt={`${travelerName}'s destination`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Traveler Details */}
              <div className="p-4 flex items-center gap-4">
                {/* Traveler Picture */}
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary">
                  <img 
                    src={travelerImage} 
                    alt={travelerName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Traveler Info */}
                <div>
                  <h3 className="font-semibold text-blackColor">{travelerName}</h3>
                  <p className="text-sm text-greyText">{socialLink}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Travelers