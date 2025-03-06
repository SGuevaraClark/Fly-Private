import React, {useEffect, useState} from 'react'

// Impported icons ===>
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'
import {AiOutlinePlus, AiOutlineClose} from 'react-icons/ai'
import {FiMinus, FiPlus} from 'react-icons/fi'

// Import DatePicker
import DatePicker from "react-datepicker"
// Import local CSS file instead of from the package
import "../../datepicker.css"


// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

// Import AirportSearch component
import AirportSearch from '../AirportSearch/AirportSearch'

const Search = () => {
   const [activeTab, setActiveTab] = useState('roundTrip')
   const [cities, setCities] = useState([{
     from: '', 
     to: '', 
     departureDate: null,
     travelers: 1
   }])
   const [returnDate, setReturnDate] = useState(null)

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

   useEffect(()=>{
    Aos.init({duration: 2000})
   }, []) 

  return (
    <div className='py-16 px-6 md:w-3/4 md:mx-auto'>
      <div data-aos="fade-up" data-aos-duration="2500" className="max-w-[1200px] mx-auto">
        {/* Trip Type Tabs */}
        <div className="flex gap-4 mb-8">
          <div 
            className={`px-4 py-2 border rounded-md cursor-pointer transition-all duration-300 ${
              activeTab === 'oneWay' 
                ? 'bg-primary text-white border-primary' 
                : 'border-greyText'
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
            <span>One Way</span>
          </div>
          <div 
            className={`px-4 py-2 border rounded-md cursor-pointer transition-all duration-300 ${
              activeTab === 'roundTrip' 
                ? 'bg-primary text-white border-primary' 
                : 'border-greyText'
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
            <span>Round Trip</span>
          </div>
          <div 
            className={`px-4 py-2 border rounded-md cursor-pointer transition-all duration-300 ${
              activeTab === 'multiCity' 
                ? 'bg-primary text-white border-primary' 
                : 'border-greyText'
            }`}
            onClick={() => setActiveTab('multiCity')}
          >
            <span>Multi-City</span>
          </div>
        </div>

        {/* Search Inputs */}
        <div data-aos="fade-up" data-aos-duration="2500" className="flex flex-wrap gap-4">
          {activeTab === 'multiCity' ? (
            <div className="w-full">
              {cities.map((city, index) => (
                <div key={index} className="flex flex-wrap md:flex-nowrap gap-4 mb-4 relative w-full">
                  {/* From Input */}
                  <div className="flex flex-1 min-w-[200px] px-4">
                    <div className="w-10 h-10 rounded-full bg-greyBg flex items-center justify-center mr-4">
                      <HiOutlineLocationMarker className='text-2xl text-primary'/>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm text-greyText mb-2">From</h4>
                      <AirportSearch
                        value={city.from}
                        onChange={(airport) => handleCityChange(index, 'from', airport)}
                        placeholder="Departure city"
                      />
                    </div>
                  </div>

                  {/* To Input */}
                  <div className="flex flex-1 min-w-[200px] px-4">
                    <div className="w-10 h-10 rounded-full bg-greyBg flex items-center justify-center mr-4">
                      <HiOutlineLocationMarker className='text-2xl text-primary'/>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm text-greyText mb-2">To</h4>
                      <AirportSearch
                        value={city.to}
                        onChange={(airport) => handleCityChange(index, 'to', airport)}
                        placeholder="Arrival city"
                      />
                    </div>
                  </div>

                  {/* Departure Date */}
                  <div className="flex flex-1 min-w-[200px] px-4">
                    <div className="w-10 h-10 rounded-full bg-greyBg flex items-center justify-center mr-4">
                      <RxCalendar className='text-2xl text-primary'/>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm text-greyText mb-2">Departure</h4>
                      <DatePicker
                        selected={city.departureDate}
                        onChange={(date) => handleDateChange(index, date)}
                        placeholderText="Select date"
                        minDate={index > 0 ? cities[index - 1].departureDate || new Date() : new Date()}
                        className="w-full p-2 border border-greyText rounded-md outline-none"
                        dateFormat="MMMM d, yyyy"
                      />
                    </div>
                  </div>

                  {/* Travelers */}
                  <div className="flex flex-1 min-w-[150px] px-4">
                    <div className="w-10 h-10 rounded-full bg-greyBg flex items-center justify-center mr-4">
                      <RiAccountPinCircleLine className='text-2xl text-primary'/>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm text-greyText mb-2">Travelers</h4>
                      <div className="flex items-center">
                        <button 
                          onClick={() => handleTravelersChange(index, false)}
                          className="w-8 h-8 border border-greyText rounded flex items-center justify-center"
                        >
                          <FiMinus />
                        </button>
                        <span className="mx-4 min-w-[20px] text-center">{city.travelers}</span>
                        <button 
                          onClick={() => handleTravelersChange(index, true)}
                          className="w-8 h-8 border border-greyText rounded flex items-center justify-center"
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
            <>
              {/* From Input */}
              <div className="flex flex-1 min-w-[200px] px-4">
                <div className="w-10 h-10 rounded-full bg-greyBg flex items-center justify-center mr-4">
                  <HiOutlineLocationMarker className='text-2xl text-primary'/>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm text-greyText mb-2">From</h4>
                  <AirportSearch
                    value={cities[0].from}
                    onChange={(airport) => handleCityChange(0, 'from', airport)}
                    placeholder="Departure city"
                  />
                </div>
              </div>

              {/* To Input */}
              <div className="flex flex-1 min-w-[200px] px-4">
                <div className="w-10 h-10 rounded-full bg-greyBg flex items-center justify-center mr-4">
                  <HiOutlineLocationMarker className='text-2xl text-primary'/>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm text-greyText mb-2">To</h4>
                  <AirportSearch
                    value={cities[0].to}
                    onChange={(airport) => handleCityChange(0, 'to', airport)}
                    placeholder="Arrival city"
                  />
                </div>
              </div>

              {/* Departure Date */}
              <div className="flex flex-1 min-w-[200px] px-4">
                <div className="w-10 h-10 rounded-full bg-greyBg flex items-center justify-center mr-4">
                  <RxCalendar className='text-2xl text-primary'/>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm text-greyText mb-2">Departure</h4>
                  <DatePicker
                    selected={cities[0].departureDate}
                    onChange={(date) => handleDateChange(0, date)}
                    placeholderText="Select date"
                    minDate={new Date()}
                    className="w-full p-2 border border-greyText rounded-md outline-none"
                    dateFormat="MMMM d, yyyy"
                  />
                </div>
              </div>

              {/* Return Date - Only for Round Trip */}
              {activeTab === 'roundTrip' && (
                <div className="flex flex-1 min-w-[200px] px-4">
                  <div className="w-10 h-10 rounded-full bg-greyBg flex items-center justify-center mr-4">
                    <RxCalendar className='text-2xl text-primary'/>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm text-greyText mb-2">Return</h4>
                    <DatePicker
                      selected={returnDate}
                      onChange={(date) => setReturnDate(date)}
                      placeholderText="Select date"
                      minDate={cities[0].departureDate || new Date()}
                      className="w-full p-2 border border-greyText rounded-md outline-none"
                      dateFormat="MMMM d, yyyy"
                    />
                  </div>
                </div>
              )}

              {/* Travelers */}
              <div className="flex flex-1 min-w-[150px] px-4">
                <div className="w-10 h-10 rounded-full bg-greyBg flex items-center justify-center mr-4">
                  <RiAccountPinCircleLine className='text-2xl text-primary'/>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm text-greyText mb-2">Travelers</h4>
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleTravelersChange(0, false)}
                      className="w-8 h-8 border border-greyText rounded flex items-center justify-center"
                    >
                      <FiMinus />
                    </button>
                    <span className="mx-4 min-w-[20px] text-center">{cities[0].travelers}</span>
                    <button 
                      onClick={() => handleTravelersChange(0, true)}
                      className="w-8 h-8 border border-greyText rounded flex items-center justify-center"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Search Button */}
        <div className="flex justify-center w-full">
          <button className="mt-4 px-8 py-3 bg-primary text-white rounded-md min-w-[200px] hover:bg-opacity-90 transition-colors duration-300">
            Search Flight
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search