// Updated App.jsx
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TestYourIQ from "./components/TestYourIQ/TestYourIQ";
import AddBook from "./fetaures/books/AddBook";
import BooksView from "./fetaures/books/BooksView";
import EditBook from "./fetaures/books/EditBook";
import AboutUs from "./pages/AboutUs";
import AppDev from "./pages/AppDev";
import BackendTechnologiesStatic from "./pages/BackendTechnologiesStatic";
import BlogsPage from "./pages/BlogsPage";
import ContactForm from "./pages/ContactForm";
import Error from "./pages/Error";
import FrontendTechnologiesStatic from "./pages/FrontendTechnologiesStatic";
import GetStartedPage from "./pages/GetStartedPage";
import Home from "./pages/Home";
import IOSAppDev from "./pages/IOSAppDev";
import JobPostListStatic from "./pages/JobPostListStatic";
import LearnMorePage from "./pages/LearnMorePage";
import MobileApp from "./pages/MobileApp";
import Privacy from "./pages/Privacy";
import ProductPage from "./pages/ProductPage";
import Services from "./pages/Services";
import TeamListStatic from "./pages/TeamListStatic";
import TechnologyList from "./pages/TechnologyList";
import WebDev from "./pages/WebDev";
import Layout from "./layouts/Layout";
import OurService from "./pages/OurService";
import Accessories from "./pages/Accessories";
import PaymentGatewayIntegration from "./pages/PaymentGatewayIntegration";
import QuickBookIntegration from "./pages/QuickBookIntegration";
import ZohoIntegration from "./pages/ZohoIntegration";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<TeamListStatic />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/hardware" element={<Accessories />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/career" element={<JobPostListStatic />} />
          <Route path="/app" element={<AppDev />} />
          <Route path="/OurService" element={<OurService />} />
          <Route path="/ios" element={<IOSAppDev />} />
          <Route path="/mobile" element={<MobileApp />} />
          <Route path="/web" element={<WebDev />} />
          <Route path="/technologies" element={<TechnologyList />}>
            <Route path="frontend" element={<FrontendTechnologiesStatic />} />
            <Route path="backend" element={<BackendTechnologiesStatic />} />
          </Route>
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/edit-book" element={<EditBook />} />
          <Route path="*" element={<Error />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
          <Route path="/products/:tab" element={<ProductPage />} />
          <Route path="/test-your-iq" element={<TestYourIQ />} />
          <Route path="/blogs" element={<BlogsPage />} />

          {/* New Routes for Other Services */}
          <Route
            path="/payment-gateway"
            element={<PaymentGatewayIntegration />}
          />
          <Route
            path="/quickbook-integration"
            element={<QuickBookIntegration />}
          />
          <Route path="/zoho-integration" element={<ZohoIntegration />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
