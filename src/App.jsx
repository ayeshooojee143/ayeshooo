// App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/header/Navbar";
import Footer from "./layout/footer/Footer.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import ServicesPage from "./pages/services/ServicesPage.jsx";
import Gallary from "./pages/Gallary/Gallary.jsx";
import ContactPage from "./pages/contact/ContactPages.jsx";
import ScrollToTop from "./component/ScrollToTop.jsx"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
   <ScrollToTop/>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
