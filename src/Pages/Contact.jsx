import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    departureCity: '',
    destinationCity: '',
    date: '',
    passengers: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: null
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: null
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      departureCity: '',
      destinationCity: '',
      date: '',
      passengers: '',
      message: ''
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Request a Private Jet Quote</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our team will provide you with a personalized quote for your next luxury private jet experience.
          </p>
        </div>
        
        {formStatus.submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center mb-8">
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p>Your quote request has been submitted successfully. Our team will contact you shortly.</p>
            <button 
              onClick={() => setFormStatus({submitted: false, error: null})}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="passengers" className="block text-gray-700 font-medium mb-2">Passengers</label>
                <select
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="">Select number of passengers</option>
                  <option value="1-2">1-2 passengers</option>
                  <option value="3-4">3-4 passengers</option>
                  <option value="5-8">5-8 passengers</option>
                  <option value="9-14">9-14 passengers</option>
                  <option value="15+">15+ passengers</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="departureCity" className="block text-gray-700 font-medium mb-2">Departure City</label>
                <input
                  type="text"
                  id="departureCity"
                  name="departureCity"
                  value={formData.departureCity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="destinationCity" className="block text-gray-700 font-medium mb-2">Destination City</label>
                <input
                  type="text"
                  id="destinationCity"
                  name="destinationCity"
                  value={formData.destinationCity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Travel Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Additional Requirements</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Special requests, catering preferences, etc."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary py-3 px-8 text-center rounded-lg text-white font-medium shadow-md hover:shadow-lg"
              >
                Request Quote
              </button>
            </div>
          </form>
        )}
        
        <div className="mt-12 bg-light rounded-lg p-8 shadow-md">
          <h3 className="text-xl font-bold mb-4">Why Choose Our Private Jet Service?</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Access to over 7,000 aircraft worldwide</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>24/7 personal concierge service</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Custom luxury amenities and catering</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Expedited boarding with no security lines</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Flexible scheduling and last-minute bookings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact; 