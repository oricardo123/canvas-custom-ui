import img from "../images/canvas-image-11.png";

const HomeContainer2 = () => {
  return (
    <div className="flex justify-center relative p-6 mt-[8.75rem] mb-[10.625rem] w-full ">
      <img
        src={img}
        alt="hotel room with furniture"
        className="w-[43.25rem] h-[31.6875rem] rounded-2xl scale-x-[-1] xl:ml-[-25rem]"
      />
      <div className="flex flex-col justify-center w-auto max-w-[38.94rem] mt-[5.8125rem] mb-[5rem] p-6 bg-HomeContainer2TextBox  backdrop-blur-3xl rounded-2xl absolute xl:backdrop-blur-sm xl:ml-[40rem]">
        <h2 className="text-3xl font-semibold">
          Personalised Pieces for Your Unique Space.
        </h2>
        <p className="max-w-[34.375rem] w-auto">
          All our chairs, tables, and contract furniture are hand-made to order
          with acute attention to specifications, so each piece is tailored to
          our customer's exact requirements. Our manufacturing background allows
          for excellent customisation and flexibility, and we also have an
          extensive 'on-file' product selection to suit even the most original
          projects.
        </p>
      </div>
    </div>
  );
};

export default HomeContainer2;
