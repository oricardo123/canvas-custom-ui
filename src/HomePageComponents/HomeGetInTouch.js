import { useNavigate } from "react-router-dom";
import "../tailwind.css";

export default function HomeGetInTouch() {
  const navigate = useNavigate();
  const handleConnectButton = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="flex justify-center text-center text-[2.81rem]/[3.8rem] font-bold w-auto mx-[9rem]">
        Get in touch with us to start your custom furniture project today.
      </div>
      <div className="flex justify-center">
        <button
          className="connect-with-us-btn text-white px-5 py-2 rounded-md mb-[10.5rem] mt-[4rem]"
          onClick={() => handleConnectButton()}
        >
          Connect With Us
        </button>
      </div>
    </>
  );
}
