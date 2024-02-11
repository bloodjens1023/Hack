
const key = "aabad226ab52a9a2f0c635d062936c13";
const geocodeCity = require('./test-api');
const request = require("request");


function getTempsActuel(lat, lon, key) {
  // Temps actuel
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;

  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      // Traitez les données de réponse ici
      console.log(JSON.stringify(data, null, 2)); // Affiche les données formatées
    } else {
      console.log("Erreur:", error);
    }
  });
}

// Utilisation de la fonction
geocodeCity("Esmia")
  .then((result) => {
    console.log(result);
    if (result.geometry) {
      const lat = result.geometry.lat;
      const lon = result.geometry.lng;
      getTempsActuel(lat, lon, key);
    }
  })
  .catch((error) => {
    console.log(error);
    // Gérez l'erreur
  });