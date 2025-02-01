import { motion } from "framer-motion";
// import React from "react";

const Privacy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100  dark:bg-slate-950"
    >
      <div className="container mx-auto py-12 dark:bg-slate-950 ">
        <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md dark:bg-slate-800 ">
          <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-purple-500">
            Privacy Policy
          </h1>
          <p className="mb-6 text-gray-600 dark:text-white">
            At BIRDS OF EDEN, we take your privacy seriously. This Privacy
            Policy explains how we collect, use, and disclose information about
            you when you use our services. Please read this policy carefully to
            understand our practices regarding your information and how we will
            treat it.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-purple-500">
            Information We Collect
          </h2>
          <p className="mb-6 text-gray-600 dark:text-white">
            We collect information from you when you visit our website, use our
            services, or communicate with us. This information may include: your
            name, email address, contact information, and any other information
            you provide to us.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-purple-500">
            How We Use Your Information
          </h2>
          <p className="mb-6 text-gray-600 dark:text-white">
            We may use the information we collect from you to:
            <ul className="list-disc pl-6">
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Personalize your experience</li>
              <li>Respond to your inquiries</li>
            </ul>
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-purple-500">
            Information Sharing and Disclosure
          </h2>
          <p className="mb-6 text-gray-600 dark:text-white">
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties. This does not include trusted third
            parties who assist us in operating our website, conducting our
            business, or servicing you, as long as those parties agree to keep
            this information confidential.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-purple-500">
            Contact Us
          </h2>
          <p className="mb-6 text-gray-600 dark:text-white">
            If you have any questions about this Privacy Policy, you can contact
            us at privacy@birdsofeden.com.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;
