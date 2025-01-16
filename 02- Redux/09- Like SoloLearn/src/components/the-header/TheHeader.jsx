import { useTranslation } from "react-i18next";
import Logo from "@/assets/Logo.svg";
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
        <img src={Logo} alt="Logo" />
        <nav>
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

          <button className="large-device-btn">{t("header.go pro")}</button>
        </nav>

        <section className="profile-wrapper">
          <img src={Profile} alt="Profile" />
        </section>
        <section className="small-device">
          <span>Menu</span>
          {!xVisibility && (
            <FiMenu onClick={() => setXVisibility(true)}></FiMenu>
          )}
          {xVisibility && <FiX onClick={() => setXVisibility(false)}></FiX>}
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

              <section className="profile-wrapper">
                <img src={Profile} alt="Profile" />
                <FiChevronRight></FiChevronRight>
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
