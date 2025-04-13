const API_KEY = '68cfd44a1992793f0cfc6dff15e55d3fb8b6955908022caea0da728af15b4a8e'; // Remplacez par votre clé API OpenAQ
const BASE_URL = 'https://api.openaq.org/v2';

export async function fetchLocationsByCountry(country: string): Promise<string[]> {
    const url = `${BASE_URL}/locations?country=${country}&limit=100`;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération des données : ${response.statusText}`);
        }

        const data = await response.json();
        return data.results.map((location: any) => location.name);
    } catch (error) {
        console.error(error);
        return [];
    }
}

export function LocationSelect(selectElement: HTMLSelectElement, locations: string[]): void {
    selectElement.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Sélectionnez une location";
    selectElement.appendChild(defaultOption);

    locations.forEach(location => {
        const option = document.createElement("option");
        option.value = location;
        option.textContent = location;
        selectElement.appendChild(option);
    });
}

export class MyFormManager {
    myForm: HTMLFormElement;
    countryInput: HTMLInputElement;
    result: HTMLDivElement;
    locationSelect: HTMLSelectElement;

    constructor() {
        this.myForm = document.getElementById("myForm") as HTMLFormElement;
        this.countryInput = document.getElementById("country") as HTMLInputElement;
        this.result = document.getElementById("result") as HTMLDivElement;
        this.locationSelect = document.getElementById("locations") as HTMLSelectElement;

        // Bind de la méthode handleSubmit
        this.myForm.addEventListener("submit", this.handleSubmit.bind(this));
    }

    async handleSubmit(event: Event) {
        // Empêcher le rechargement de la page
        event.preventDefault();

        const country = this.countryInput.value.trim();
        if (country.length === 0) {
            this.result.style.color = "red";
            this.result.textContent = "Veuillez entrer un nom de pays valide.";
            return;
        }

        this.result.style.color = "black";
        this.result.textContent = "Chargement des locations...";

        // Appel à la fonction fetchLocationsByCountry
        const locations = await fetchLocationsByCountry(country);

        if (locations.length > 0) {
            this.result.textContent = "Sélectionnez une location dans la liste déroulante.";
            LocationSelect(this.locationSelect, locations); // Utilisation de la fonction exportée
        } else {
            this.result.style.color = "red";
            this.result.textContent = "Aucune location trouvée pour ce pays.";
        }
    }
}