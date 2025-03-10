import React, {useEffect} from 'react'

//Imported Images ===>
import backgroundVideo from '../../assets/background-video.mp4'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

// JSON-LD Schema for SEO
const PrivateJetSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "PrivateJets",
  "description": "Luxury private jet charter services providing unparalleled comfort, privacy, and flexibility for business and leisure travel.",
  "image": "https://example.com/logo.png",
  "url": "https://privatejet.example.com",
  "telephone": "+12345678901",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New York LeBourget",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "US"
  },
  "priceRange": "$$$$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/privatejetscharter",
    "https://www.instagram.com/privatejetscharter",
    "https://www.linkedin.com/company/privatejetscharter",
    "https://twitter.com/privatejetscharter"
  ]
};

const Home = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <>
      {/* Add Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(PrivateJetSchema)}
      </script>
      
      <div id="home" className='min-h-screen flex flex-col'>
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
              data-aos-duration="2000"
              className="text-light mb-6 max-w-4xl"
            >
              Experience Unparalleled Luxury in Private Aviation
            </h1>
            <p 
              data-aos="fade-up" 
              data-aos-duration="2000"
              data-aos-delay="200"
              className="text-light text-xl max-w-2xl mb-10 opacity-90"
            >
              Fly on your terms with our premium private jet charter services to any destination worldwide.
            </p>
            <div 
              data-aos="fade-up" 
              data-aos-duration="2000"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#search" className="btn-primary">Book Your Flight</a>
              <a href="#introduction" className="btn-outline">Discover More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home