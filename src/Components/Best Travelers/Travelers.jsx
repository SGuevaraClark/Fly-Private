import React , {useEffect} from 'react'

//Imported Destination Images ====>
import paris from '../../assets/paris.jpg'
import NewYork from '../../assets/NewYork.png'
import london from '../../assets/london.png'
import dubai from '../../assets/dubai.png'

//Imported Travelers Images ====>
import traveler1 from '../../assets/user (1).png'
import traveler2 from '../../assets/user (2).png'
import traveler3 from '../../assets/user (3).png'
import traveler4 from '../../assets/user (4).png'

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

   
     useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div className='travelers container section'>
        <div className="sectionContainer">
            <h2 data-aos="fade-down" data-aos-duration="2500">Top travelers of this month!</h2>

            <div className="travelersContainer grid">
                {
                    travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) =>{
                        return(
                            <div data-aos="fade-up" data-aos-duration="2500" key={id} className="singleTraveler">
                                <img src={destinationImage} className='destinationImage'/>
                                <div className="travelerDetails">
                                    <div className="travelerPicture">
                                        <img src={travelerImage} className='travelerImage'/>
                                    </div>
                                    <div className="travelerName">
                                        <span>{travelerName}</span>
                                        <p>{socialLink}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Travelers