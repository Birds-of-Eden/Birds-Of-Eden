// ProductPage.js
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import Corporate from "../pages/Corporate";
import Ecommerce from "../pages/Ecommerce";
import Financial from "../pages/Financial";
import Govt from "../pages/Govt";
import SEO from "../pages/SEO";

const ProductPage = () => {
  const { tab } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tab || "govt");
  const { t } = useTranslation();

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

  // Animation Variants
  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="">
      <div className="container mx-auto p-4">
        <motion.h1
          className="my-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text pb-4 text-center text-4xl font-extrabold text-transparent sm:text-5xl"
          variants={tabVariants}
          initial="hidden"
          animate="visible"
        >
          {t("products.ourProducts")}
        </motion.h1>
        <motion.div
          className="mb-4 flex overflow-x-scroll border-b sm:overflow-x-visible"
          variants={tabVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className={`whitespace-nowrap px-4 py-2 ${
              activeTab === "govt" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => navigate("/products/govt")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("products.govt")}
          </motion.button>
          <motion.button
            className={`whitespace-nowrap px-4 py-2 ${
              activeTab === "seo" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => navigate("/products/seo")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("products.seo")}
          </motion.button>
          <motion.button
            className={`whitespace-nowrap px-4 py-2 ${
              activeTab === "financial" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => navigate("/products/financial")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("products.financial")}
          </motion.button>
          <motion.button
            className={`whitespace-nowrap px-4 py-2 ${
              activeTab === "corporate" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => navigate("/products/corporate")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("products.corporate")}
          </motion.button>
          <motion.button
            className={`whitespace-nowrap px-4 py-2 ${
              activeTab === "ecommerce" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => navigate("/products/ecommerce")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("products.ecommerce")}
          </motion.button>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-4"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductPage;
