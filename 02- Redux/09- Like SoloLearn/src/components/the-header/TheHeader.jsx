import { useTranslation } from "react-i18next";
import Logo from "@/assets/Logo.svg";
import "./TheHeader.css";

const TheHeader = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="Logo" />
        <nav>
          <ul>
            <li>{t("header.courses")}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TheHeader;
