const key = "aabad226ab52a9a2f0c635d062936c13";

const request = require("request");

function getTempsActuel(lat, lon, key) {
  // Temps actuel plus prediction de tous les trois heures sur une marge de 5 heures
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

getTempsActuel(48.8567, 2.3522, key);