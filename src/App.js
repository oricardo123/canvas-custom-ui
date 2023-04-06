import Navbar from "./NavBarandFooter/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Footer from "./NavBarandFooter/Footer.js";
import ContactPage from "./pages/ContactPage.js";
import CatalogPage from "./pages/CatalogPage.js";
import PortfolioPage from "./pages/PortfolioPage.js";
import AboutPage from "./pages/AboutPage.js";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
