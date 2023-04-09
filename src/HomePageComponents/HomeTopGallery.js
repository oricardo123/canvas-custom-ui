import { useNavigate } from "react-router-dom";
import img1 from "../images/canvas-image-3.png";
import img2 from "../images/canvas-image-2.png";
import "./HomeTopGallery.css";

export default function HomeTopGallery() {
  const navigate = useNavigate();

  const handleCatalogClick = () => {
    navigate("/catalog");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 text-white relative ">
        <div className="left-vector w-auto h-[45rem] relative scale-x-[-1] lg:mr-[-15rem] hidden md:block"></div>
        <div className="right-vector w-auto h-[49rem] ml-[-31rem] relative lg:ml-[-12rem]"></div>
        <h1 className="absolute w-[41rem] z-50 mt-40 ml-[9rem] font-bold text-[45px] ">
          Transform your space with our custom furniture solutions at Canvas
          Custom Furniture.
        </h1>

        <button
          onClick={() => handleCatalogClick()}
          className="absolute text-black bg-white z-50 top-[28.57%] mt-40 ml-[9rem] p-2 transparent-text-button rounded-md text-lg font-bold"
        >
          View Catalog
        </button>
        <button
          onClick={() => handleAboutClick()}
          className="absolute text-white z-50 top-[28.57%] mt-[10.2rem]  ml-[20rem] p-[0.4rem] outline outline-white rounded-md text-lg font-bold"
        >
          Learn More
        </button>
        <img src={img2} className="absolute right-[5%] bottom-[48%] w-auto rounded-2xl" />
        <img src={img1} className="absolute z-10 right-[15%] bottom-[15%] w-auto rounded-2xl" />
      </div>
    </>
  );
}
