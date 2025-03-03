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
    onChange(airport);
    setShowSuggestions(false);
  };

  return (
    <div className="airportSearch" ref={wrapperRef}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder={placeholder}
        className="airportInput"
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestionsList">
          {suggestions.map((airport) => (
            <li
              key={airport.id}
              onClick={() => handleSelect(airport)}
              className="suggestionItem"
            >
              <div className="airportName">{airport.name}</div>
              <div className="airportDetails">
                {airport.city}, {airport.country}
                {airport.iata && ` (${airport.iata})`}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportSearch; 