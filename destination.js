import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const DestinationDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    // Fetch destination details
    fetch(http://localhost:5000/api/destinations/${id}).then((res) => res.json())
      .then((data) => setDestination(data));
  }, [id]);

  if (!destination) return <p>Loading...</p>;

  return (
    <div className="destination-details">
      <h1>{destination.name}</h1>
      <img src={destination.image} alt={destination.name} />
      <p>{destination.description}</p>
      <p>Price: ${destination.price}/night</p>
      <Link to={/booking/${destination._id}} className="btn">Book Now</Link>
    </div>
  );
};

export default DestinationDetails;