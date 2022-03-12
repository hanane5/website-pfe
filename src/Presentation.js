import React from "react";
import "./Presentation.css";

function Presentation() {
  return (
    <div className="presentation component__space" id="Presentation">

      <div className="heading">
        <h1 className="heading">A propos </h1>
        <p className="heading p__color">
        L’Ecole Supérieure de Technologie Sidi Bennour 
        </p>
        <p className="heading p__color">
        (ESTSB).
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__2">
            <div className="presentation__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="presentation__meta">
                <h1 className="presentation__text">Présentation</h1>
                <p className="p presentation__text p__color">
                (ESTSB) est un établissement public d’enseignement supérieur à finalité de formation des Techniciens Supérieurs. Elle a été créée en Août 2016 par le Ministère de l’Enseignement Supérieur, de la Formation des Cadres et de la Recherche Scientifique du Royaume du Maroc, 
                </p>
                <p className="p presentation__text p__color">
                L’ESTSB est une composante de l’Université Chouaib Doukkali d’El Jadida. Sa vocation est de former des Techniciens Supérieurs polyvalents,
                </p>
                <p className="p presentation__text p__color"> hautement qualifiés et immédiatement opérationnels après leur sortie de l’Ecole en tant que collaborateurs d’ingénieurs et de managers..</p>
              </div>
            </div>
          </div>

          <div className="col__2">
            <div className="presentation__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="presentation__meta">
                <h1 className="presentation__text">Diplôme de l’EST</h1>
                <p className="p presentation__text p__color">
                Le diplôme de l’EST permet au lauréat de l’Ecole Supérieure de Technologie de travailler dans une entreprise
                </p>
                <p className="p presentation__text p__color">
                ou bien de continuer dans un autre établissement supérieure. 
                </p>
                <p className="p presentation__text p__color"> La filière du diplôme obtenu à l’EST peut différer selon les filières proposées par l’Ecole concernée.</p>
              </div>
            </div>
          </div>

          <div className="col__2">
            <div className="presentation__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="presentation__meta">
                <h1 className="presentation__text">Accès à l’EST</h1>
                <p className="p presentation__text p__color">
                Sont admis à l’ESTSB, les bacheliers de l’enseignement secondaire technique,
                </p>
                <p className="p presentation__text p__color">
                scientifique et tertiaire. L’admission à l’Ecole (au de Diplôme Universitaire de Technologie « DUT ») 
              </p>
                
                <p className="p presentation__text p__color">se fait par voie de sélection par ordre de mérite après une présélection sur la base des notes obtenues au baccalauréat. Les candidats doivent être âgés de 22 ans au plus au 31 Décembre de l’année du concours et doivent déposer leurs dossiers de pré-inscription avant le 30 Juin de chaque année universitaire.</p>
              </div>
            </div>
          </div>

          <div className="col__2">
            <div className="presentation__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="presentation__meta">
                <h1 className="presentation__text">Seuils de l’EST</h1>
                <p className="p presentation__text p__color">
                Chaque année les élèves se posent des questions à propos du seuil EST, mais généralement il n’y a pas de seuils précis pour accéder à l’EST, 
                </p>
                <p className="p presentation__text p__color">
                vu que c’est la sélection des élèves qui détermine finalement qui est le dernier ayant été sélectionné pour chaque filière, et donc le seuil déterminé.
                </p>
                <p className="p presentation__text p__color">EST : Abréviation de l’Ecole Supérieure Technique dont la durée de formation est de 2 ans pour plusieurs spécialités techniques. L’étudiant obtient le diplôme DUT après sa formation..</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Presentation;