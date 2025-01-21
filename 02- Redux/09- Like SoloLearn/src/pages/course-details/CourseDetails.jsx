import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Collapsible from "@/components/collapsible/Collapsible";
import Certificate from "@/assets/course/CertificateDisabled.png";
import { courses } from "@/constants/courses";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { _id } = useParams();
  const { t } = useTranslation();

  const course = courses.find((course) => course._id == _id);
  return (
    <div className="course-details-wrapper">
      <div className="container">
        <div className="inner-wrapper">
          <Collapsible {...course}></Collapsible>
          <div className="certificate-section">
            <div className="certificate-img-wrapper">
              <img src={Certificate} alt="Certificate" />
            </div>

            <h3 className="certificate-title">
              {t("course details.certificate title")}
            </h3>
            <p className="certificate-description">
              {t("course details.certificate description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
