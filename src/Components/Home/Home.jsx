import React, {useEffect} from 'react'

//Imported Images ===>
import video from '../../assets/video.mp4'
import aeroplane from '../../assets/takeOff.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='container mx-auto pt-40 pb-8 flex flex-col items-center gap-8'>
      <div 
        data-aos="fade-up" 
        data-aos-duration="2500" 
        className="text-center"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blackColor leading-10 md:leading-[4rem] w-full md:w-4/5 lg:w-3/5 mx-auto">
          Create Ever-lasting Memories With Us
        </h1>
      </div>

      <div 
        data-aos="fade-up" 
        data-aos-duration="2500" 
        className="w-full flex justify-center items-center relative"
      >
        <div className="w-full md:w-4/5 lg:w-[90%] mx-auto">
          <video 
            src={video} 
            autoPlay 
            muted 
            loop 
            className="w-full h-auto rounded-[10rem] object-cover"
          />
        </div>
        <img 
          src={aeroplane} 
          alt="Airplane takeoff" 
          className="absolute w-full md:w-[95%] lg:w-[90%] top-[-8%] md:top-[-10%] lg:top-[-30%] transition-all duration-300"
        />
      </div>
    </div>
  )
}

export default Home