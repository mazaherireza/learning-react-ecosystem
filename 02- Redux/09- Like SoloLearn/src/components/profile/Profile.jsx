import ProfileImg from "@/assets/header/Profile.png";
import { useTranslation } from "react-i18next";
import "./Profile.css";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <div className="profile-wrapper">
      <div className="profile-background-top">
        <div className="container">
          <div className="information">
            <div className="img-wrapper">
              <img src={ProfileImg} alt="Profile" />
            </div>
            <h3 className="usersname">Reza Mazaheri</h3>
          </div>
          <div className="banner">
            <div>
              <span className="sololearn">Sololearn</span>
              <span className="pro">PRO</span>
            </div>
            <button>{t("profile.start today")}</button>
          </div>
        </div>
      </div>

      <div className="profile-background-bottom">
        <div className="container"></div>
      </div>
    </div>
  );
};

export default Profile;
