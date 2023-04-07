import Navbar from "./NavBarandFooter/Navbar.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Footer from "./NavBarandFooter/Footer.js";
import ContactPage from "./pages/ContactPage.js";
import CatalogPage from "./pages/Catalog/CatalogPage.js";
import PortfolioPage from "./pages/PortfolioPage.js";
import AboutPage from "./pages/AboutPage.js";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar className="sticky top-0" />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
