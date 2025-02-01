import { useEffect, useState } from "react"; // Make sure useState and useEffect are imported
import { useNavigate, useParams } from "react-router-dom";

import Corporate from "../pages/Corporate";
import Ecommerce from "../pages/Ecommerce";
import Financial from "../pages/Financial";
import Govt from "../pages/Govt";
import SEO from "../pages/SEO";

const ProductPage = () => {
  const { tab } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tab || "govt");

  useEffect(() => {
    setActiveTab(tab || "govt");
  }, [tab]);

  const renderContent = () => {
    switch (activeTab) {
      case "govt":
        return <Govt />;
      case "seo":
        return <SEO />;
      case "financial":
        return <Financial />;
      case "corporate":
        return <Corporate />;
      case "ecommerce":
        return <Ecommerce />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="container mx-auto p-4">
        <h1 className="my-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:text-5xl">
          Our Products
        </h1>
        <div className="mb-4 flex overflow-x-scroll border-b sm:overflow-x-visible">
          <button
            className={`whitespace-nowrap px-4 py-2 ${
              activeTab === "govt" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => navigate("/products/govt")}
          >
            Govt.
          </button>
          <button
            className={`whitespace-nowrap px-4 py-2 ${
              activeTab === "seo" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => navigate("/products/seo")}
          >
            ERP for SEO Agencies
          </button>
          <button
            className={`whitespace-nowrap px-4 py-2 ${
              activeTab === "financial" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => navigate("/products/financial")}
          >
            Financial Institutions
          </button>
          <button
            className={`whitespace-nowrap px-4 py-2 ${
              activeTab === "corporate" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => navigate("/products/corporate")}
          >
            Corporate
          </button>
          <button
            className={`whitespace-nowrap px-4 py-2 ${
              activeTab === "ecommerce" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => navigate("/products/ecommerce")}
          >
            E-Commerce
          </button>
        </div>
        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ProductPage;
