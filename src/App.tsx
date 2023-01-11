import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import styled from "styled-components";

import Connector from "./assets/X.svg";
import BCP from "./assets/banks/BCP.png";
import BBVA from "./assets/banks/BBVA.png";
import Interbank from "./assets/banks/Interbank.png";
import Scotiabank from "./assets/banks/Scotiabank.png";
import DownloadAndroid from "./assets/DownloadAndroid.png";
import DownloadiPhone from "./assets/DownloadiPhone.png";
import Smartphone from "./assets/smartphone.png";

import Apple from "./assets/apple.svg";
import Android from "./assets/android.svg";
import Computer from "./assets/computer.svg";

const SectionWipesStyled = styled.div`
  overflow: hidden;

  /* Hackbank in a smartphone floating animation */
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px) scale(1.1);
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
    min-height: 100vh;
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
      font-size: 2.6rem;
    }

    .screen-3 h2 {
      font-size: 2.6rem;
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
    .download-buttons-container {
      flex-direction: row !important;
    }
    .custom-download-button {
      padding: 1rem 1.5rem !important;
    }
    .app-buttons {
      width: auto !important;
    }
  }

  .app-buttons {
    width: 80%;
  }

  .screen-2 h2 {
    padding: 1rem;
  }

  .cover-screen h1,
  .cover-screen h2,
  .cover-screen h3 {
    backdrop-filter: blur(8px);
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
    height: 3.6rem;
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

  .download-buttons-description {
    font-size: 1.2rem;
    font-weight: 800;
    background-color: black;
  }

  .download-buttons-container {
    display: flex;
    flex-direction: column;
    column-gap: 1rem;
    row-gap: 0.4rem;
  }

  .custom-download-button {
    text-decoration: none;
    padding: 0.5rem 1.8rem;
    background-color: white;
    color: #006c4b;
    border: 0.2rem solid #6afcc3;
    border-radius: 1rem;
    box-shadow: 0px 0.8rem 1rem -0.1rem rgba(0, 0, 0, 0.1);
    transition-property: background-color color;
    transition-duration: 250ms;
    transition-timing-function: ease;
  }

  .custom-download-button div {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.4rem;
  }

  .custom-download-button:hover {
    background-color: #6afcc3;
    color: black;
  }

  .custom-download-button div {
    font-size: 1.2rem;
    font-weight: 800;
  }

  .smartphone-image {
    animation: none;
  }
`;

function App() {
  const { t } = useTranslation();

  return (
    <SectionWipesStyled>
      <div className="screen cover-screen">
        <img src={Smartphone} alt="iPhone Hackbank Preview" className="smartphone-image" />
        <h1 className="app-title roboto-font text-white" style={{ top: "35%" }}>
          Hackbank
        </h1>
        <h2 className="app-brief-description roboto-font text-white">
          {t("hero.title")}
        </h2>
        <h3
          className="app-description inter-font text-white"
          style={{ top: "55%" }}
        >
          {t("hero.message.01")}
          <br /> {t("hero.message.02")}
        </h3>
        <div className="app-buttons inter-font text-white" style={{ top: "72%" }}>
          <div className="download-buttons-container">
            <a
              href="https://web.hackbank.app/"
              className="custom-download-button"
            >
              <div>
                <img src={Computer} aria-hidden alt="" height={26} />
                <span>Web</span>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=io.hackbank.app"
              target={"_blank"}
              className="custom-download-button"
              rel="noreferrer"
            >
              <div>
                <img src={Android} aria-hidden alt="" height={26} />
                <span>Android</span>
              </div>
            </a>
            <a
              href="https://apps.apple.com/us/app/hackbank/id1635247314"
              target={"_blank"}
              className="custom-download-button"
              rel="noreferrer"
            >
              <div>
                <img src={Apple} aria-hidden alt="" height={26} />
                <span>iPhone</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="screen screen-2">
        <h2 className="roboto-font">{t("second.title")}</h2>
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
      <div className="screen screen-3">
        <h2 className="roboto-font">{t("third.title")}</h2>
        <div className="benefits-container">
          <div className="benefit-box">
            <div className="benefit-box-symbol">
              <p className="roboto-font font-bold">%+</p>
            </div>
            <div>
              <h3 className="roboto-font font-black">{t("third.box.01")}</h3>
            </div>
          </div>
          <div className="benefit-box">
            <div className="benefit-box-symbol">
              <p className="roboto-font font-bold">S/</p>
            </div>
            <div>
              <h3 className="roboto-font font-black">{t("third.box.02")}</h3>
            </div>
          </div>
          <div className="benefit-box">
            <div className="benefit-box-symbol">
              <p className="roboto-font font-bold">10:30</p>
            </div>
            <div>
              <h3 className="roboto-font font-black">{t("third.box.03")}</h3>
            </div>
          </div>
        </div>
        <h2 className="roboto-font">
          {t("third.box.description")}{" "}
          <button className="predict-button mono-font font-black" disabled>
            {t("third.box.button")}
          </button>
        </h2>
      </div>
      <div className="screen screen-4">
        <h2 className="roboto-font">{t("fourth.title")}</h2>
        <div className="download-for-non-mobile">
          <a
            href="https://play.google.com/store/apps/details?id=io.hackbank.app"
            target="_blank"
            rel="noreferrer"
            title={t("download.android") as string}
          >
            <img
              src={DownloadAndroid}
              alt={t("download.android") as string}
              title={t("download.android") as string}
              className="download-button-non-mobile"
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/hackbank/id1635247314"
            target="_blank"
            rel="noreferrer"
            title={t("download.ios") as string}
          >
            <img
              src={DownloadiPhone}
              alt={t("download.ios") as string}
              title={t("download.ios") as string}
              className="download-button-non-mobile"
            />
          </a>
        </div>
        <div className="download-for-mobile"></div>
      </div>
    </SectionWipesStyled>
  );
}

export default App;
