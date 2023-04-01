const OverlappingSVGs = () => {
    return (
      <div className="relative h-full w-full flex justify-center items-center">
        <img
          className="absolute h-full w-full object-contain"
          src={`${process.env.PUBLIC_URL}/images/vector1.svg`}
          alt="vector1"
        />
        <img
          className="absolute h-full w-full object-contain"
          src={`${process.env.PUBLIC_URL}/images/vector2.svg`}
          alt="vector2"
        />
      </div>
    );
  };
  
  export default OverlappingSVGs;
  