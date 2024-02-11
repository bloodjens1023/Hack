const key = "aabad226ab52a9a2f0c635d062936c13";
const request = require("request");
const opencage = require("opencage-api-client");



function geocodeCity(cityName) {
    return opencage
        .geocode({ q: cityName, language: "fr" })
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
            console.log("Error", error.message);
            if (error.status.code === 402) {
                console.log("hit free trial daily limit");
                console.log("become a customer: https://opencagedata.com/pricing");
            }
            return { error: error.message };
        });
}

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
