var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var AdressService = /** @class */ (function () {
    function AdressService() {
    }
    AdressService.prototype.searchAdress = function (query, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var encodedQuery, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        encodedQuery = encodeURIComponent(query);
                        return [4 /*yield*/, fetch("https://api-adresse.data.gouv.fr/search/?q=".concat(encodedQuery, "&limit=").concat(limit))];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) { // vérification de la réponse de l'API lors de la requête
                            throw new Error("Erreur API: ".concat(response.status, " ").concat(response.statusText));
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, this.extractAdresses(data)]; // extraction des adresses à partir des données JSON
                    case 3:
                        error_1 = _a.sent();
                        console.error("Erreur lors de la récupération des adresses:", error_1);
                        return [2 /*return*/, []];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Attention car ces propriétés ne sont pas directement accessibles à la racine de l'objet retourné par l'API, vous devrez les extraire du champ properties de chaque objet Feature du tableau features retourné par l'API.
    AdressService.prototype.extractAdresses = function (data) {
        return data.features.map(function (feature) {
            var props = feature.properties; // extraire les propriétés de l'objet Feature
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
            };
        });
    };
    return AdressService;
}());
// Création d'une instance de la classe AdressService
var adressService = new AdressService();
// Fonction pour rechercher et afficher les adresses
function searchAndDisplay(query, limit) {
    return __awaiter(this, void 0, void 0, function () {
        var results, resultsContainer, list_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, adressService.searchAdress(query, limit)];
                case 1:
                    results = _a.sent();
                    resultsContainer = document.getElementById("results") // récupération de l'élément HTML avec l'ID results
                    ;
                    if (resultsContainer) { // vérification de l'existence de l'élément HTML
                        resultsContainer.innerHTML = ""; // effacer le contenu de l'élément HTML
                        if (results.length === 0) {
                            resultsContainer.innerHTML = "<p>Aucun résultat trouvé.</p>"; // affichage d'un message si aucun résultat n'est trouvé   
                        }
                        else {
                            list_1 = document.createElement("ul");
                            results.forEach(function (adress) {
                                var listItem = document.createElement("li"); // création d'un élément de liste)
                                listItem.textContent = "".concat(adress.Properties.housenumber, " ").concat(adress.Properties.street, ", ").concat(adress.Properties.postcode, " ").concat(adress.Properties.city, " (").concat(adress.Properties.context, ") - Lat: ").concat(adress.Properties.lat, ", Lon: ").concat(adress.Properties.lon); // affichage de l'adresse
                                list_1.appendChild(listItem); // ajout de l'élément de liste à la liste
                            });
                            resultsContainer.appendChild(list_1); // ajout de la liste à l'élément HTML
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// Exemple d'utilisation
searchAndDisplay("8 bd du port", 5);
