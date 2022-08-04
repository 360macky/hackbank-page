import React from "react";
import "./App.css";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import Connector from "./assets/X.svg";
import BCP from "./assets/banks/BCP.png";
import BBVA from "./assets/banks/BBVA.png";
import Interbank from "./assets/banks/Interbank.png";
import Scotiabank from "./assets/banks/Scotiabank.png";
import DownloadAndroid from "./assets/DownloadAndroid.png";
import DownloadiPhone from "./assets/DownloadiPhone.png";
import Smartphone from "./assets/smartphone.png";

const SectionWipesStyled = styled.div`
  overflow: hidden;

  /* Hackbank in a smartphone floating animation */
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px) scale(1.5);
    }
    100% {
      transform: translate(0, 0px);
    }
  }

  @keyframes connector {
    25% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg) scale(0.4);
      filter: brightness(0%);
    }
    75% {
      transform: rotate(0);
    }
    85% {
      transform: scale(1.1);
    }
  }

  @keyframes bankboxes {
    25% {
      border: 1px solid #6afcc3;
    }
    50% {
      border: 1px solid black;
    }
    75% {
      border: 1px solid #6afcc3;
    }
  }

  .screen {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }

  @media only screen and (min-width: 640px) {
    .app-description {
      font-size: 1.8rem;
    }

    .app-brief-description {
      font-size: 3rem;
    }

    .screen-2 h2 {
      font-size: 2rem;
    }

    .screen-3 h2 {
      font-size: 2rem;
    }

    .connector {
      display: block !important;
      position: absolute;
      width: 100%;
      align-self: center;
      justify-self: center;
      width: 80px;
      animation: connector;
      animation-duration: 8s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    .bank-samples-container {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      width: 100% !important;
      max-width: 1020px;
      position: relative;
    }

    .bank-logo {
      height: 100px !important;
    }

    .bank-box {
      background-color: #1f1f1f;
      border-radius: 49px;
      padding: 32px 32px !important;
      margin: 16px !important;
      border: 1px solid #6afcc3;
      animation: bankboxes;
      animation-duration: 8s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    .benefit-box {
      display: flex !important;
      background-color: #c1e8fb;
      width: 300px;
      height: 300px;
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center;
      border-radius: 49px;
      margin-left: 20px;
      margin-right: 20px;
      padding: 20px;
    }

    .benefits-container {
      display: flex;
      flex-direction: row !important;
      width: auto !important;
    }

    .benefit-box p {
      font-size: 4.2rem !important;
    }

    .benefit-box h3 {
      font-size: 1.8rem !important;
    }
    .screen-4 {
      font-size: 2rem;
    }

    .predict-button {
      cursor: pointer;
      background-color: #006c4b;
      border-radius: 100px;
      color: #ffffff;
      border: 0;
      font-size: 2rem !important;
      padding: 0.6rem 5rem;
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 0 !important;
      transition-property: transform;
      transition-duration: 250ms;
      transition-timing-function: ease;
    }
  }

  .screen-2 h2 {
    padding: 1rem;
  }

  .cover-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #6afcc3;
    background: -webkit-linear-gradient(to top, #000000, #6afcc3);
    background: linear-gradient(to top, #000000, #6afcc3);
  }

  .cover-screen h1,
  .cover-screen h2,
  .cover-screen h3 {
    backdrop-filter: blur(4px);
    background: rgba(0, 0, 0, 0.6);
    padding: 6px 12px;
    margin: 6px;
    border-radius: 10px;
    color: #6afcc3;
  }

  .screen-2 {
    background-color: #000000;
    color: white;
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .screen-3 {
    background-color: #191c1a;
    color: white;
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .screen-4 {
    background-color: #6afcc3;
    color: #006c4b;
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .text-white {
    color: #ffffff;
    position: absolute;
  }

  .smartphone-image {
    width: 400px;
    position: absolute;
    animation-name: floating;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .bank-box {
    background-color: #1f1f1f;
    border-radius: 49px;
    padding: 8px 8px;
    margin: 8px 8px;
  }

  .bank-samples-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    max-width: 1020px;
    position: relative;
  }

  .bank-logo {
    height: 50px;
  }

  .connector {
    display: none;
  }

  .benefits-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .benefit-box {
    display: flex;
    background-color: #c1e8fb;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    border-radius: 49px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
  }

  .benefit-box-symbol {
  }

  .benefit-box p,
  .benefit-box h3 {
    color: #3e6374;
    line-height: 0;
  }

  .benefit-box p {
    font-size: 1.4rem;
  }

  .benefit-box h3 {
    font-size: 1.4rem;
  }

  .predict-button {
    cursor: pointer;
    background-color: #006c4b;
    border-radius: 100px;
    color: #ffffff;
    border: 0;
    font-size: 1.4rem;
    padding: 0.6rem 5rem;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    transition-property: transform;
    transition-duration: 250ms;
    transition-timing-function: ease;
  }

  .predict-button:hover,
  .predict-button:active {
    transform: scale(0.9);
  }

  .download-button-non-mobile {
    width: 240px;
    margin-left: 10px;
    margin-right: 10px;
    transition-property: transform;
    transition-duration: 250ms;
    transition-timing-function: ease;
    cursor: pointer;
  }

  .download-button-non-mobile:hover {
    transform: scale(1.1);
  }
`;

function App() {
  return (
    <SectionWipesStyled>
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <Scene pin>
          <div className="screen cover-screen">
            <img src={Smartphone} alt="" className="smartphone-image" />
            <h1
              className="app-title roboto-font text-white"
              style={{ top: "35%" }}
            >
              Hackbank
            </h1>
            <h2 className="app-brief-description roboto-font text-white">
              Antes de una enviar dinero. Seguridad.
            </h2>
            <h3
              className="app-description inter-font text-white"
              style={{ top: "55%" }}
            >
              Una app que te permite simular
              <br /> una transferencia interbancaria.
            </h3>
            {/* Botones de descarga */}
          </div>
        </Scene>
        <Scene pin>
          <div className="screen screen-2">
            <h2 className="roboto-font">
              Simula transferencias a través de los siguientes bancos
            </h2>
            <div className="bank-samples-container">
              <div className="bank-box">
                <img src={BCP} alt="BCP" className="bank-logo" />
              </div>
              <div className="bank-box">
                <img src={Interbank} alt="Interbank" className="bank-logo" />
              </div>
              <div className="bank-box">
                <img src={Scotiabank} alt="Scotiabank" className="bank-logo" />
              </div>
              <div className="bank-box">
                <img src={BBVA} alt="BBVA" className="bank-logo" />
              </div>
              <img src={Connector} alt="" className="connector" />
            </div>
          </div>
        </Scene>
        <Scene pin>
          <div className="screen screen-3">
            <h2 className="roboto-font">Te informará sobre</h2>
            <div className="benefits-container">
              <div className="benefit-box">
                <div className="benefit-box-symbol">
                  <p className="roboto-font font-bold">%+</p>
                </div>
                <div>
                  <h3 className="roboto-font font-black">Comisiones</h3>
                </div>
              </div>
              <div className="benefit-box">
                <div className="benefit-box-symbol">
                  <p className="roboto-font font-bold">S/</p>
                </div>
                <div>
                  <h3 className="roboto-font font-black">Límites de dinero</h3>
                </div>
              </div>
              <div className="benefit-box">
                <div className="benefit-box-symbol">
                  <p className="roboto-font font-bold">10:30</p>
                </div>
                <div>
                  <h3 className="roboto-font font-black">Horas inoperativas</h3>
                </div>
              </div>
            </div>
            <h2 className="roboto-font">
              desde el botón{" "}
              <button className="predict-button mono-font font-black">
                Predecir
              </button>
            </h2>
          </div>
        </Scene>
        <Scene pin>
          <div className="screen screen-4">
            <h2 className="roboto-font">Gratis. Y disponible en</h2>
            <div className="download-for-non-mobile">
              <a href="https://play.google.com/store/apps/details?id=io.hackbank.app">
                <img
                  src={DownloadAndroid}
                  alt="Descargar en Google Play"
                  title="Descargar en Google Play"
                  className="download-button-non-mobile"
                />
              </a>
              <a href="https://apps.apple.com/us/app/hackbank/id1635247314">
                <img
                  src={DownloadiPhone}
                  alt="Descargar en App Store"
                  title="Descargar en App Store"
                  className="download-button-non-mobile"
                />
              </a>
            </div>
            <div className="download-for-mobile"></div>
          </div>
        </Scene>
      </Controller>
    </SectionWipesStyled>
  );
}

export default App;
