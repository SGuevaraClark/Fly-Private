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