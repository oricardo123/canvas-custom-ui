import { Link } from "react-router-dom";
import VerticalLine from "./css/VerticalLine";
import "./css/footer.css";
import img from "../images/canvas-logo-brown.jpg";
const Footer = () => {
  const navigation = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Catalog", href: "/catalog" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="footer-bg text-white p-8">
      <div className="flex sm:flex-col md:flex-row justify-evenly">
        <img className="w-[20rem] h-[9rem] hidden md:block" src={img} alt="Logo" />
        <VerticalLine />
        <div className="flex flex-col md:flex-row">
          <div className="">
            <h1 className="font-bold">CONTACT INFO</h1>
            <p>Business Email:</p>
            <p>
              <a href="mailto:sales@canvascontract.com">
                sales@canvascontract.com
              </a>
            </p>
            <div className="mt-5">
              <p>Phone Number:</p>
              <div className="mt-1">
                <p>
                  Mobile:
                  <a href="tel:+447773888815">
                    +44 (0)7773 888815
                  </a>
                </p>
                <p>
                  (Portugal):
                  <a href="tel:+351914827020">
                    +351 914827020
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col xs:mb-3 md:mb-0 md:flex-row md:ml-12 mt-5">
            <p>Business Address:</p>
            <p>303 Raleigh House </p>
            <p>Dolphin Square</p>
            <p>London </p>
            <p>SW1V 3NP</p>
          </div>
        </div>
        <VerticalLine />
        <div className="flex-col">
          <h3 className="font-bold mb-4">PAGES</h3>
          {navigation.map((item) => (
            <Link key={item.name} to={item.href}>
              <p className="py-1">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
