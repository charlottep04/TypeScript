interface Adress {
    Properties: {
        city: string;
        postcode: number;
        street: string;
        housenumber: number;
        context: string;
        lat: number;
        lon: number;
    }
}


 class AdressService {
    async searchAdress(query: string, limit: number): Promise<Adress[]> {  // limit (un nombre entier représentant le nombre maximum de résultats à retourner)
        try {
            const encodedQuery = encodeURIComponent(query); // encodage de la requête pour l'URL : les espaces et autres caractères spéciaux soient encodés en général avec des pourcentages.
            const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodedQuery}&limit=${limit}`); // requête à l'API avec fetch en utilisant l'URL de l'API et les paramètres de recherche query et limit
            if (!response.ok) { // vérification de la réponse de l'API lors de la requête
                throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
              }
            const data = await response.json(); // extraction des données JSON de la réponse
            return this.extractAdresses(data); // extraction des adresses à partir des données JSON
            } catch (error) {
                console.error("Erreur lors de la récupération des adresses:", error);
                return [];
        }
    }

    // Attention car ces propriétés ne sont pas directement accessibles à la racine de l'objet retourné par l'API, vous devrez les extraire du champ properties de chaque objet Feature du tableau features retourné par l'API.
    private extractAdresses(data: any): Adress[] {
        return data.features.map((feature: any) => { // extraction des adresses à partir des données JSON et les retourner sous forme d'un tableau d'objets Adress
            const props = feature.properties; // extraire les propriétés de l'objet Feature
            return {
                Properties: {
                    city: props.city, // extraire les propriétés de l'objet Properties
                    postcode: props.postcode, 
                    street: props.street,
                    housenumber: props.housenumber,
                    context: props.context,
                    lat: feature.geometry.coordinates[1],
                    lon: feature.geometry.coordinates[0]
                }
            }
        });
    }
}

// Création d'une instance de la classe AdressService
const adressService = new AdressService();

// Fonction pour rechercher et afficher les adresses
async function searchAndDisplay(query: string, limit: number) {
    const results = await adressService.searchAdress(query, limit);
    const resultsContainer = document.getElementById("results") // récupération de l'élément HTML avec l'ID results
    if (resultsContainer) { // vérification de l'existence de l'élément HTML
        resultsContainer.innerHTML =""; // effacer le contenu de l'élément HTML
        if (results.length === 0){
            resultsContainer.innerHTML = "<p>Aucun résultat trouvé.</p>"; // affichage d'un message si aucun résultat n'est trouvé   
        } else {
            const list = document.createElement("ul"); // création d'une liste non ordonnée
            results.forEach((adress) => {
                const listItem = document.createElement("li"); // création d'un élément de liste)
                listItem.textContent = `${adress.Properties.housenumber} ${adress.Properties.street}, ${adress.Properties.postcode} ${adress.Properties.city} (${adress.Properties.context}) - Lat: ${adress.Properties.lat}, Lon: ${adress.Properties.lon}`; // affichage de l'adresse
                list.appendChild(listItem); // ajout de l'élément de liste à la liste
            });
            resultsContainer.appendChild(list); // ajout de la liste à l'élément HTML
        }
    }
}

  
  // Exemple d'utilisation
  searchAndDisplay("8 bd du port", 5);