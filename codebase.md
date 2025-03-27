# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Large data files to exclude from AI digest
src/data/airports.json
src/data/airports.csv

```

# .npmrc

```
 
```

# index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/assets/logo.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Experience unparalleled luxury and convenience with our premium private jet charter services. Fly on your terms, to any destination worldwide." />
    <title>PrivateJets | Luxury Charter Services</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

# package.json

```json
{
  "name": "plane",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "aos": "^3.0.0-beta.6",
    "csv-parse": "^5.6.0",
    "react": "^18.2.0",
    "react-datepicker": "^8.1.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.7.1"
  },
  "devDependencies": {
    "@types/react": "^18.0.26",
    "@types/react-dom": "^18.0.9",
    "@vitejs/plugin-react": "^3.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.3.0",
    "vite": "^4.0.0"
  }
}

```

# postcss.config.cjs

```cjs
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
} 
```

# src/App.jsx

```jsx
import { useEffect, useState } from "react";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Introduction from "./Components/Introduction/Introduction";
import Services from "./Components/Services/Services";
import Advantages from "./Components/Advantages/Advantages";
import CabinExperience from "./Components/CabinExperience/CabinExperience";
import Destinations from "./Components/Destinations/Destinations";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import './main.css'

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop scroll={scroll} />
      <Navbar scroll={scroll} />
      <Home />
      <Search />
      <Introduction />
      <Services />
      <Advantages />
      <CabinExperience />
      <Destinations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
```

# src/assets/background-video.mp4

This is a binary file of the type: Binary

# src/assets/cabinExp.webp

This is a binary file of the type: Image

# src/assets/dubai.png

This is a binary file of the type: Image

# src/assets/Images-Grid.png

This is a binary file of the type: Image

# src/assets/Images-Grid2.png

This is a binary file of the type: Image

# src/assets/introJet.jpeg

This is a binary file of the type: Image

# src/assets/logo.png

This is a binary file of the type: Image

# src/assets/london.png

This is a binary file of the type: Image

# src/assets/new-york.png

This is a binary file of the type: Image

# src/assets/paris.jpg

This is a binary file of the type: Image

# src/assets/react.svg

This is a file of the type: SVG Image

# src/assets/services.webp

This is a binary file of the type: Image

# src/assets/takeOff.png

This is a binary file of the type: Image

# src/assets/user1.png

This is a binary file of the type: Image

# src/assets/user2.png

This is a binary file of the type: Image

# src/assets/user3.png

This is a binary file of the type: Image

# src/assets/user4.png

This is a binary file of the type: Image

# src/assets/video.mp4

This is a binary file of the type: Binary

# src/Components/Advantages/Advantages.jsx

```jsx
import React, {useEffect} from 'react'

// Imported Icons ===========>
import {AiOutlinePhone, AiOutlineGlobal, AiOutlineMenu} from 'react-icons/ai'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Advantages = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])  

  return (
    <div id="advantages" className='section bg-white'>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-12">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 
            data-aos="fade-right" 
            data-aos-duration="2000"
            className="section-title-center"
          >
            Why Choose Private Jet Charter
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury air travel with benefits that commercial flights simply cannot match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Time Efficiency Card */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000" 
            className="luxury-card"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
              <AiOutlinePhone className='text-white text-2xl'/>
            </div>
            <h3 className="text-xl font-semibold text-dark mb-3">Time Efficiency</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Skip long security lines and boarding processes. Fly directly to your destination with access to over 5,000 airports worldwide, saving hours of travel time.
            </p>
          </div>

          {/* Ultimate Flexibility Card */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000"
            data-aos-delay="100" 
            className="luxury-card"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
              <AiOutlineGlobal className='text-white text-2xl'/>
            </div>
            <h3 className="text-xl font-semibold text-dark mb-3">Ultimate Flexibility</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Depart on your schedule, not the airlines'. Change your itinerary, departure time, or even destination with minimal notice as your plans evolve.
            </p>
          </div>

          {/* Unmatched Privacy Card */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000"
            data-aos-delay="200" 
            className="luxury-card"
          >
            <div className="w-12 h-12 rounded-full bg-secondary border border-primary flex items-center justify-center mb-4">
              <AiOutlineMenu className='text-primary text-2xl'/>
            </div>
            <h3 className="text-xl font-semibold text-dark mb-3">Unmatched Privacy</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Conduct meetings, work uninterrupted, or simply relax in a private cabin. Enjoy confidentiality and security throughout your journey with vetted crew members.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantages 
```

# src/Components/AirportSearch/AirportSearch.jsx

```jsx
import React, { useState, useEffect, useRef } from 'react';
import airports from '../../data/airports.json';

const AirportSearch = ({ value, onChange, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.length >= 2) {
      const filtered = airports.filter(airport => 
        airport.name.toLowerCase().includes(term.toLowerCase()) ||
        airport.city.toLowerCase().includes(term.toLowerCase()) ||
        airport.iata?.toLowerCase().includes(term.toLowerCase()) ||
        airport.icao?.toLowerCase().includes(term.toLowerCase())
      ).slice(0, 10); // Limit to 10 suggestions
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelect = (airport) => {
    setSearchTerm(airport.name);
    setShowSuggestions(false);
    onChange(airport);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeholder || "Search for airports..."}
        className="w-full p-2 border border-gray-300 rounded text-base outline-none focus:border-primary"
      />
      
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded mt-1 p-0 list-none max-h-[300px] overflow-y-auto z-10 shadow-md">
          {suggestions.map((airport, index) => (
            <li
              key={index}
              onClick={() => handleSelect(airport)}
              className="py-3 px-4 cursor-pointer transition-colors hover:bg-gray-100"
            >
              <div className="font-medium mb-1">{airport.name}</div>
              <div className="text-sm text-gray-500">
                {airport.city}, {airport.country} 
                {airport.iata ? ` (${airport.iata})` : ''}
                {airport.type && ` - ${airport.type}`}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportSearch; 
```

# src/Components/CabinExperience/CabinExperience.jsx

```jsx
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
```

# src/Components/Contact/Contact.jsx

```jsx
import React, {useEffect} from 'react'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])  

  return (
    <div id="contact" className='py-16 bg-light'>
      <div 
        data-aos="fade-up" 
        data-aos-duration="2500" 
        className="container mx-auto px-4 max-w-[1200px] text-center"
      >
        <span className="uppercase text-xs tracking-[0.8rem] text-blackColor block mb-2">
          stay connected
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-blackColor mb-4">
          Join Our VIP Flight List
        </h2>
        <p className="text-base text-greyText max-w-2xl mx-auto mb-8">
          Receive exclusive offers, empty leg notifications, and personalized flight recommendations tailored to your travel preferences
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <input 
            type="email"  
            placeholder='Enter your email address'
            className="w-full sm:flex-1 px-6 py-3 rounded-full border border-gray-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
          />
          <button className='w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg'>
            Request VIP Access
          </button>
        </div>
        
      
      </div>
    </div>
  )
}

export default Contact 
```

# src/Components/Destinations/Destinations.jsx

```jsx
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
```

# src/Components/Footer/Footer.jsx

```jsx
import React, {useEffect} from 'react'

// Imported icons ==========>
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'
import {HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker} from 'react-icons/hi'

//Imported Images ===>
import Logo from '../../assets/logo.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []) 

  return (
    <footer className='bg-gradient-to-b from-white to-gray-50 pt-24 pb-8 border-t border-gray-100'>
      <div className="container mx-auto px-4 max-w-[1200px]">
  
        {/* Main Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 mb-16">
          {/* Contact Info */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000" 
            className="space-y-6 lg:col-span-1"
          >
            <h3 className="text-lg font-bold text-blackColor relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">Contact</h3>
            
            <div className="flex items-start gap-3">
              <HiOutlineLocationMarker className="text-primary text-xl flex-shrink-0 mt-1" />
              <p className="text-greyText">
                New York LeBourget<br />
                United States
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <HiOutlinePhone className="text-primary text-xl flex-shrink-0" />
              <a href="tel:+12345678901" className="text-greyText hover:text-primary transition-colors">
                +1 (234) 567-8901
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <HiOutlineMail className="text-primary text-xl flex-shrink-0" />
              <a href="mailto:charter@privatejet.com" className="text-greyText hover:text-primary transition-colors">
                charter@privatejet.com
              </a>
            </div>
            
            <div className="flex gap-4 pt-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-greyText hover:bg-primary hover:text-white transition-all duration-300">
                <TiSocialFacebook className='w-5 h-5'/>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-greyText hover:bg-primary hover:text-white transition-all duration-300">
                <AiOutlineTwitter className='w-5 h-5'/>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-greyText hover:bg-primary hover:text-white transition-all duration-300">
                <AiOutlineInstagram className='w-5 h-5'/>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-greyText hover:bg-primary hover:text-white transition-all duration-300">
                <AiOutlineLinkedin className='w-5 h-5'/>
              </a>
            </div>
          </div>

          {/* Get Started Links */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000"
            data-aos-delay="100"
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-blackColor relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">Get Started</h3>
            <ul className="space-y-3">
              {['Book a Jet', 'Charters', 'Price & Cost', 'Jets & Airports'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-greyText hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-70"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000"
            data-aos-delay="200"
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-blackColor relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">Quick Links</h3>
            <ul className="space-y-3">
              {['Why Choose Us', 'VIP Services +', 'Safety & Privacy', 'FAQ & Glossary'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-greyText hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-70"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sky Blog */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000"
            data-aos-delay="300"
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-blackColor relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">Sky Blog</h3>
            <ul className="space-y-3">
              {['Destinations', 'Technology', 'Price & Rate', 'Lifestyle & News'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-greyText hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-70"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trends */}
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000"
            data-aos-delay="400"
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-blackColor relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">Trends</h3>
            <ul className="space-y-3">
              {['Popular Countries', 'Popular Destinations', 'Popular Routes', 'Popular Jets'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-greyText hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-70"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* Copyright */}
        <div 
       
          className="text-center text-greyText"
        >
          <p>© {new Date().getFullYear()} PrivateJets. All rights reserved.</p>
          <div className="flex justify-center gap-8 mt-4 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
```

# src/Components/Home/Home.jsx

```jsx
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
```

# src/Components/Introduction/Introduction.jsx

```jsx
import React, {useEffect} from 'react'

//Imported Images
import introJet from '../../assets/introJet.jpeg'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Introduction = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div id="introduction" className="section bg-light">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              data-aos="fade-up" 
              data-aos-duration="2000"
              className="section-title"
            >
              Redefining Private Aviation
            </h2>
            <p 
              data-aos="fade-up" 
              data-aos-duration="2000"
              data-aos-delay="200"
              className="text-gray-600 text-base leading-relaxed mb-6"
            >
              Our fleet of meticulously maintained aircraft offers unmatched comfort, privacy, and flexibility. Whether you're traveling for business or leisure, we ensure a seamless experience from takeoff to landing.
            </p>
            <p 
              data-aos="fade-up" 
              data-aos-duration="2000"
              data-aos-delay="300"
              className="text-gray-600 text-base leading-relaxed"
            >
              With access to over 3,000 airports worldwide, we can take you closer to your final destination than commercial airlines, saving you valuable time.
            </p>
          </div>
          <div 
            className="rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-left" 
            data-aos-duration="2000"
          >
            <img 
              src={introJet} 
              alt="Luxury private jet interior"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction 
```

# src/Components/NavBar/Navbar.jsx

```jsx
import React, {useState, useEffect} from 'react'

// Imported Icons
import {AiOutlinePhone, AiOutlineGlobal, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

//Imported Images ===>
import Logo from '../../assets/logo.png'

const Navbar = () => {
  // Toggle navbar menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Header background on scroll
  const [isScrolled, setIsScrolled] = useState(false)
  
  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items
  const navItems = ['Home', 'Fleet', 'Destinations', 'Services', 'About']

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-light shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container">
        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="z-20">
            <img src={Logo} alt="PrivateJets Logo" className="h-12 md:h-16" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className={`text-sm font-light uppercase tracking-widest transition-colors hover:opacity-80 ${
                      isScrolled ? 'text-dark hover:text-primary' : 'text-light hover:text-primary'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <a 
              href="#search" 
              className={`btn-primary text-sm font-light tracking-wider py-2.5 px-7 ml-4 transition-all duration-300 hover:shadow-lg ${
                isScrolled ? '' : 'border border-light'
              }`}
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden z-20 text-2xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <AiOutlineClose className={isScrolled ? 'text-dark' : 'text-light'} />
            ) : (
              <AiOutlineMenu className={isScrolled ? 'text-dark' : 'text-light'} />
            )}
          </button>

          {/* Mobile Menu */}
          <div className={`fixed inset-0 bg-dark bg-opacity-95 z-10 flex flex-col justify-center items-center transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            <nav className="w-full max-w-md px-6">
              <ul className="flex flex-col gap-6 text-center">
                {navItems.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="text-xl font-light tracking-widest text-light hover:text-primary block py-2 border-b border-light border-opacity-20"
                      onClick={toggleMenu}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Mobile CTA */}
              <div className="mt-12">
                <a 
                  href="#search" 
                  className="btn-primary w-full block text-center py-4 font-light tracking-wider hover:shadow-lg transition-all duration-300" 
                  onClick={toggleMenu}
                >
                  Request a Quote
                </a>
              </div>
              
              <div className="mt-12 flex justify-center gap-6">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-light hover:text-primary font-light tracking-wide">
                  <AiOutlinePhone className="text-lg" /> +1 (234) 567-890
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
```

# src/Components/ScrollToTop/ScrollToTop.jsx

```jsx
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = ({ scroll }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scroll > 200 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-hover transition-all duration-300 z-50"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 
```

# src/Components/Search/Search.jsx

```jsx
import React, {useEffect, useState} from 'react'

// Impported icons ===>
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'
import {FiMinus, FiPlus} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'

// Import DatePicker
import DatePicker from "react-datepicker"
// Import local CSS file instead of from the package
import "../../datepicker.css"


// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

// Import AirportSearch component
import AirportSearch from '../AirportSearch/AirportSearch'

// JSON-LD Schema for SEO
const FlightBookingSchema = {
  "@context": "https://schema.org",
  "@type": "FlightReservation",
  "reservationFor": {
    "@type": "Flight",
    "provider": {
      "@type": "Airline",
      "name": "PrivateJets",
      "iataCode": "PJ"
    },
    "aircraft": {
      "@type": "Vehicle",
      "name": "Private Jet"
    }
  },
  "bookingAgent": {
    "@type": "TravelAgency",
    "name": "PrivateJets Charter",
    "url": "https://privatejet.example.com"
  }
};

const Search = () => {
   const [activeTab, setActiveTab] = useState('roundTrip')
   const [cities, setCities] = useState([{
     from: '', 
     to: '', 
     departureDate: null,
     travelers: 1
   }])
   const [returnDate, setReturnDate] = useState(null)
   const [isSubmitting, setIsSubmitting] = useState(false)
   
   // WhatsApp contact number
   const whatsappNumber = "+34695863455"

   const handleAddCity = () => {
     setCities([...cities, {
       from: '', 
       to: '', 
       departureDate: null,
       travelers: 1
     }])
   }

   const handleRemoveCity = (index) => {
     const newCities = [...cities]
     newCities.splice(index, 1)
     setCities(newCities)
   }

   const handleCityChange = (index, field, value) => {
     const newCities = [...cities]
     newCities[index][field] = value
     setCities(newCities)
   }

   const handleDateChange = (index, date) => {
     const newCities = [...cities]
     newCities[index].departureDate = date
     setCities(newCities)
   }

   const handleTravelersChange = (index, increment) => {
     const newCities = [...cities]
     if (increment) {
       newCities[index].travelers++
     } else {
       newCities[index].travelers = Math.max(1, newCities[index].travelers - 1)
     }
     setCities(newCities)
   }

   // Format date for WhatsApp message
   const formatDate = (date) => {
     if (!date) return "Not specified";
     return date.toLocaleDateString('en-US', {
       year: 'numeric',
       month: 'long',
       day: 'numeric'
     });
   }

   // Format airport data for WhatsApp message
   const formatAirport = (airport) => {
     if (!airport) return "Not specified";
     // Check if it's an object (from AirportSearch component)
     if (typeof airport === 'object') {
       // Return airport name or code if available
       return airport.name || airport.code || airport.label || JSON.stringify(airport);
     }
     // If it's already a string, return it directly
     return airport;
   }

   // Handle sending data to WhatsApp
   const handleSendToWhatsApp = () => {
     // Basic validation
     if (activeTab !== 'multiCity' && (!cities[0].from || !cities[0].to)) {
       alert("Please specify departure and arrival locations");
       return;
     }
     
     if (activeTab === 'multiCity') {
       const invalidCity = cities.find(city => !city.from || !city.to);
       if (invalidCity) {
         alert("Please specify all departure and arrival locations");
         return;
       }
     }

     setIsSubmitting(true);
     
     // Format message based on trip type
     let message = `*Private Jet Charter Request*\n\n`;
     message += `Trip Type: ${activeTab === 'oneWay' ? 'One Way' : activeTab === 'roundTrip' ? 'Round Trip' : 'Multi-City'}\n\n`;
     
     if (activeTab === 'multiCity') {
       // Format multi-city itinerary
       message += `*Multi-City Itinerary:*\n`;
       cities.forEach((city, index) => {
         message += `\nLeg ${index + 1}:\n`;
         message += `From: ${formatAirport(city.from)}\n`;
         message += `To: ${formatAirport(city.to)}\n`;
         message += `Date: ${formatDate(city.departureDate)}\n`;
         message += `Travelers: ${city.travelers}\n`;
       });
     } else {
       // Format one-way or round trip
       message += `From: ${formatAirport(cities[0].from)}\n`;
       message += `To: ${formatAirport(cities[0].to)}\n`;
       message += `Departure: ${formatDate(cities[0].departureDate)}\n`;
       
       if (activeTab === 'roundTrip') {
         message += `Return: ${formatDate(returnDate)}\n`;
       }
       
       message += `Travelers: ${cities[0].travelers}\n`;
     }
     
     message += `\nPlease provide me with a quote for this trip. Thank you!`;
     
     // Encode message for URL
     const encodedMessage = encodeURIComponent(message);
     
     // Create WhatsApp URL
     const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodedMessage}`;
     
     // Open WhatsApp in new tab
     window.open(whatsappUrl, '_blank');
     setIsSubmitting(false);
   }

   useEffect(()=>{
    Aos.init({duration: 2000})
   }, []) 

  return (
    <>
      {/* Add Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(FlightBookingSchema)}
      </script>
      
      <section id="search" className="section bg-secondary">
        <div className="container">
          <div 
            data-aos="fade-up" 
            data-aos-duration="2000"
            className="max-w-5xl mx-auto"
          >
            {/* Section Title */}
            <div className="text-center mb-12">
              <span className="section-subtitle">Charter Now</span>
              <h2 className="section-title-center">Book Your Private Flight</h2>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Experience the freedom of flying on your schedule. Our fleet of luxury aircraft is ready to take you anywhere in the world with unparalleled comfort and privacy.
              </p>
            </div>
            
            {/* Search Card */}
            <div className="bg-light shadow-medium p-8 rounded-lg">
              {/* Trip Type Tabs */}
              <div className="flex border-b border-border mb-8">
                <button 
                  className={`px-6 py-3 font-medium text-sm uppercase tracking-wider transition-colors border-b-2 -mb-px ${
                    activeTab === 'oneWay' 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-muted hover:text-dark'
                  }`}
                  onClick={() => {
                    setActiveTab('oneWay')
                    setCities([{
                      from: '', 
                      to: '', 
                      departureDate: null,
                      travelers: 1
                    }])
                    setReturnDate(null)
                  }}
                >
                  One Way
                </button>
                <button 
                  className={`px-6 py-3 font-medium text-sm uppercase tracking-wider transition-colors border-b-2 -mb-px ${
                    activeTab === 'roundTrip' 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-muted hover:text-dark'
                  }`}
                  onClick={() => {
                    setActiveTab('roundTrip')
                    setCities([{
                      from: '', 
                      to: '', 
                      departureDate: null,
                      travelers: 1
                    }])
                  }}
                >
                  Round Trip
                </button>
                <button 
                  className={`px-6 py-3 font-medium text-sm uppercase tracking-wider transition-colors border-b-2 -mb-px ${
                    activeTab === 'multiCity' 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-muted hover:text-dark'
                  }`}
                  onClick={() => setActiveTab('multiCity')}
                >
                  Multi-City
                </button>
              </div>

              {/* Search Inputs */}
              <div className="space-y-6">
                {/* Search Inputs */}
                <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-wrap gap-4">
                  {activeTab === 'multiCity' ? (
                    <div className="w-full">
                      {cities.map((city, index) => (
                        <div key={index} className="flex flex-wrap md:flex-nowrap gap-4 mb-4 relative w-full">
                          {/* From Input */}
                          <div className="flex flex-1 min-w-[200px] px-4">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                              <HiOutlineLocationMarker className='text-white text-2xl'/>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm text-gray-600 mb-2">From</h4>
                              <AirportSearch
                                value={city.from}
                                onChange={(airport) => handleCityChange(index, 'from', airport)}
                                placeholder="Departure city"
                              />
                            </div>
                          </div>

                          {/* To Input */}
                          <div className="flex flex-1 min-w-[200px] px-4">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                              <HiOutlineLocationMarker className='text-white text-2xl'/>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm text-gray-600 mb-2">To</h4>
                              <AirportSearch
                                value={city.to}
                                onChange={(airport) => handleCityChange(index, 'to', airport)}
                                placeholder="Arrival city"
                              />
                            </div>
                          </div>

                          {/* Departure Date */}
                          <div className="flex flex-1 min-w-[200px] px-4">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                              <RxCalendar className='text-white text-2xl'/>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm text-gray-600 mb-2">Departure</h4>
                              <DatePicker
                                selected={city.departureDate}
                                onChange={(date) => handleDateChange(index, date)}
                                placeholderText="Select date"
                                minDate={index > 0 ? cities[index - 1].departureDate || new Date() : new Date()}
                                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                                dateFormat="MMMM d, yyyy"
                              />
                            </div>
                          </div>

                          {/* Travelers */}
                          <div className="flex flex-1 min-w-[150px] px-4">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                              <RiAccountPinCircleLine className='text-white text-2xl'/>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm text-gray-600 mb-2">Travelers</h4>
                              <div className="flex items-center">
                                <button 
                                  onClick={() => handleTravelersChange(index, false)}
                                  className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center"
                                >
                                  <FiMinus />
                                </button>
                                <span className="mx-4 min-w-[20px] text-center">{city.travelers}</span>
                                <button 
                                  onClick={() => handleTravelersChange(index, true)}
                                  className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center"
                                >
                                  <FiPlus />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Remove button */}
                          {cities.length > 1 && (
                            <button 
                              onClick={() => handleRemoveCity(index)}
                              className="absolute top-0 right-0 md:static md:ml-2 text-primary text-xl"
                            >
                              <AiOutlineClose />
                            </button>
                          )}
                        </div>
                      ))}

                      {/* Add City Button */}
                      <button 
                        onClick={handleAddCity}
                        className="flex items-center gap-2 px-5 py-2.5 border border-primary text-primary rounded-md mt-4 hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        <AiOutlinePlus /> Add City
                      </button>
                    </div>
                  ) : (
                    <div className="w-full">
                      <div className="flex flex-wrap md:flex-nowrap gap-4 mb-4 relative w-full">
                        {/* From Input */}
                        <div className="flex flex-1 min-w-[200px] px-4">
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                            <HiOutlineLocationMarker className='text-white text-2xl'/>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm text-gray-600 mb-2">From</h4>
                            <AirportSearch
                              value={cities[0].from}
                              onChange={(airport) => handleCityChange(0, 'from', airport)}
                              placeholder="Departure city"
                            />
                          </div>
                        </div>

                        {/* To Input */}
                        <div className="flex flex-1 min-w-[200px] px-4">
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                            <HiOutlineLocationMarker className='text-white text-2xl'/>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm text-gray-600 mb-2">To</h4>
                            <AirportSearch
                              value={cities[0].to}
                              onChange={(airport) => handleCityChange(0, 'to', airport)}
                              placeholder="Arrival city"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap md:flex-nowrap gap-4 mb-4 relative w-full">
                        {/* Departure Date */}
                        <div className="flex flex-1 min-w-[200px] px-4">
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                            <RxCalendar className='text-white text-2xl'/>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm text-gray-600 mb-2">Departure</h4>
                            <DatePicker
                              selected={cities[0].departureDate}
                              onChange={(date) => handleDateChange(0, date)}
                              placeholderText="Select date"
                              minDate={new Date()}
                              className="w-full p-2 border border-gray-300 rounded-md outline-none"
                              dateFormat="MMMM d, yyyy"
                            />
                          </div>
                        </div>

                        {/* Return Date (Only for Round Trip) */}
                        {activeTab === 'roundTrip' && (
                          <div className="flex flex-1 min-w-[200px] px-4">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                              <RxCalendar className='text-white text-2xl'/>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm text-gray-600 mb-2">Return</h4>
                              <DatePicker
                                selected={returnDate}
                                onChange={(date) => setReturnDate(date)}
                                placeholderText="Select date"
                                minDate={cities[0].departureDate || new Date()}
                                className="w-full p-2 border border-gray-300 rounded-md outline-none"
                                dateFormat="MMMM d, yyyy"
                              />
                            </div>
                          </div>
                        )}

                        {/* Travelers */}
                        <div className="flex flex-1 min-w-[150px] px-4">
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                            <RiAccountPinCircleLine className='text-white text-2xl'/>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm text-gray-600 mb-2">Travelers</h4>
                            <div className="flex items-center">
                              <button 
                                onClick={() => handleTravelersChange(0, false)}
                                className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center"
                              >
                                <FiMinus />
                              </button>
                              <span className="mx-4 min-w-[20px] text-center">{cities[0].travelers}</span>
                              <button 
                                onClick={() => handleTravelersChange(0, true)}
                                className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center"
                              >
                                <FiPlus />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <div className="text-center mt-8">
                  <button 
                    onClick={handleSendToWhatsApp}
                    disabled={isSubmitting}
                    className="btn-primary py-3 px-10 flex items-center justify-center mx-auto gap-2 min-w-[200px]"
                  >
                    {isSubmitting ? 'Processing...' : (
                      <>
                        <BsWhatsapp className="text-xl" /> Get a Quote
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    Your inquiry will be sent via WhatsApp for faster response
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
```

# src/Components/Services/Services.jsx

```jsx
import React, {useEffect} from 'react'

//Imported Images
import servicesImage from '../../assets/services.webp'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div id="services" className='section bg-white'>
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Title Section */}
        <div className="text-center mb-12">
          <span className="section-subtitle">Premier Services</span>
          <h2 
            data-aos="fade-up" 
            data-aos-duration="2000"
            className="section-title-center"
          >
            Exceptional Private Jet Experience
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Discover our comprehensive range of private aviation services tailored to your needs
          </p>
        </div>

        {/* Info Grid Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Text Column */}
          <div className="grid gap-8">
            {/* Info Card 1 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="2000" 
              className="flex gap-4"
            >
              <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                01
              </span>
              <div>
                <h4 className="text-lg font-bold text-dark mb-2">
                  On-Demand Charter Flights
                </h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  Access our fleet of luxury jets available 24/7 to any destination worldwide. Book with as little as 4 hours notice and enjoy complete flexibility with your travel schedule.
                </p>
              </div>
            </div>

            {/* Info Card 2 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="2000"
              data-aos-delay="100" 
              className="flex gap-4"
            >
              <span className="bg-dark text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                02
              </span>
              <div>
                <h4 className="text-lg font-bold text-dark mb-2">
                  Elite Aircraft Fleet
                </h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  Choose from our diverse fleet of meticulously maintained aircraft, from light jets for short trips to ultra-long-range jets for intercontinental flights. Each aircraft is maintained to the highest safety standards and features luxurious interiors.
                </p>
              </div>
            </div>

            {/* Info Card 3 */}
            <div 
              data-aos="fade-up" 
              data-aos-duration="2000"
              data-aos-delay="200" 
              className="flex gap-4"
            >
              <span className="bg-secondary border border-primary text-primary w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                03
              </span>
              <div>
                <h4 className="text-lg font-bold text-dark mb-2">
                  Personalized Flight Experience
                </h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  From custom catering and premium beverages to cabin configuration and entertainment options, every aspect of your flight is tailored to your preferences. Our dedicated concierge team ensures a seamless, personalized journey.
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div 
            data-aos="fade-left" 
            data-aos-duration="2000" 
            className="mx-auto max-w-md md:max-w-none rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={servicesImage} 
              alt="Luxury private jet services" 
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 
```

# src/data/convertAirports.js

```js
import fs from 'fs';
import { parse } from 'csv-parse';

const airports = [];

// Read the CSV file
fs.createReadStream('./src/data/airports.csv')
  .pipe(parse({
    columns: true,
    skip_empty_lines: true
  }))
  .on('data', (row) => {
    // Only include actual airports suitable for private jets
    // Exclude heliports, seaplane bases, and other facilities
    if ((row.type === 'large_airport' || 
         row.type === 'medium_airport' || 
         row.type === 'small_airport') &&
        // Additional filters for small airports
        (row.type !== 'small_airport' || 
         (row.type === 'small_airport' && 
          row.iata_code && // Must have IATA code
          row.scheduled_service === 'yes'))) { // Must have scheduled service
      
      const airport = {
        id: row.id,
        name: row.name,
        city: row.municipality || row.name,
        country: row.country_name,
        iata: row.iata_code,
        icao: row.ident,
        latitude: parseFloat(row.latitude_deg),
        longitude: parseFloat(row.longitude_deg),
        type: row.type,
        isPrivate: row.type === 'small_airport',
        elevation: parseFloat(row.elevation_ft),
        continent: row.continent
      };

      airports.push(airport);
    }
  })
  .on('end', () => {
    // Sort airports to prioritize private airports
    airports.sort((a, b) => {
      // Private airports first
      if (a.isPrivate && !b.isPrivate) return -1;
      if (!a.isPrivate && b.isPrivate) return 1;
      
      // Then by type (large -> medium -> small)
      const typeOrder = {
        'large_airport': 1,
        'medium_airport': 2,
        'small_airport': 3
      };
      return typeOrder[a.type] - typeOrder[b.type];
    });

    // Write the entire array as a single JSON file
    fs.writeFileSync(
      './src/data/airports.json',
      JSON.stringify(airports, null, 2)
    );
    console.log('CSV file successfully processed');
    console.log(`Total airports included: ${airports.length}`);
  })
  .on('error', (error) => {
    console.error('Error processing CSV:', error);
  }); 
```

# src/datepicker.css

```css
﻿.react-datepicker__navigation-icon::before,.react-datepicker__year-read-view--down-arrow,.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-year-read-view--down-arrow{border-color:#ccc;border-style:solid;border-width:3px 3px 0 0;content:"";display:block;height:9px;position:absolute;top:6px;width:9px}.react-datepicker-wrapper{display:inline-block;padding:0;border:0}.react-datepicker{font-family:"Helvetica Neue",helvetica,arial,sans-serif;font-size:.8rem;background-color:#fff;color:#000;border:1px solid #aeaeae;border-radius:.3rem;display:inline-block;position:relative;line-height:initial}.react-datepicker--time-only .react-datepicker__time-container{border-left:0}.react-datepicker--time-only .react-datepicker__time,.react-datepicker--time-only .react-datepicker__time-box{border-bottom-left-radius:.3rem;border-bottom-right-radius:.3rem}.react-datepicker-popper{z-index:1;line-height:0}.react-datepicker-popper .react-datepicker__triangle{stroke:#aeaeae}.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle{fill:#f0f0f0;color:#f0f0f0}.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle{fill:#fff;color:#fff}.react-datepicker__header{text-align:center;background-color:#f0f0f0;border-bottom:1px solid #aeaeae;border-top-left-radius:.3rem;padding:8px 0;position:relative}.react-datepicker__header--time{padding-bottom:8px;padding-left:5px;padding-right:5px}.react-datepicker__header--time:not(.react-datepicker__header--time--only){border-top-left-radius:0}.react-datepicker__header:not(.react-datepicker__header--has-time-select){border-top-right-radius:.3rem}.react-datepicker__year-dropdown-container--select,.react-datepicker__month-dropdown-container--select,.react-datepicker__month-year-dropdown-container--select,.react-datepicker__year-dropdown-container--scroll,.react-datepicker__month-dropdown-container--scroll,.react-datepicker__month-year-dropdown-container--scroll{display:inline-block;margin:0 15px}.react-datepicker__current-month,.react-datepicker-time__header,.react-datepicker-year-header{margin-top:0;color:#000;font-weight:bold;font-size:.944rem}h2.react-datepicker__current-month{padding:0;margin:0}.react-datepicker-time__header{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.react-datepicker__navigation{align-items:center;background:none;display:flex;justify-content:center;text-align:center;cursor:pointer;position:absolute;top:2px;padding:0;border:none;z-index:1;height:32px;width:32px;text-indent:-999em;overflow:hidden}.react-datepicker__navigation--previous{left:2px}.react-datepicker__navigation--next{right:2px}.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button){right:85px}.react-datepicker__navigation--years{position:relative;top:0;display:block;margin-left:auto;margin-right:auto}.react-datepicker__navigation--years-previous{top:4px}.react-datepicker__navigation--years-upcoming{top:-4px}.react-datepicker__navigation:hover *::before{border-color:hsl(0,0%,65%)}.react-datepicker__navigation-icon{position:relative;top:-1px;font-size:20px;width:0}.react-datepicker__navigation-icon--next{left:-2px}.react-datepicker__navigation-icon--next::before{transform:rotate(45deg);left:-7px}.react-datepicker__navigation-icon--previous{right:-2px}.react-datepicker__navigation-icon--previous::before{transform:rotate(225deg);right:-7px}.react-datepicker__month-container{float:left}.react-datepicker__year{margin:.4rem;text-align:center}.react-datepicker__year-wrapper{display:flex;flex-wrap:wrap;max-width:180px}.react-datepicker__year .react-datepicker__year-text{display:inline-block;width:4rem;margin:2px}.react-datepicker__month{margin:.4rem;text-align:center}.react-datepicker__month .react-datepicker__month-text,.react-datepicker__month .react-datepicker__quarter-text{display:inline-block;width:4rem;margin:2px}.react-datepicker__input-time-container{clear:both;width:100%;float:left;margin:5px 0 10px 15px;text-align:left}.react-datepicker__input-time-container .react-datepicker-time__caption{display:inline-block}.react-datepicker__input-time-container .react-datepicker-time__input-container{display:inline-block}.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input{display:inline-block;margin-left:10px}.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input{width:auto}.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]::-webkit-inner-spin-button,.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]{-moz-appearance:textfield}.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter{margin-left:5px;display:inline-block}.react-datepicker__time-container{float:right;border-left:1px solid #aeaeae;width:85px}.react-datepicker__time-container--with-today-button{display:inline;border:1px solid #aeaeae;border-radius:.3rem;position:absolute;right:-87px;top:0}.react-datepicker__time-container .react-datepicker__time{position:relative;background:#fff;border-bottom-right-radius:.3rem}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box{width:85px;overflow-x:hidden;margin:0 auto;text-align:center;border-bottom-right-radius:.3rem}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list{list-style:none;margin:0;height:calc(195px + 1.7rem/2);overflow-y:scroll;padding-right:0;padding-left:0;width:100%;box-sizing:content-box}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item{height:30px;padding:5px 10px;white-space:nowrap}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover{cursor:pointer;background-color:#f0f0f0}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected{background-color:#216ba5;color:#fff;font-weight:bold}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover{background-color:#216ba5}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled{color:#ccc}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover{cursor:default;background-color:rgba(0,0,0,0)}.react-datepicker__week-number{color:#ccc;display:inline-block;width:1.7rem;line-height:1.7rem;text-align:center;margin:.166rem}.react-datepicker__week-number.react-datepicker__week-number--clickable{cursor:pointer}.react-datepicker__week-number.react-datepicker__week-number--clickable:not(.react-datepicker__week-number--selected):hover{border-radius:.3rem;background-color:#f0f0f0}.react-datepicker__week-number--selected{border-radius:.3rem;background-color:#216ba5;color:#fff}.react-datepicker__week-number--selected:hover{background-color:rgb(28.75,93.2196969697,143.75)}.react-datepicker__day-names{white-space:nowrap;margin-bottom:-8px}.react-datepicker__week{white-space:nowrap}.react-datepicker__day-name,.react-datepicker__day,.react-datepicker__time-name{color:#000;display:inline-block;width:1.7rem;line-height:1.7rem;text-align:center;margin:.166rem}.react-datepicker__day,.react-datepicker__month-text,.react-datepicker__quarter-text,.react-datepicker__year-text{cursor:pointer}.react-datepicker__day:not([aria-disabled=true]):hover,.react-datepicker__month-text:not([aria-disabled=true]):hover,.react-datepicker__quarter-text:not([aria-disabled=true]):hover,.react-datepicker__year-text:not([aria-disabled=true]):hover{border-radius:.3rem;background-color:#f0f0f0}.react-datepicker__day--today,.react-datepicker__month-text--today,.react-datepicker__quarter-text--today,.react-datepicker__year-text--today{font-weight:bold}.react-datepicker__day--highlighted,.react-datepicker__month-text--highlighted,.react-datepicker__quarter-text--highlighted,.react-datepicker__year-text--highlighted{border-radius:.3rem;background-color:#3dcc4a;color:#fff}.react-datepicker__day--highlighted:not([aria-disabled=true]):hover,.react-datepicker__month-text--highlighted:not([aria-disabled=true]):hover,.react-datepicker__quarter-text--highlighted:not([aria-disabled=true]):hover,.react-datepicker__year-text--highlighted:not([aria-disabled=true]):hover{background-color:rgb(49.8551020408,189.6448979592,62.5632653061)}.react-datepicker__day--highlighted-custom-1,.react-datepicker__month-text--highlighted-custom-1,.react-datepicker__quarter-text--highlighted-custom-1,.react-datepicker__year-text--highlighted-custom-1{color:#f0f}.react-datepicker__day--highlighted-custom-2,.react-datepicker__month-text--highlighted-custom-2,.react-datepicker__quarter-text--highlighted-custom-2,.react-datepicker__year-text--highlighted-custom-2{color:green}.react-datepicker__day--holidays,.react-datepicker__month-text--holidays,.react-datepicker__quarter-text--holidays,.react-datepicker__year-text--holidays{position:relative;border-radius:.3rem;background-color:#ff6803;color:#fff}.react-datepicker__day--holidays .overlay,.react-datepicker__month-text--holidays .overlay,.react-datepicker__quarter-text--holidays .overlay,.react-datepicker__year-text--holidays .overlay{position:absolute;bottom:100%;left:50%;transform:translateX(-50%);background-color:#333;color:#fff;padding:4px;border-radius:4px;white-space:nowrap;visibility:hidden;opacity:0;transition:visibility 0s,opacity .3s ease-in-out}.react-datepicker__day--holidays:not([aria-disabled=true]):hover,.react-datepicker__month-text--holidays:not([aria-disabled=true]):hover,.react-datepicker__quarter-text--holidays:not([aria-disabled=true]):hover,.react-datepicker__year-text--holidays:not([aria-disabled=true]):hover{background-color:rgb(207,82.9642857143,0)}.react-datepicker__day--holidays:hover .overlay,.react-datepicker__month-text--holidays:hover .overlay,.react-datepicker__quarter-text--holidays:hover .overlay,.react-datepicker__year-text--holidays:hover .overlay{visibility:visible;opacity:1}.react-datepicker__day--selected,.react-datepicker__day--in-selecting-range,.react-datepicker__day--in-range,.react-datepicker__month-text--selected,.react-datepicker__month-text--in-selecting-range,.react-datepicker__month-text--in-range,.react-datepicker__quarter-text--selected,.react-datepicker__quarter-text--in-selecting-range,.react-datepicker__quarter-text--in-range,.react-datepicker__year-text--selected,.react-datepicker__year-text--in-selecting-range,.react-datepicker__year-text--in-range{border-radius:.3rem;background-color:#216ba5;color:#fff}.react-datepicker__day--selected:not([aria-disabled=true]):hover,.react-datepicker__day--in-selecting-range:not([aria-disabled=true]):hover,.react-datepicker__day--in-range:not([aria-disabled=true]):hover,.react-datepicker__month-text--selected:not([aria-disabled=true]):hover,.react-datepicker__month-text--in-selecting-range:not([aria-disabled=true]):hover,.react-datepicker__month-text--in-range:not([aria-disabled=true]):hover,.react-datepicker__quarter-text--selected:not([aria-disabled=true]):hover,.react-datepicker__quarter-text--in-selecting-range:not([aria-disabled=true]):hover,.react-datepicker__quarter-text--in-range:not([aria-disabled=true]):hover,.react-datepicker__year-text--selected:not([aria-disabled=true]):hover,.react-datepicker__year-text--in-selecting-range:not([aria-disabled=true]):hover,.react-datepicker__year-text--in-range:not([aria-disabled=true]):hover{background-color:rgb(28.75,93.2196969697,143.75)}.react-datepicker__day--keyboard-selected,.react-datepicker__month-text--keyboard-selected,.react-datepicker__quarter-text--keyboard-selected,.react-datepicker__year-text--keyboard-selected{border-radius:.3rem;background-color:rgb(186.25,217.0833333333,241.25);color:#000}.react-datepicker__day--keyboard-selected:not([aria-disabled=true]):hover,.react-datepicker__month-text--keyboard-selected:not([aria-disabled=true]):hover,.react-datepicker__quarter-text--keyboard-selected:not([aria-disabled=true]):hover,.react-datepicker__year-text--keyboard-selected:not([aria-disabled=true]):hover{background-color:rgb(28.75,93.2196969697,143.75)}.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range,.react-datepicker__month-text--in-range,.react-datepicker__quarter-text--in-range,.react-datepicker__year-text--in-range),.react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range,.react-datepicker__month-text--in-range,.react-datepicker__quarter-text--in-range,.react-datepicker__year-text--in-range),.react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range,.react-datepicker__month-text--in-range,.react-datepicker__quarter-text--in-range,.react-datepicker__year-text--in-range),.react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range,.react-datepicker__month-text--in-range,.react-datepicker__quarter-text--in-range,.react-datepicker__year-text--in-range){background-color:rgba(33,107,165,.5)}.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range,.react-datepicker__month-text--in-selecting-range,.react-datepicker__quarter-text--in-selecting-range,.react-datepicker__year-text--in-selecting-range),.react-datepicker__year--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range,.react-datepicker__month-text--in-selecting-range,.react-datepicker__quarter-text--in-selecting-range,.react-datepicker__year-text--in-selecting-range),.react-datepicker__month--selecting-range .react-datepicker__month-text--in-range:not(.react-datepicker__day--in-selecting-range,.react-datepicker__month-text--in-selecting-range,.react-datepicker__quarter-text--in-selecting-range,.react-datepicker__year-text--in-selecting-range),.react-datepicker__year--selecting-range .react-datepicker__month-text--in-range:not(.react-datepicker__day--in-selecting-range,.react-datepicker__month-text--in-selecting-range,.react-datepicker__quarter-text--in-selecting-range,.react-datepicker__year-text--in-selecting-range),.react-datepicker__month--selecting-range .react-datepicker__quarter-text--in-range:not(.react-datepicker__day--in-selecting-range,.react-datepicker__month-text--in-selecting-range,.react-datepicker__quarter-text--in-selecting-range,.react-datepicker__year-text--in-selecting-range),.react-datepicker__year--selecting-range .react-datepicker__quarter-text--in-range:not(.react-datepicker__day--in-selecting-range,.react-datepicker__month-text--in-selecting-range,.react-datepicker__quarter-text--in-selecting-range,.react-datepicker__year-text--in-selecting-range),.react-datepicker__month--selecting-range .react-datepicker__year-text--in-range:not(.react-datepicker__day--in-selecting-range,.react-datepicker__month-text--in-selecting-range,.react-datepicker__quarter-text--in-selecting-range,.react-datepicker__year-text--in-selecting-range),.react-datepicker__year--selecting-range .react-datepicker__year-text--in-range:not(.react-datepicker__day--in-selecting-range,.react-datepicker__month-text--in-selecting-range,.react-datepicker__quarter-text--in-selecting-range,.react-datepicker__year-text--in-selecting-range){background-color:#f0f0f0;color:#000}.react-datepicker__day--disabled,.react-datepicker__month-text--disabled,.react-datepicker__quarter-text--disabled,.react-datepicker__year-text--disabled{cursor:default;color:#ccc}.react-datepicker__day--disabled .overlay,.react-datepicker__month-text--disabled .overlay,.react-datepicker__quarter-text--disabled .overlay,.react-datepicker__year-text--disabled .overlay{position:absolute;bottom:70%;left:50%;transform:translateX(-50%);background-color:#333;color:#fff;padding:4px;border-radius:4px;white-space:nowrap;visibility:hidden;opacity:0;transition:visibility 0s,opacity .3s ease-in-out}.react-datepicker__input-container{position:relative;display:inline-block;width:100%}.react-datepicker__input-container .react-datepicker__calendar-icon{position:absolute;padding:.5rem;box-sizing:content-box}.react-datepicker__view-calendar-icon input{padding:6px 10px 5px 25px}.react-datepicker__year-read-view,.react-datepicker__month-read-view,.react-datepicker__month-year-read-view{border:1px solid rgba(0,0,0,0);border-radius:.3rem;position:relative}.react-datepicker__year-read-view:hover,.react-datepicker__month-read-view:hover,.react-datepicker__month-year-read-view:hover{cursor:pointer}.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow{border-top-color:hsl(0,0%,70%)}.react-datepicker__year-read-view--down-arrow,.react-datepicker__month-read-view--down-arrow,.react-datepicker__month-year-read-view--down-arrow{transform:rotate(135deg);right:-16px;top:0}.react-datepicker__year-dropdown,.react-datepicker__month-dropdown,.react-datepicker__month-year-dropdown{background-color:#f0f0f0;position:absolute;width:50%;left:25%;top:30px;z-index:1;text-align:center;border-radius:.3rem;border:1px solid #aeaeae}.react-datepicker__year-dropdown:hover,.react-datepicker__month-dropdown:hover,.react-datepicker__month-year-dropdown:hover{cursor:pointer}.react-datepicker__year-dropdown--scrollable,.react-datepicker__month-dropdown--scrollable,.react-datepicker__month-year-dropdown--scrollable{height:150px;overflow-y:scroll}.react-datepicker__year-option,.react-datepicker__month-option,.react-datepicker__month-year-option{line-height:20px;width:100%;display:block;margin-left:auto;margin-right:auto}.react-datepicker__year-option:first-of-type,.react-datepicker__month-option:first-of-type,.react-datepicker__month-year-option:first-of-type{border-top-left-radius:.3rem;border-top-right-radius:.3rem}.react-datepicker__year-option:last-of-type,.react-datepicker__month-option:last-of-type,.react-datepicker__month-year-option:last-of-type{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-bottom-left-radius:.3rem;border-bottom-right-radius:.3rem}.react-datepicker__year-option:hover,.react-datepicker__month-option:hover,.react-datepicker__month-year-option:hover{background-color:#ccc}.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming{border-bottom-color:hsl(0,0%,70%)}.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous{border-top-color:hsl(0,0%,70%)}.react-datepicker__year-option--selected,.react-datepicker__month-option--selected,.react-datepicker__month-year-option--selected{position:absolute;left:15px}.react-datepicker__close-icon{cursor:pointer;background-color:rgba(0,0,0,0);border:0;outline:0;padding:0 6px 0 0;position:absolute;top:0;right:0;height:100%;display:table-cell;vertical-align:middle}.react-datepicker__close-icon::after{cursor:pointer;background-color:#216ba5;color:#fff;border-radius:50%;height:16px;width:16px;padding:2px;font-size:12px;line-height:1;text-align:center;display:table-cell;vertical-align:middle;content:"×"}.react-datepicker__close-icon--disabled{cursor:default}.react-datepicker__close-icon--disabled::after{cursor:default;background-color:#ccc}.react-datepicker__today-button{background:#f0f0f0;border-top:1px solid #aeaeae;cursor:pointer;text-align:center;font-weight:bold;padding:5px 0;clear:left}.react-datepicker__portal{position:fixed;width:100vw;height:100vh;background-color:rgba(0,0,0,.8);left:0;top:0;justify-content:center;align-items:center;display:flex;z-index:2147483647}.react-datepicker__portal .react-datepicker__day-name,.react-datepicker__portal .react-datepicker__day,.react-datepicker__portal .react-datepicker__time-name{width:3rem;line-height:3rem}@media(max-width: 400px),(max-height: 550px){.react-datepicker__portal .react-datepicker__day-name,.react-datepicker__portal .react-datepicker__day,.react-datepicker__portal .react-datepicker__time-name{width:2rem;line-height:2rem}}.react-datepicker__portal .react-datepicker__current-month,.react-datepicker__portal .react-datepicker-time__header{font-size:1.44rem}.react-datepicker__children-container{width:13.8rem;margin:.4rem;padding-right:.2rem;padding-left:.2rem;height:auto}.react-datepicker__aria-live{position:absolute;clip-path:circle(0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;width:1px;white-space:nowrap}.react-datepicker__calendar-icon{width:1em;height:1em;vertical-align:-0.125em}

```

# src/main.css

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply m-0 p-0 box-border transition-all duration-200;
  }

  html {
    @apply scroll-smooth;
    font-family: 'Inter', sans-serif;
    @apply text-gray-800;
  }

  body {
    @apply bg-light font-sans text-dark leading-relaxed;
  }

  a {
    @apply no-underline text-dark hover:text-primary transition-colors;
  }

  li {
    @apply list-none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    @apply font-medium leading-tight text-dark;
  }

  h1 {
    @apply text-4xl md:text-5xl lg:text-6xl;
  }

  h2 {
    @apply text-2xl md:text-3xl lg:text-5xl;
  }

  h3 {
    @apply text-2xl md:text-3xl;
  }

  h4 {
    @apply text-xl md:text-2xl;
  }

  p {
    @apply font-light leading-relaxed;
  }

  input, textarea, select {
    @apply text-base border border-border rounded-none px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all;
  }

  img, video {
    @apply w-full h-auto;
  }
}

@layer components {
  /* Standardized Button Styles - Luxury Private Jet */
  .btn-primary {
    @apply inline-block px-8 py-3 rounded-full bg-primary text-light font-light tracking-wider hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg;
    position: relative;
    overflow: hidden;
  }
  
  .btn-primary::after {
    content: '';
    @apply absolute bottom-0 left-0 w-0 h-0.5 bg-light transition-all duration-300;
  }
  
  .btn-primary:hover::after {
    @apply w-full;
  }

  .btn-secondary {
    @apply inline-block px-8 py-3 rounded-full bg-transparent border border-dark text-dark font-light tracking-wider transition-all hover:bg-dark hover:text-light;
  }

  .btn-outline {
    @apply inline-block px-8 py-3 rounded-full bg-transparent border border-light text-light font-light tracking-wider transition-all hover:bg-light hover:text-dark;
  }
  
  /* Standardized Section Styles */
  .section {
    @apply py-16 md:py-24;
  }

  .section-title {
    @apply relative pb-3 text-2xl md:text-3xl font-bold text-dark mb-8;
  }
  
  .section-title::after {
    content: '';
    @apply absolute bottom-0 left-0 w-12 h-0.5 bg-primary;
  }
  
  .section-title-center {
    @apply relative pb-3 text-2xl md:text-3xl font-bold text-dark mb-8 text-center;
  }
  
  .section-title-center::after {
    content: '';
    @apply absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary;
  }
  
  .section-subtitle {
    @apply uppercase text-xs tracking-[0.8rem] text-dark mb-2 block;
  }

  /* Standardized Card Styles */
  .luxury-card {
    @apply bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300;
  }

  /* Container */
  .container {
    @apply px-4 md:px-8 mx-auto max-w-7xl;
  }

  /* Common utility classes */
  .flex-center {
    @apply flex items-center justify-center;
  }

  .grid-center {
    @apply grid place-items-center;
  }

  /* Typography Components */
  .heading-serif {
    font-family: 'Playfair Display', serif;
    @apply font-medium;
  }
  
  .text-sans {
    font-family: 'Inter', sans-serif;
    @apply font-light tracking-wide;
  }
  
  .nav-link {
    @apply font-light uppercase tracking-widest text-sm transition-all;
  }
  
  .display-text {
    font-family: 'Playfair Display', serif;
    @apply font-medium tracking-wide leading-tight;
  }
  
  /* Bullet List Item */
  .bullet-item {
    @apply flex items-center;
  }
  
  .bullet-item::before {
    content: '';
    @apply inline-block w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-70 flex-shrink-0;
  }
}

@layer utilities {
  /* Shadow utilities */
  .shadow-soft {
    @apply shadow-md;
  }
  
  .shadow-medium {
    @apply shadow-lg;
  }

  /* Custom animations */
  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out forwards;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    @apply w-1.5 bg-secondary;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-primary rounded-full;
  }

  ::selection {
    @apply bg-primary text-light;
  }
}

```

# src/main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './datepicker.css'
import './main.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

# tailwind.config.cjs

```cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9D0A0E',
        'secondary': '#F8F8F8',
        'dark': '#1A1A1A',
        'light': '#FFFFFF',
        'accent': '#D4AF37',
        'muted': '#767676',
        'border': '#E5E5E5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
      borderWidth: {
        'thin': '0.5px',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true
  },
  important: true
} 
```

# tailwind.config.js

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'display': ['Playfair Display', 'serif'],
      },
      colors: {
        light: '#FFFFFF',
        dark: '#1A1A1A',
        primary: '#C19D60', // Luxury gold color
        secondary: '#F5F5F5',
        border: '#E5E5E5',
      },
      // ... other existing theme extensions ...
    },
  },
  plugins: [],
  // ... existing plugins and other config ...
} 
```

# vite.config.cjs

```cjs
const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: true
    }
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})

```

