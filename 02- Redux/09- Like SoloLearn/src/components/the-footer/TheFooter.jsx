import { useTranslation } from "react-i18next";
import { languages } from "../constants";
import { useLanguageContext } from "@/core/contexts/language/context";
import { Link } from "react-router-dom";
import "./Thefooter.css";

const TheFooter = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguageContext();

  const handleChange = ({ value }) => {
    changeLanguage(value);
  };

  return (
    <footer>
      <section className="catalogue">
        <div className="container">
          <section>
            <h4 className="footer-title">{t("footer.learning paths")}</h4>
            <ul>
              <li>
                <Link>{t("footer.coding foundation")}</Link>
              </li>
              <li>
                <Link>{t("footer.Python developer")}</Link>
              </li>
              <li>
                <Link>{t("footer.web development")}</Link>
              </li>
              <li>
                <Link>{t("footer.coding for data")}</Link>
              </li>
              <li>
                <Link>{t("footer.front-end for beginners")}</Link>
              </li>
            </ul>
          </section>

          <section>
            <h4 className="footer-title">{t("footer.introduction courses")}</h4>
            <ul>
              <li>
                <Link>{t("footer.introduction to Python")}</Link>
              </li>
              <li>
                <Link>{t("footer.introduction to C")}</Link>
              </li>
              <li>
                <Link>{t("footer.introduction to C#")}</Link>
              </li>
              <li>
                <Link>{t("footer.introduction to SQL")}</Link>
              </li>
              <li>
                <Link>{t("footer.introduction to HTML")}</Link>
              </li>
            </ul>
          </section>

          <section>
            <h4 className="footer-title">{t("footer.intermediate courses")}</h4>
            <ul>
              <li>
                <Link>{t("footer.C# intermediate")}</Link>
              </li>
              <li>
                <Link>{t("footer.Python intermediate")}</Link>
              </li>
              <li>
                <Link>{t("footer.Java intermediate")}</Link>
              </li>
              <li>
                <Link>{t("footer.JavaScript intermediate")}</Link>
              </li>
            </ul>
          </section>

          <section>
            <h4 className="footer-title">{t("footer.community")}</h4>
            <ul>
              <li>
                <Link>{t("footer.discuss")}</Link>
              </li>
              <li>
                <Link>{t("footer.code bits")}</Link>
              </li>
              <li>
                <Link>{t("footer.leaderboard")}</Link>
              </li>
              <li>
                <Link>{t("footer.blog")}</Link>
              </li>
            </ul>
          </section>

          <section>
            <h4 className="footer-title">{t("footer.language")}</h4>
            <select
              name="language"
              id="language"
              onChange={({ target }) => handleChange(target)}
            >
              {languages.map((lang) => (
                <option key={lang._id} value={lang.abbreviation}>
                  {lang.title}
                </option>
              ))}
            </select>
          </section>
        </div>

        <section className="links">
          <div className="container">
            <ul>
              <li>
                <Link>{t("footer.home")}</Link>
              </li>
              <li>
                <Link>{t("footer.FAQ")}</Link>
              </li>
              <li>
                <Link>{t("footer.contact")}</Link>
              </li>
              <li>
                <Link>{t("footer.careers")}</Link>
              </li>
              <li>
                <Link>{t("footer.terms of use")}</Link>
              </li>
            </ul>

            <section className="copyright">
              <span id="sololearn">Sololearn</span>
              <p>&copy; 2026</p>
            </section>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default TheFooter;
