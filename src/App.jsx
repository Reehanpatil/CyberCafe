import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/Aboutpage.jsx";
import ContactPage from "./pages/Contactpage.jsx";
import ServicesPage from "./pages/Servicespage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import JobDetailsPage from "./pages/JobDetailsPage.jsx";
import ReceivePaymentPage from "./pages/Receivepaymentpage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/job/:id' element={<JobDetailsPage />} />
        <Route path='/receive-payment' element={<ReceivePaymentPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
