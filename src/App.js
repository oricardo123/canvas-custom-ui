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
import CatalogsPage from "./pages/CatalogsPage.js";
import CatalogContainer from "./components/Catalog/CatalogContainer.js";
import PortfolioPage from "./pages/PortfolioPage.js";
import AboutPage from "./pages/AboutPage.js";
import { Provider } from "react-redux";
import store from "./store";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar className="sticky top-0" />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route exact path="/catalogs" element={<CatalogsPage />} />
                <Route
                  exact
                  path="/catalogs/:id"
                  element={<CatalogContainer />}
                />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
