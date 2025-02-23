import { motion } from "framer-motion";

const Privacy = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: { opacity: 0 },
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  // List item animation variants
  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen bg-gray-100 dark:bg-slate-950"
    >
      <div className="container mx-auto py-12 dark:bg-slate-950">
        <motion.div
          className="max-w-80vh mx-auto rounded-lg bg-white p-8 shadow-md dark:bg-slate-800"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1
            variants={contentVariants}
            className="mb-4 text-3xl font-bold text-gray-800 dark:text-purple-500"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            variants={contentVariants}
            className="mb-6 text-gray-600 dark:text-white"
          >
            At BIRDS OF EDEN, we take your privacy seriously. This Privacy
            Policy explains how we collect, use, and disclose information about
            you when you use our services. Please read this policy carefully to
            understand our practices regarding your information and how we will
            treat it.
          </motion.p>

          <motion.h2
            variants={contentVariants}
            className="mb-4 text-2xl font-semibold text-gray-800 dark:text-purple-500"
          >
            Information We Collect
          </motion.h2>

          <motion.p
            variants={contentVariants}
            className="mb-6 text-gray-600 dark:text-white"
          >
            We collect information from you when you visit our website, use our
            services, or communicate with us. This information may include: your
            name, email address, contact information, and any other information
            you provide to us.
          </motion.p>

          <motion.h2
            variants={contentVariants}
            className="mb-4 text-2xl font-semibold text-gray-800 dark:text-purple-500"
          >
            How We Use Your Information
          </motion.h2>

          <motion.div
            variants={contentVariants}
            className="mb-6 text-gray-600 dark:text-white"
          >
            We may use the information we collect from you to:
            <motion.ul className="list-disc pl-6" variants={containerVariants}>
              {[
                "Provide and improve our services",
                "Communicate with you about our services",
                "Personalize your experience",
                "Respond to your inquiries",
              ].map((item, index) => (
                <motion.li key={index} variants={listVariants} custom={index}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.h2
            variants={contentVariants}
            className="mb-4 text-2xl font-semibold text-gray-800 dark:text-purple-500"
          >
            Information Sharing and Disclosure
          </motion.h2>

          <motion.p
            variants={contentVariants}
            className="mb-6 text-gray-600 dark:text-white"
          >
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties. This does not include trusted third
            parties who assist us in operating our website, conducting our
            business, or servicing you, as long as those parties agree to keep
            this information confidential.
          </motion.p>

          <motion.h2
            variants={contentVariants}
            className="mb-4 text-2xl font-semibold text-gray-800 dark:text-purple-500"
          >
            Contact Us
          </motion.h2>

          <motion.p
            variants={contentVariants}
            className="mb-6 text-gray-600 dark:text-white"
          >
            If you have any questions about this Privacy Policy, you can contact
            us at privacy@birdsofeden.com.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Privacy;
