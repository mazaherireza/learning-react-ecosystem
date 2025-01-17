import { useTranslation } from "react-i18next";
import LargeLogo from "@/assets/LargeLogo.svg";
import SmallLogo from "@/assets/SmallLogo.svg";
import Profile from "@/assets/Profile.png";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./TheHeader.css";

const TheHeader = () => {
  const [xVisibility, setXVisibility] = useState(false);
  const { t } = useTranslation();

  return (
    <header>
      <div className="container">
        <img className="large-device" src={LargeLogo} alt="Logo" />
        <img className="small-device" src={SmallLogo} alt="logo" />
        <nav className="large-device">
          <ul>
            <li>
              <Link>{t("header.courses")}</Link>
            </li>
            <li>
              <Link>{t("header.leaderboard")}</Link>
            </li>
            <li>
              <Link>{t("header.code bits")}</Link>
            </li>
            <li>
              <Link>{t("header.discuss")}</Link>
            </li>
            <li>
              <Link>{t("header.blog")}</Link>
            </li>
          </ul>

          <button className="large-device pro-btn">{t("header.go pro")}</button>
        </nav>

        <section className="large-device lg-profile-wrapper">
          <div className="img-wrapper">
            <img src={Profile} alt="Profile" />
          </div>
        </section>

        <section className="small-device menu-section">
          <p className="menu-title">Menu</p>
          {!xVisibility && (
            <FiMenu
              style={{ fontSize: "large" }}
              onClick={() => setXVisibility(true)}
            ></FiMenu>
          )}
          {xVisibility && (
            <FiX
              style={{ fontSize: "large" }}
              onClick={() => setXVisibility(false)}
            ></FiX>
          )}
          {xVisibility && (
            <section className="dropdown">
              <ul>
                <li>
                  <Link>{t("header.courses")}</Link>
                </li>
                <li>
                  <Link>{t("header.leaderboard")}</Link>
                </li>
                <li>
                  <Link>{t("header.code bits")}</Link>
                </li>
                <li>
                  <Link>{t("header.discuss")}</Link>
                </li>
                <li>
                  <Link>{t("header.blog")}</Link>
                </li>
              </ul>

              <section className="sm-profile-wrapper">
                <div className="profile-info">
                  <div className="img-wrapper">
                    <img src={Profile} alt="Profile" />
                  </div>
                  <p className="usersname">Reza Mazaheri</p>
                </div>
                <FiChevronRight style={{ fontSize: "large" }}></FiChevronRight>
              </section>

              <section>
                <button>{t("header.go pro")}</button>
              </section>
            </section>
          )}
        </section>
      </div>
    </header>
  );
};

export default TheHeader;
