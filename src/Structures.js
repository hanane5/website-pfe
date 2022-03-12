import React, { useState } from "react";
import styled from "styled-components";

import conseil from "./img/conseil.png";
import corps from "./img/corps enseignants.jpg";
import administration from "./img/administration.jpeg";
import commission  from "./img/commission scientifique.png";
import bde  from "./img/présentation.png";
import espace  from "./img/esp.png";
import Log from "./img/Logo0.png"
import "./Structures.css";



export default function Structures() {
  const data = [
    {
      image: conseil,
      title: "Conseil d'établissement",
      subTitle: "supérieure de technologie ",
      cost: "services",
      duration: "Sidi Bennour",
    },
    {
      image: administration ,
      title: "Administration",
      subTitle: "de l'école supérieure de technologie de Sidi Bennour",
      cost: "Organigramme",
      duration: "Université Chouaib Doukkali",
    },
    {
      image: commission,
      title: "commission scientifique",
      subTitle: "de l'école supérieure de technologie",
      cost: " organisation",
      duration: "Sidi Bennour",
    },
    {
      image: corps,
      title: "Corps enseignants",
      subTitle: "de l'école supérieure de technologie",
      cost: "Formation initiale",
      duration: "Sidi Bennour",
    },
    {
      image: espace,
      title: "Espace étudiant",
      subTitle: "de l'école supérieure de technologie",
      cost: "Formation initiale",
      duration: "Sidi Bennour",
    },
    {
      image:bde,
      title: "BDE",
      subTitle: "de l'école supérieure de technologie",
      cost: "Clubs",
      duration: "Activités parascolaire",
    },
  ];

  const packages = [
    "Informations sur est sb",
    "Les servives",
    "Direction",
    "Formation",
  ];

  const [active, setActive] = useState(1);
  return (
    
    < div className="structures" id="structures">

    <Section id="recommend">
      <div className="title">
        <h2>Structures</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={Log} alt="" />
                  <img src={Log} alt="" />
                  <img src={Log} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>info</span>
                <span>{destination.duration}</span>
                
              </div>
            </div>
          );
        })}
      </div>
    </Section>
    </div>
  );
}


const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
    
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          
          
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
  
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
 
`;