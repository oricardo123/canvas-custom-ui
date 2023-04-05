import HomeTopGallery from "../HomePageComponents/HomeTopGallery";
import HomeContainer2 from "../HomePageComponents/HomeContainer2";
import HomeContainer3 from "../HomePageComponents/HomeContainer3";
import TailoredToPerfection from "../HomePageComponents/TailoredToPerfection";
import GetInTouchHeading from "../HomePageComponents/HomeGetInTouch";
import "./Pagescss/Homepage.css";
const HomePage = () => {
  return (
    <div className="home-page">
      <HomeTopGallery />
      <HomeContainer2 />
      <HomeContainer3 />
      <TailoredToPerfection/>
      <GetInTouchHeading />
    </div>
  );
};
export default HomePage;
