import React, {useEffect} from 'react'

//Imported Images
import gridImage from '../../assets/Images-Grid.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div className='container mx-auto py-16'>
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-8">
          <span className="uppercase text-xs tracking-[0.8rem] text-blackColor block mb-2">
            travel support
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-blackColor mb-4">
            Plan your travel with confidence
          </h2>
          <p className="text-sm text-greyText">
            Find help with booking and travel plans, see what to expect along the journey!
          </p>
        </div>

        {/* Info Grid Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Text Column */}
          <div className="grid gap-6">
            {/* Info Card 1 */}
            <div 
              data-aos="fade-down" 
              data-aos-duration="2500" 
              className="flex gap-4"
            >
              <span className="bg-primaryColor text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                01
              </span>
              <div>
                <h4 className="text-lg font-bold text-blackColor mb-2">
                  Travel requirements for Dubai
                </h4>
                <p className="text-sm text-greyText leading-relaxed">
                  Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
                </p>
              </div>
            </div>

            {/* Info Card 2 */}
            <div 
              data-aos="fade-down" 
              data-aos-duration="3500" 
              className="flex gap-4"
            >
              <span className="bg-colorOne text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                02
              </span>
              <div>
                <h4 className="text-lg font-bold text-blackColor mb-2">
                  Multi-risk travel insurance
                </h4>
                <p className="text-sm text-greyText leading-relaxed">
                  Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
                </p>
              </div>
            </div>

            {/* Info Card 3 */}
            <div 
              data-aos="fade-down" 
              data-aos-duration="4500" 
              className="flex gap-4"
            >
              <span className="bg-colorTwo text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                03
              </span>
              <div>
                <h4 className="text-lg font-bold text-blackColor mb-2">
                  Travel requirements by destination
                </h4>
                <p className="text-sm text-greyText leading-relaxed">
                  Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
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
              alt="Travel support grid" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support