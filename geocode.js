const opencage = require("opencage-api-client");

opencage
  .geocode({ q: "-18.8666397, 47.5320737", language: "fr" })
  .then((data) => {
    // console.log(JSON.stringify(data));
    if (data.status.code === 200 && data.results.length > 0) {
      const place = data.results[0];
      console.log(place.formatted);
      console.log(place.components.road);
      console.log(place.annotations.timezone.name);
    } else {
      console.log("status", data.status.message);
      console.log("total_results", data.total_results);
    }
  })
  .catch((error) => {
    console.log("error", error.message);
    if (error.status.code === 402) {
      console.log("hit free trial daily limit");
      console.log("become a customer: https://opencagedata.com/pricing");
    }
  });

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

module.exports = geocodeCity;
