import { useTranslation } from "react-i18next";
import { languages } from "../constants";
import { useLanguageContext } from "../../core/contexts/language/context";
import "./Thefooter.css";

const TheFooter = () => {
  const { t } = useTranslation();
  const { changeLanguage } = useLanguageContext();

  const handleChange = ({ value }) => {
    console.log(value);
    changeLanguage(value);
  };

  return (
    <footer>
      <div className="container">
        <section>
          <h4 className="footer-title">{t("footer.learning paths")}</h4>
          <p>{t("footer.coding foundation")}</p>
          <p>{t("footer.Python developer")}</p>
          <p>{t("footer.web development")}</p>
          <p>{t("footer.coding for data")}</p>
          <p>{t("footer.front-end for beginners")}</p>
        </section>

        <section>
          <h4 className="footer-title">{t("footer.introduction courses")}</h4>
          <p>{t("footer.introduction to Python")}</p>
          <p>{t("footer.introduction to C")}</p>
          <p>{t("footer.introduction to C#")}</p>
          <p>{t("footer.introduction to SQL")}</p>
          <p>{t("footer.introduction to HTML")}</p>
        </section>

        <section>
          <h4 className="footer-title">{t("footer.intermediate courses")}</h4>
          <p>{t("footer.C# intermediate")}</p>
          <p>{t("footer.Python intermediate")}</p>
          <p>{t("footer.Java intermediate")}</p>
          <p>{t("footer.JavaScript intermediate")}</p>
        </section>

        <section>
          <h4 className="footer-title">{t("footer.community")}</h4>
          <p>{t("footer.discuss")}</p>
          <p>{t("footer.code bits")}</p>
          <p>{t("footer.leaderboard")}</p>
          <p>{t("footer.blog")}</p>
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
    </footer>
  );
};

export default TheFooter;
