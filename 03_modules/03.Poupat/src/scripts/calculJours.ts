import { calculerJoursRestants as nbTravail } from "./moduleTravail.ts";
import { calculerJoursRestants as nbVacances } from "./moduleVacances.ts";

const resultat1: HTMLDivElement = document.createElement("div");
resultat1.textContent = `Le nombre de jours de travail restants en 2024 est de ${nbTravail(200).toString()} jours`;
document.body.appendChild(resultat1);

const resultat2: HTMLDivElement = document.createElement("div");
resultat2.textContent = `Le nombre de jours de vacances restants en 2024 est de ${nbVacances(20).toString()} jours`;
document.body.appendChild(resultat2);



