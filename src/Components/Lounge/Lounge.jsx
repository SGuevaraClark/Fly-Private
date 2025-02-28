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
    <div className='lounge container section'>
         <div className="sectionContainer grid">
           <div data-aos="fade-left" data-aos-duration="2500" className="imgDiv">
             <img src={imageGrid} alt="" />
           </div>
           <div className="textDiv">
            <h2 data-aos="fade-down" data-aos-duration="2500">Unaccompanied Minor Lounge</h2>

            <div className="grids grid">
                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                    <span className="gridTitle">
                        Help through the airpot
                    </span>
                    <p>
                    You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                    </p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                    <span className="gridTitle">
                        Priority Boarding
                    </span>
                    <p>
                    You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                    </p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                    <span className="gridTitle">
                        Care on the flight
                    </span>
                    <p>
                    You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                    </p>
                </div>

                <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                    <span className="gridTitle">
                        Chauffeur-drive service
                    </span>
                    <p>
                    You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.
                    </p>
                </div>
            </div>
           </div>
         </div>
    </div>
  )
}

export default Lounge