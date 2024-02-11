import React, { useState } from 'react';
import opencage from 'opencage-api-client';

function LocationComponent() {
  const [cityName, setCityName] = useState('');
  const [coordinates, setCoordinates] = useState({});

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  function geocodeCity(cityName) {
    return opencage
      .geocode({ q: cityName, language: 'fr', key: process.env.REACT_APP_OPENCAGE_API_KEY })
      .then((data) => {
        if (data.status.code === 200 && data.results.length > 0) {
          const place = data.results[0];
          const formatted = place.formatted;
          const geometry = place.geometry;
          const timezone = place.annotations.timezone.name;
          return { formatted, geometry, timezone };
        } else {
          const error = data.status.message;
          const total_results = data.total_results;
          return { error, total_results };
        }
      })
      .catch((error) => {
        console.log('Error', error.message);
        if (error.status.code === 402) {
          console.log('hit free trial daily limit');
          console.log('become a customer: https://opencagedata.com/pricing');
        }
        return { error: error.message };
      });
  }

  const handleClick = () => {
    if (cityName.trim() !== '') {
      geocodeCity(cityName)
        .then((result) => {
          if (result.geometry) {
            const { lat, lng } = result.geometry;
            setCoordinates({ lat, lng });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <input type="text" value={cityName} onChange={handleChange} placeholder="Entrez le nom de la ville" />
      <button onClick={handleClick}>Obtenir les coordonnées</button>
      {coordinates.lat && coordinates.lng && (
        <div>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
        </div>
      )}
    </div>
  );
}

export default LocationComponent;