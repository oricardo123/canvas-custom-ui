import Navbar from "./NavBarandFooter/Navbar.js";
import HomePage from "./pages/HomePage.js";
import Footer from "./NavBarandFooter/Footer.js";
import ContactPage from "./pages/ContactPage.js";
import CatalogPage from "./pages/CatalogPage.js";
import PortfolioPage from "./pages/PortfolioPage.js";
function App() {
  return (
    <div>
      <Navbar />
      <HomePage/>
      <Footer/>
    </div>
  )
};

export default App;
