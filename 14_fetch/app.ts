//fetch the latest earthquake data from the USGS API with this url
// https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=yesterday&endtime=today&minmagnitude=4

interface Earthquake {
  properties: {
    time: number;
    place: string;
    mag: number;
  };
}

class EarthquakeService {
  private async getEarthquakesFromUSGS(): Promise<Earthquake[]> {
    const response = await fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=yesterday&endtime=today&minmagnitude=4"
    );
    const earthquakejson = await response.json();
    return earthquakejson.features;
  }

  async displayEarthquakes() {
    try {
      // Await the promise to resolve
      const earthquakes = await this.getEarthquakesFromUSGS();
      earthquakes.forEach((earthquake) => {
        // Use forEach on the resolved earthquakes array
        const date: Date = new Date(earthquake.properties.time);
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Paris",
        };
        const dateString: string = date.toLocaleDateString("fr-FR", options);
        const finalString: string = `${dateString} - ${earthquake.properties.mag} - ${earthquake.properties.place}`;
        console.log(finalString);
      });
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération des données de tremblement de terre :', error);
    }
  }
}

const earthquakeService = new EarthquakeService();
earthquakeService.displayEarthquakes();
