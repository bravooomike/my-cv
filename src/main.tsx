import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import type { CVData } from "./types";
import { CVHeader } from "./CVHeader/CVHeader";
import "./style.scss";
import { CVPersonal } from "./CVPersonal/CVPersonal";
import { CVDetails } from "./CVDetails/CVDetails";

const cvData: CVData = {
  personal: {
    photo: "https://placehold.co/400x400?text=MT",
    name: "Michał",
    lastName: "Tuszyński",
    position: "Szeryf",
  },
  details: {
    experience: [
      { id: 1, year: 2010, description: "Niezły kozak" },
      { id: 2, year: 2020, description: "Hultaj co nie miara" },
    ],
    education: ["Akademia Colta", "Kurs strzelania tyłem na ślepo"],
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="cv-main">
      <CVHeader name = {cvData.personal.name} lastName = {cvData.personal.lastName}/>
      <CVPersonal personal={cvData.personal}/>
      <CVDetails details={cvData.details}/>
    </main>
  </StrictMode>
);
