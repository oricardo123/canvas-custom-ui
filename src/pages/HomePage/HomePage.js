import HomeTopGallery from "../../components/HomeTopGallery";
import HomeContainer2 from "../../components/HomeContainer2";
import HomeContainer3 from "../../components/HomeContainer3";
import GetInTouchHeading from "../../components/HomeGetInTouch";
import "./Homepage.css";
const HomePage = () => {
  return (
    <div className="home-page">
      <HomeTopGallery />
      <HomeContainer2 />
      <HomeContainer3 />
      <GetInTouchHeading />
    </div>
  );
};
export default HomePage;
