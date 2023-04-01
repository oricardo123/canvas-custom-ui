import vector from "./Vector/vector";
const HomePage = () => {
  return (
    <div className="vector1 grid grid-cols-1">
      <vector />
    </div>
  );

  /*return (
    <div className="vector1 grid grid-cols-1">
      <img
        src="../images/vector1.svg"
        className="h-full w-full object-contain row-start-1 col-start-1"
        alt="vector1"
      />
      <img
        src="../images/vector2.svg"
        className="vector2 h-full w-full object-contain row-start-1 col-start-1 translate-y-20"
        alt="vector2"
      />
    </div>
  );*/
};

export default HomePage;
