import img1 from "../images/canvas-image-3.png";
import img2 from "../images/canvas-image-2.png";
import "./HomeTopGallery.css";

export default function HomeTopGallery() {
  return (
    <>
      <div className="grid grid-cols-2 mt-20 text-white relative">
        <div className="left-vector h-[45rem] relative scale-x-[-1]"></div>
        <h1 className="absolute w-[41rem] z-50 mt-40 ml-[9rem] font-bold text-[45px]">
          Transform your space with our custom furniture solutions at Canvas
          Custom Furniture.
        </h1>
        <div className="right-vector h-[49rem] ml-[-31rem] relative"></div>
        <button className="absolute text-black bg-white z-50 top-[28.57%] mt-40 ml-[9rem] p-2 transparent-text-button rounded-md text-lg font-bold">
          View Catalog
        </button>

        <button className="absolute text-white z-50 top-[28.57%] mt-[10.2rem]  ml-[20rem] p-[0.4rem] outline outline-white rounded-md text-lg font-bold">
          Learn More
        </button>
      </div>
    </>
  );
}
