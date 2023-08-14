import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "./constants";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect";
import "../styles/Header.css";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <header className="header">
      <div className="encabezado">
        <div className="recuadroLogo">
          <h1>
            <b className="logoText">{t("Flower List!")}</b>
          </h1>
          <img className="logoImg" src="./img/Icono.png" alt="Textp" />
        </div>

        <div className="menu">
          <nav>
            <ul>
              <li>
                <Link to="/" className="no-underline black">
                  {t("Inicio")}
                </Link>
              </li>
              <li>
                <Link to="/search" className="ml1 no-underline black">
                  {t("search")}
                </Link>
              </li>

              {authToken && (
                <li>
                  <Link to="/create" className="no-underline black">
                    {t("Guardar_Flores")}
                  </Link>
                </li>
              )}
              {authToken && (
                <li>
                  <Link to="/openai" className="no-underline black">
                    {t("OpenAi")}
                  </Link>
                </li>
              )}
              <li>
                <div className="flex flex-fixed menu">
                  <div style={{ color: "white" }} className="ml1 pointer black">
                    {t("Selecciona un idioma")}
                  </div>
                  <div className="ml1 pointer black"> : </div>
                  <div>
                    <LanguageSelect className="ml1 pointer black" />
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-fixed ">
          {authToken ? (
            <div
              className="pinterest-btn pinterest-btn--black pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                navigate(`/`);
              }}
            >
              {t("logout")}
            </div>
          ) : (
            <Link
              to="/login"
              className="pinterest-btn pinterest-btn--black no-underline black"
            >
              {t("login")}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
