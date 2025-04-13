class EarthquakeService {
    async getEarthquakesFromUSGS() {
      try {
        const response = await fetch(
          "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=yesterday&endtime=today&minmagnitude=4"
        );
        const earthquakejson = await response.json();
        return earthquakejson.features;
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération des données de tremblement de terre :",
          error
        );
        return [];
      }
    }
  
    async displayEarthquakes() {
      try {
        const earthquakes = await this.getEarthquakesFromUSGS();
        const ul = document.getElementById("earthquake-list");
        ul.innerHTML = ""; // réinitialisation de la liste des séismes
  
        earthquakes.forEach((earthquake) => {
          const date = new Date(earthquake.properties.time);
          const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Europe/Paris",
          };
          const dateString = date.toLocaleDateString("fr-FR", options);
          const finalString = `${dateString} - ${earthquake.properties.mag} - ${earthquake.properties.place}`;
  
          console.log(finalString);
  
          // Ajout des éléments dans le DOM
          const li = document.createElement("li");
          li.textContent = finalString;
          ul.appendChild(li);
        });
      } catch (error) {
        console.error("Erreur d'affichage des séismes :", error);
      }
    }
  }
  
  const earthquakeService = new EarthquakeService();
  earthquakeService.displayEarthquakes();
  