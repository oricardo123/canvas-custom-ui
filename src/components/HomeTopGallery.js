import img1 from "../images/canvas-image-3.png";
import img2 from "../images/canvas-image-2.png";

export default function HomeTopGallery() {
  return (
    <div className="flex mt-20">
      <div className="left-vector w-full h-[45rem] "></div>
      <div className="right-vector  w-full h-[49rem] ml-[-50rem] hidden md:block"></div>
      <div className="left-vector-content">
        <div className="left-vector-heading">
          Transform your space with our custom furniture solutions at Canvas
          Custom Furniture.
        </div>
        <div className="left-vector-links">
          <div className="connect-with-us">Connect With Us</div>
          <div className="learn-more">Learn More</div>
        </div>
      </div>
      <img className="image-1" alt="furniture" src={img1} />
      <img className="image-2" alt="furniture" src={img2} />
    </div>
  );
}
