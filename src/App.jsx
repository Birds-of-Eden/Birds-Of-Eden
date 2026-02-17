import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./layouts/Layout";
import LogoSpinner from "./components/LogoSpinner"; // Import the Loader component
import ProjectDetails from "./pages/ProjectDetails";

// Lazy load components
const TestYourIQ = lazy(() => import("./components/TestYourIQ/TestYourIQ"));
const AddBook = lazy(() => import("./fetaures/books/AddBook"));
const BooksView = lazy(() => import("./fetaures/books/BooksView"));
const EditBook = lazy(() => import("./fetaures/books/EditBook"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const AppDev = lazy(() => import("./pages/AppDev"));
const BackendTechnologiesStatic = lazy(
  () => import("./pages/BackendTechnologiesStatic"),
);
// const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const ContactForm = lazy(() => import("./pages/ContactForm"));
const Error = lazy(() => import("./pages/Error"));
const FrontendTechnologiesStatic = lazy(
  () => import("./pages/FrontendTechnologiesStatic"),
);
const GetStartedPage = lazy(() => import("./pages/GetStartedPage"));
const Home = lazy(() => import("./pages/Home"));
const IOSAppDev = lazy(() => import("./pages/IOSAppDev"));
const JobPostListStatic = lazy(() => import("./pages/JobPostListStatic"));
const LearnMorePage = lazy(() => import("./pages/LearnMorePage"));
const MobileApp = lazy(() => import("./pages/MobileApp"));
const Privacy = lazy(() => import("./pages/Privacy"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const Services = lazy(() => import("./pages/Services"));
const TeamListStatic = lazy(() => import("./pages/TeamListStatic"));
const TechnologyList = lazy(() => import("./pages/TechnologyList"));
const WebDev = lazy(() => import("./pages/WebDev"));
const OurService = lazy(() => import("./pages/OurService"));
const Accessories = lazy(() => import("./pages/Accessories"));
const PrinterPage = lazy(() => import("./pages/Printer"));
const KeyboardPage = lazy(() => import("./pages/Keyboard"));
const MousePage = lazy(() => import("./pages/Mouse"));
const Laptop = lazy(() => import("./pages/Laptop"));
const PaymentGatewayIntegration = lazy(
  () => import("./pages/PaymentGatewayIntegration"),
);
const QuickBookIntegration = lazy(() => import("./pages/QuickBookIntegration"));
const ZohoIntegration = lazy(() => import("./pages/ZohoIntegration"));
const Drones = lazy(() => import("./pages/Drones"));
const DroneDetailsPage = lazy(() => import("./pages/DroneDetailsPage"));
const BlogDetails = lazy(() => import("./components/Blogs/BlogDetails"));
const Blogs = lazy(() => import("./components/Blogs/Blogs"));
const Orm = lazy(() => import("./pages/Orm"));
const ORMDetails = lazy(() => import("./pages/ORMDetails"));

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
        <Suspense fallback={<LogoSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/team" element={<TeamListStatic />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/hardware" element={<Accessories />} />
            <Route path="/hardware/printer" element={<PrinterPage />} />
            <Route path="/hardware/keyboard" element={<KeyboardPage />} />
            <Route path="/hardware/mouse" element={<MousePage />} />
            <Route path="/hardware/laptop" element={<Laptop />} />
            <Route path="/hardware/printer" element={<PrinterPage />} />
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
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/drones" element={<Drones />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />

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
            <Route path="/orm" element={<Orm />} />
            <Route path="/drones/:id" element={<DroneDetailsPage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/orm-details" element={<ORMDetails />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
