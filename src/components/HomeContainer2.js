import img from "../images/canvas-image-11.png";

const HomeContainer2 = () => {
  return (
    <div>
      <div className="flex container mt-20 mx-auto">
        <img
          src={img}
          alt="hotel room with furniture"
          className="w-[692px] h-[507px] rounded-2xl"
        />
        <div className=" bg-HomeContainer2TextBox h-[322px] w-[623px] backdrop-blur-sm p-6 rounded-2xl">
          <h2 className="text-3xl font-semibold mb-4">
            Personalised Pieces for Your Unique Space.
          </h2>
          <p>
            All our chairs, tables, and contract furniture are hand-made to
            order with acute attention to specifications, so each piece is
            tailored to our customer's exact requirements. Our manufacturing
            background allows for excellent customisation and flexibility, and
            we also have an extensive 'on-file' product selection to suit even
            the most original projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer2;

