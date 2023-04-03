import img1 from "../images/canvas-image-12.jpg";
import img2 from "../images/canvas-image-13.jpg";
import img3 from "../images/canvas-image-14.jpg";

const HomeContainer3 = () => {
  return (
    <div className="flex h-[34.9375rem] w-full HomeContainer3bg">
      <div className="flex flex-row ml-[8.75rem] items-center">
        <div>
          <h1 className="text-white font-bold mt-[13rem]">Why Choose Us?</h1>
          <p className="text-white mb-[13rem] mt-[1.25rem]">
            We never lose sight of our clients' requirements and expectations,
            ensuring complete satisfaction. We are committed to promoting
            designs that are:
          </p>
        </div>
      </div>
      <div className="flex justify-stretch ">
        <div className="flex flex-col justify-evenly">
          <img
            alt=""
            src={img1}
            className="rounded-full h-[113px] w-[113px] ml-[9.3125rem] mr-[2rem]"
          />
          <img
            alt=""
            src={img2}
            className="rounded-full h-[113px] w-[113px] ml-[9.3125rem] mr-[2rem]"
          />
          <img
            alt=""
            src={img3}
            className="rounded-full h-[113px] w-[113px] ml-[9.3125rem] mr-[2rem]"
          />
        </div>
        <div className="flex flex-col justify-evenly ml-[1.9rem]">
          <div>
            <h1 className="text-white font-bold">Distinctive</h1>
            <p className="text-white">
              We strive to create pieces that are visually stunning and will add
              a touch of sophistication and elegance
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
    </div>
  );
};

export default HomeContainer3;
