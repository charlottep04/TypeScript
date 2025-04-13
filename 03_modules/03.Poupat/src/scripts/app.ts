import { pi, phi, soustraire, absolue} from "./moduleMath.ts";
const resultat: HTMLDivElement = document.createElement("div");
resultat.textContent = `la valeur absolue de phi - pi = ${absolue(soustraire(phi, pi)).toString()}`;
document.body.appendChild(resultat);

