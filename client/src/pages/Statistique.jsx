import opencage from "opencage-api-client"
import request from "request";

export default function Statistique() {
    const key = "aabad226ab52a9a2f0c635d062936c13";


    function geocodeCity(cityName) {
        return opencage
            .geocode({
                q: cityName,
                language: "fr",
                key: process.env.REACT_APP_OPENCAGE_API_KEY,
            })
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
    return (
        <div></div>
    )
}