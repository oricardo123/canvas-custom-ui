import img1 from "../images/canvas-image-12.jpg";
import img2 from "../images/canvas-image-13.jpg";
import img3 from "../images/canvas-image-14.jpg";

const HomeContainer3 = () => {
  return (
    <div className="flex h-[559px] w-full HomeContainer3bg">
      <div className="flex flex-row basis-1/2  justify-center">
        <h1 className="text-white font-bold">Why Choose Us?</h1>
        <p className="text-white">
          We never lose sight of our clients' requirements and expectations,
          ensuring complete satisfaction. We are committed to promoting designs
          that are:
        </p>
      </div>
      <div className="flex flex-col  basis-1/4 justify-evenly">
        <img src={img1} className="rounded-full h-[115px] w-[115px]" />
        <img src={img2} className="rounded-full h-[115px] w-[115px]" />
        <img src={img3} className="rounded-full h-[115px] w-[115px]" />
      </div>
      <div className="flex flex-col basis-1/4 justify-evenly">
        <div>
          <h1 className="text-white font-bold">Distinctive</h1>
          <p className="text-white">
            We strive to create pieces that are visually stunning and will add a
            touch of sophistication and elegance
          </p>
        </div>
        <div>
          <h1 className="text-white font-bold">Functional </h1>
          <p className="text-white">
            Our pieces are designed to not only look great, but also serve a
            purpose and make your life easier.
          </p>
        </div>
        <div>
          <h1 className="text-white font-bold">Attention to detail</h1>
          <p className="text-white">
            We believe that every element of our furniture should be crafted
            with care and precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer3;
