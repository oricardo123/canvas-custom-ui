import VerticalLine from "./css/VerticalLine";
import "./css/footer.css";
import img from "../images/canvas-logo-brown.jpg";
const Footer = () => {
  return (
    <footer className="footer-bg text-white p-8">
      <div className="flex justify-evenly">
        <div className="basis-3/12">
          <img
            className="w-[20rem] h-[9rem]"
            src={img} // Replace with your logo URL
            alt="Logo"
          />
        </div>
        <VerticalLine />
        <div className="flex basis-6/12">
          <div className="flex-row">
            <h3 className="font-bold mb-4">CONTACT INFO</h3>
            <p>Business Email: sales@canvascontract.com</p>
            <p>Phone Number:</p>
            <p>Mobile: +44 (0)7773 888815</p>
            <p>Telephone (Portugal): +351 914 827020</p>
          </div>
          <div className="flex-col">
            <p>Business Address: 303 Raleigh House</p>
            <p>Dolphin Square</p>
            <p>London</p>
            <p>SW1V 3NP</p>
          </div>
        </div>
        <VerticalLine />
        <div className="flex-col basis-2/12">
          <h3 className="font-bold mb-4">PAGES</h3>
          <p>Home</p>
          <p>Contact</p>
          <p>Catalog</p>
          <p>Portfolio</p>
          <p>About Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
