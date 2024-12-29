import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch destinations from the backend
    fetch("http://localhost:5000/api/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <div className="homepage">
      <h1>Explore Amazing Destinations</h1>
      <div className="destinations-grid">
        {destinations.map((destination) => (
          <div key={destination._id} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <Link to={/destination/${destination._id}}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;