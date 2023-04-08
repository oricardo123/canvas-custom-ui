import img1 from "../images/canvas-image-12.jpg";
import img2 from "../images/canvas-image-13.jpg";
import img3 from "../images/canvas-image-14.jpg";

const HomeContainer3 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center h-auto lg:h-[34.9375rem] w-full HomeContainer3bg ">
      <div className="flex-row h-[10rem] items-center lg:h-auto lg:mr-[8rem] lg:ml-[8rem] p-8 lg:basis-1/2 lg:mt-[12rem]">
        <h1 className="text-white font-bold text-4xl">Why Choose Us?</h1>

        <p className="text-white mb-[13rem] mt-[1.25rem] text-xl">
          We never lose sight of our clients' requirements and expectations,
          ensuring complete satisfaction. We are committed to promoting designs
          that are:
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:basis-1/2">
        <div className="flex lg:flex-col justify-evenly">
          <img
            alt="inspecting top of table"
            src={img1}
            className="rounded-full h-auto w-auto max-h-[115px] max-w-[115px] basis-1/3"
          />
          <img
            alt="measuring"
            src={img2}
            className="rounded-full h-auto w-auto max-h-[115px] max-w-[115px] basis-1/3"
          />
          <img
            alt="stitching onto furniture"
            src={img3}
            className="rounded-full h-auto w-auto max-h-[115px] max-w-[115px] basis-1/3"
          />
        </div>
        <div className="flex flex-col justify-evenly p-2 lg:mr-[10.5rem] lg:mt-[3.5rem]">
          <div className="basis-1/3 lg:mb-4">
            <h1 className="text-white font-bold text-xl">Distinctive</h1>
            <p className="text-white text-xl">
              We strive to create pieces that are visually stunning and will add
              a touch of sophistication and elegance.
            </p>
          </div>
          <div className="basis-1/3 lg:mb-4">
            <h1 className="text-white font-bold text-xl">Functional </h1>
            <p className="text-white text-xl">
              Our pieces are designed to not only look great, but also serve a
              purpose and make your life easier.
            </p>
          </div>
          <div className="basis-1/3 lg:mb-4">
            <h1 className="text-white font-bold text-xl">
              Attention to detail
            </h1>
            <p className="text-white text-xl">
              We believe that every element of our furniture should be crafted
              with care and precision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer3;
