import img from "./Announcement.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="img-wrapper">
        <img src={img} />
      </div>
      <div className="content">
        <h4>Readers' Top Semptember Books</h4>
        <p>These are Goodreads members' most anticipated new titles</p>
      </div>
    </div>
  );
}
