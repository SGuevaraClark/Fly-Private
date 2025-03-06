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