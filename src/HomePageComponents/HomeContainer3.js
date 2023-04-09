import img1 from "../images/canvas-image-12.jpg";
import img2 from "../images/canvas-image-13.jpg";
import img3 from "../images/canvas-image-14.jpg";

const HomeContainer3 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:h-auto w-full HomeContainer3bg">
      <div className="flex-row items-center justify-center px-4 pt-8 pb-1 lg:h-auto lg:mx-[8rem] lg:p-8 lg:flex-basis-1/2 lg:my-[12rem]">
        <h1 className="text-white font-bold text-4xl">Why Choose Us?</h1>

        <p className="text-white text-xl mt-[1.25rem]">
          We never lose sight of our clients' requirements and expectations,
          ensuring complete satisfaction. We are committed to promoting designs
          that are:
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-basis-1/2">
        <div className="flex xs:mt-9 xs:mb-4 lg:mt-0 lg:mb-0 lg:flex-col justify-evenly">
          <img
            alt="inspecting top of table"
            src={img1}
            className="w-auto h-auto object-cover max-h-[115px] max-w-[115px] flex-basis-1/3 rounded-full xs:p-2 lg:p-0 lg:mr-5"
          />
          <img
            alt="measuring"
            src={img2}
            className="w-auto h-auto object-cover max-h-[115px] max-w-[115px] flex-basis-1/3 rounded-full xs:p-2 lg:p-0 lg:mr-5"
          />
          <img
            alt="stitching onto furniture"
            src={img3}
            className="h-auto w-auto object-cover max-h-[115px] max-w-[115px] flex-basis-1/3 rounded-full xs:p-2 lg:p-0 lg:mr-5"
          />
        </div>
        <div className="flex flex-col justify-evenly p-2 lg:mr-[8rem]">
          <div className="flex-basis-1/3 xs:p-2 lg:p-0 xs:mb-4 lg:mb-0 lg:m-4">
            <h1 className="text-white font-bold text-xl">Distinctive</h1>
            <p className="text-white text-xl">
              We strive to create pieces that are visually stunning and will add
              a touch of sophistication and elegance.
            </p>
          </div>
          <div className="flex-basis-1/3 xs:p-2 lg:p-0 xs:mb-4 lg:mb-0 lg:m-4">
            <h1 className="text-white font-bold text-xl">Functional </h1>
            <p className="text-white text-xl">
              Our pieces are designed to not only look great, but also serve a
              purpose and make your life easier.
            </p>
          </div>
          <div className="flex-basis-1/3 xs:p-2 lg:p-0 xs:mb-4 lg:mb-0 lg:m-4">
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
