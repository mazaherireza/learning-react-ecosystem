import banner from "./Banner.png";
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner-container">
      <img src={banner} alt="Banner" />
      <div className="banner-caption">
        The 15th annual Goodreads Choice Awards are finally here! Discover the
        300 nominees in 15 different categories, including the new Romantasy
        category! Vote for your favorite books in the Opening Round!
      </div>
    </div>
  );
}
