import { useNavigate } from "react-router-dom";
import img1 from "../images/canvas-image-3.png";
import img2 from "../images/canvas-image-2.png";

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
        <div className="left-vector w-auto h-[45rem] relative scale-x-[-1] lg:mr-[-15rem] hidden md:block"/>
        <div className="right-vector w-auto h-[49rem] ml-[-31rem] relative lg:ml-[-12rem]"/>

        <h1 className="absolute max-w-[41rem]  mt-40 left-[10%] font-bold text-[45px] mr-3 z-50">
          Transform your space with our custom furniture solutions at Canvas
          Custom Furniture.
        </h1>
        <button
          onClick={() => handleCatalogClick()}
          className="absolute text-black bg-white mt-[32rem] md:mt-[25rem] left-[10%] p-2 mix-blend-screen rounded-md text-lg font-bold z-50"
        >
          View Catalog
        </button>
        <button
          onClick={() => handleAboutClick()}
          className="absolute mt-[32rem] md:mt-[25rem] left-[10%] ml-[10rem] p-[0.4rem] outline rounded-md text-lg font-bold z-50"
        >
          Learn More
        </button>

        <img
          src={img2}
          alt=""
          className="absolute right-[5%] bottom-[48%] w-auto rounded-2xl hidden lg:block"
        />
        <img
          src={img1}
          alt=""
          className="absolute z-10 right-[15%] bottom-[15%] w-auto rounded-2xl hidden lg:block"
        />
      </div>
    </>
  );
}
