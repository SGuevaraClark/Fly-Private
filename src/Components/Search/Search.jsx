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
import '../AirportSearch/AirportSearch.css'

const Search = () => {
   const [activeTab, setActiveTab] = useState('roundTrip')
   const [cities, setCities] = useState([{from: '', to: ''}])
   const [departureDate, setDepartureDate] = useState(null)
   const [returnDate, setReturnDate] = useState(null)
   const [travelers, setTravelers] = useState(1)

   const handleAddCity = () => {
     setCities([...cities, {from: '', to: ''}])
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

   const increaseTravelers = () => {
     setTravelers(prev => prev + 1)
   }

   const decreaseTravelers = () => {
     setTravelers(prev => prev > 1 ? prev - 1 : 1)
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
                    setCities([{from: '', to: ''}])
                    setReturnDate(null)
                  }}
                >
                    <span>One Way</span>
                </div>
                <div 
                  className={`singleBtn ${activeTab === 'roundTrip' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('roundTrip')
                    setCities([{from: '', to: ''}])
                  }}
                >
                    <span>Round Trip</span>
                </div>
                <div 
                  className={`singleBtn ${activeTab === 'multiCity' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('multiCity')
                    setCities([{from: '', to: ''}])
                  }}
                >
                    <span>Multi City</span>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2500" className="searchInputs flex">
                {/* Location Inputs - Always First */}
                {activeTab === 'multiCity' ? (
                  <div className="multiCityInputs" style={{width: '100%'}}>
                    {cities.map((city, index) => (
                      <div key={index} className="cityRow flex" style={{marginBottom: '15px', width: '100%'}}>
                        {/* From Input */}
                        <div className="singleInput flex" style={{flex: 1}}>
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
                        <div className="singleInput flex" style={{flex: 1}}>
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

                        {/* Remove button */}
                        {cities.length > 1 && (
                          <button 
                            onClick={() => handleRemoveCity(index)}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              color: 'var(--primaryColor)',
                              fontSize: '1.2rem',
                              display: 'flex',
                              alignItems: 'center',
                              marginLeft: '10px'
                            }}
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
                  </>
                )}

                {/* Date Inputs - Second */}
                {/* Departure Date Input with DatePicker */}
                <div className="singleInput flex">
                    <div className="iconDiv">
                        <RxCalendar className='icon'/>
                    </div>
                    <div className="texts">
                        <h4>Departure</h4>
                        <DatePicker
                            selected={departureDate}
                            onChange={(date) => setDepartureDate(date)}
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
                              minDate={departureDate || new Date()}
                              className="datePicker"
                              dateFormat="MMMM d, yyyy"
                          />
                      </div>
                  </div>
                )}

                {/* Travelers Input - Last */}
                <div className="singleInput flex">
                    <div className="iconDiv">
                        <RiAccountPinCircleLine className='icon'/>
                    </div>
                    <div className="texts">
                        <h4>Travelers</h4>
                        <div className="travelerCounter flex" style={{alignItems: 'center'}}>
                            <button 
                                onClick={decreaseTravelers}
                                style={{
                                    background: 'none',
                                    border: '1px solid var(--greyText)',
                                    borderRadius: '3px',
                                    width: '30px',
                                    height: '30px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                <FiMinus />
                            </button>
                            <span style={{margin: '0 15px', minWidth: '20px', textAlign: 'center'}}>{travelers}</span>
                            <button 
                                onClick={increaseTravelers}
                                style={{
                                    background: 'none',
                                    border: '1px solid var(--greyText)',
                                    borderRadius: '3px',
                                    width: '30px',
                                    height: '30px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                <FiPlus />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Add City Button - Only for Multi City, between Travelers and Search Flight */}
                {activeTab === 'multiCity' && (
                  <button 
                    onClick={handleAddCity}
                    style={{
                      background: 'none',
                      border: '1px dashed var(--primaryColor)',
                      borderRadius: '5px',
                      padding: '8px 15px',
                      color: 'var(--primaryColor)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '5px',
                      margin: '10px 0'
                    }}
                  >
                    <AiOutlinePlus /> Add City
                  </button>
                )}

                <button className='btn btnBlock flex'>Search Flight</button>
            </div>
        </div>
    </div>
  )
}

export default Search