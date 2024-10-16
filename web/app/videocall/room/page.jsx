'use client'
import React, { useState, useEffect } from 'react';

function MyButton() {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const success = (position) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({ latitude, longitude });
    };

    const error = (error) => {
      console.error('Error getting geolocation:', error);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  const handleClick = () => {
    alert(`Latitude: ${coordinates.latitude}, Longitude: ${coordinates.longitude}`);
  };

  return (
    <button onClick={handleClick}>Get My Location</button>
  );
}

export default MyButton;