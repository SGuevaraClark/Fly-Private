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
import "./Search.css"

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

// Import AirportSearch component
import AirportSearch from '../AirportSearch/AirportSearch'
import '../AirportSearch/AirportSearch.css'

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
    <div className='search container section'>
        <div data-aos="fade-up" data-aos-duration="2500" className="sectionContainer grid">
            <div className="btns flex">
                <div 
                  className={`singleBtn ${activeTab === 'oneWay' ? 'active' : ''}`}
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
                  className={`singleBtn ${activeTab === 'roundTrip' ? 'active' : ''}`}
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
                  className={`singleBtn ${activeTab === 'multiCity' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('multiCity')
                    setCities([{
                      from: '', 
                      to: '', 
                      departureDate: null,
                      travelers: 1
                    }])
                  }}
                >
                    <span>Multi City</span>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2500" className="searchInputs flex">
                {/* Location Inputs - Always First */}
                {activeTab === 'multiCity' ? (
                  <div className="multiCityInputs">
                    {cities.map((city, index) => (
                      <div key={index} className="cityRow flex">
                        {/* From Input */}
                        <div className="singleInput flex">
                          <div className="iconDiv">
                            <HiOutlineLocationMarker className='icon'/>
                          </div>
                          <div className="texts">
                            <h4>From</h4>
                            <AirportSearch
                              value={city.from}
                              onChange={(airport) => handleCityChange(index, 'from', airport)}
                              placeholder="Departure city"
                            />
                          </div>
                        </div>

                        {/* To Input */}
                        <div className="singleInput flex">
                          <div className="iconDiv">
                            <HiOutlineLocationMarker className='icon'/>
                          </div>
                          <div className="texts">
                            <h4>To</h4>
                            <AirportSearch
                              value={city.to}
                              onChange={(airport) => handleCityChange(index, 'to', airport)}
                              placeholder="Arrival city"
                            />
                          </div>
                        </div>

                        {/* Departure Date */}
                        <div className="singleInput flex">
                          <div className="iconDiv">
                            <RxCalendar className='icon'/>
                          </div>
                          <div className="texts">
                            <h4>Departure</h4>
                            <DatePicker
                              selected={city.departureDate}
                              onChange={(date) => handleDateChange(index, date)}
                              placeholderText="Select date"
                              minDate={index > 0 ? cities[index - 1].departureDate || new Date() : new Date()}
                              className="datePicker"
                              dateFormat="MMMM d, yyyy"
                            />
                          </div>
                        </div>

                        {/* Travelers */}
                        <div className="singleInput flex">
                          <div className="iconDiv">
                            <RiAccountPinCircleLine className='icon'/>
                          </div>
                          <div className="texts">
                            <h4>Travelers</h4>
                            <div className="travelerCounter flex">
                              <button 
                                onClick={() => handleTravelersChange(index, false)}
                                className="travelerCounter button"
                              >
                                <FiMinus />
                              </button>
                              <span>{city.travelers}</span>
                              <button 
                                onClick={() => handleTravelersChange(index, true)}
                                className="travelerCounter button"
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
                            className="removeButton"
                          >
                            <AiOutlineClose />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    {/* From Input */}
                    <div className="singleInput flex">
                      <div className="iconDiv">
                        <HiOutlineLocationMarker className='icon'/>
                      </div>
                      <div className="texts">
                        <h4>From</h4>
                        <AirportSearch
                          value={cities[0].from}
                          onChange={(airport) => handleCityChange(0, 'from', airport)}
                          placeholder="Departure city"
                        />
                      </div>
                    </div>

                    {/* To Input */}
                    <div className="singleInput flex">
                      <div className="iconDiv">
                        <HiOutlineLocationMarker className='icon'/>
                      </div>
                      <div className="texts">
                        <h4>To</h4>
                        <AirportSearch
                          value={cities[0].to}
                          onChange={(airport) => handleCityChange(0, 'to', airport)}
                          placeholder="Arrival city"
                        />
                      </div>
                    </div>

                    {/* Departure Date Input with DatePicker */}
                    <div className="singleInput flex">
                      <div className="iconDiv">
                        <RxCalendar className='icon'/>
                      </div>
                      <div className="texts">
                        <h4>Departure</h4>
                        <DatePicker
                          selected={cities[0].departureDate}
                          onChange={(date) => handleDateChange(0, date)}
                          placeholderText="Select date"
                          minDate={new Date()}
                          className="datePicker"
                          dateFormat="MMMM d, yyyy"
                        />
                      </div>
                    </div>

                    {/* Return Date Input with DatePicker - Only for Round Trip */}
                    {activeTab === 'roundTrip' && (
                      <div className="singleInput flex">
                        <div className="iconDiv">
                          <RxCalendar className='icon'/>
                        </div>
                        <div className="texts">
                          <h4>Return</h4>
                          <DatePicker
                            selected={returnDate}
                            onChange={(date) => setReturnDate(date)}
                            placeholderText="Select date"
                            minDate={cities[0].departureDate || new Date()}
                            className="datePicker"
                            dateFormat="MMMM d, yyyy"
                          />
                        </div>
                      </div>
                    )}

                    {/* Travelers Input */}
                    <div className="singleInput flex">
                      <div className="iconDiv">
                        <RiAccountPinCircleLine className='icon'/>
                      </div>
                      <div className="texts">
                        <h4>Travelers</h4>
                        <div className="travelerCounter flex">
                          <button 
                            onClick={() => handleTravelersChange(0, false)}
                            className="travelerCounter button"
                          >
                            <FiMinus />
                          </button>
                          <span>{cities[0].travelers}</span>
                          <button 
                            onClick={() => handleTravelersChange(0, true)}
                            className="travelerCounter button"
                          >
                            <FiPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Add City Button - Only for Multi City */}
                {activeTab === 'multiCity' && (
                  <button 
                    onClick={handleAddCity}
                    className="addCityButton"
                  >
                    <AiOutlinePlus /> Add City
                  </button>
                )}
            </div>

            {/* Search Flight Button */}
            <div className="searchButtonContainer">
              <button className='btn btnBlock flex searchButton'>
                Search Flight
              </button>
            </div>
        </div>
    </div>
  )
}

export default Search