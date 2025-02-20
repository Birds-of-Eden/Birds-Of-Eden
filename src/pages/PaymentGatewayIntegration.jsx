const PaymentGatewayIntegration = () => {
  return (
    <div className="">
      <div className="mx-auto mb-16 mt-8 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
        <div className="transform rounded-lg bg-gray-100 p-8 shadow-lg transition duration-300 hover:scale-105 dark:bg-slate-800">
          {/* Title Section */}
          <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-purple-500 lg:text-4xl">
            Secure Payment Gateway Integration
          </h2>
          <p className="mb-6 text-lg text-gray-700 dark:text-white">
            We provide seamless **payment gateway integration** solutions for
            businesses looking to **accept online payments securely**. Whether
            you need to integrate **Stripe, PayPal, or Razorpay**, we ensure
            smooth and **hassle-free transactions** for your customers.
          </p>

          {/* Features Section */}
          <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
            🔹 Why Choose Our Payment Gateway Integration?
          </h3>
          <ul className="mb-6 list-inside list-disc text-lg text-gray-700 dark:text-white">
            <li>
              <span className="font-bold">Multi-Currency Support:</span> Accept
              payments in **different currencies** worldwide.
            </li>
            <li>
              <span className="font-bold">High Security Standards:</span>{" "}
              Implement **PCI-DSS compliance**, fraud protection, and **SSL
              encryption**.
            </li>
            <li>
              <span className="font-bold">Fast & Seamless Transactions:</span>{" "}
              Optimized APIs for **instant payment processing**.
            </li>
            <li>
              <span className="font-bold">Custom Checkout Experience:</span>{" "}
              Design tailored payment pages with a **smooth user experience**.
            </li>
            <li>
              <span className="font-bold">
                Recurring Payments & Subscriptions:
              </span>{" "}
              Automate billing cycles for **subscriptions and memberships**.
            </li>
          </ul>

          {/* Payment Providers Section */}
          <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
            🔹 Supported Payment Providers
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Stripe */}
            <div className="rounded-lg bg-white p-4 shadow-md transition hover:shadow-lg dark:bg-gray-900">
              <img
                src="https://logos-world.net/wp-content/uploads/2021/02/Stripe-Emblem.png"
                alt="Stripe"
                className="mx-auto mb-3 w-32"
              />
              <h4 className="text-center text-lg font-bold text-gray-800 dark:text-white">
                Stripe
              </h4>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                **Fast, secure, and developer-friendly** payment processing for
                businesses of all sizes.
              </p>
            </div>

            {/* PayPal */}
            <div className="rounded-lg bg-white p-4 shadow-md transition hover:shadow-lg dark:bg-gray-900">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="mx-auto mb-3 w-32"
              />
              <h4 className="text-center text-lg font-bold text-gray-800 dark:text-white">
                PayPal
              </h4>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                **Trusted worldwide**, offering both personal and business
                transaction solutions.
              </p>
            </div>

            {/* Razorpay */}
            <div className="rounded-lg bg-white p-4 shadow-md transition hover:shadow-lg dark:bg-gray-900">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/92/Razorpay_logo.svg"
                alt="Razorpay"
                className="mx-auto mb-3 w-32"
              />
              <h4 className="text-center text-lg font-bold text-gray-800 dark:text-white">
                Razorpay
              </h4>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                **Best suited for Indian businesses**, supporting UPI, credit
                cards, and wallets.
              </p>
            </div>
          </div>

          {/* Integration Process Section */}
          <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-800 dark:text-white">
            🔹 Our Integration Process
          </h3>
          <ul className="mb-6 list-inside list-disc text-lg text-gray-700 dark:text-white">
            <li>
              <span className="font-bold">
                Consultation & Requirements Analysis:
              </span>{" "}
              Understanding your business needs.
            </li>
            <li>
              <span className="font-bold">API Integration:</span> Seamless
              connection with **Stripe, PayPal, or Razorpay**.
            </li>
            <li>
              <span className="font-bold">Testing & Compliance:</span> Ensuring
              **secure transactions** before going live.
            </li>
            <li>
              <span className="font-bold">Go Live & Support:</span> Continuous
              **monitoring and maintenance** for smooth operations.
            </li>
          </ul>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">
              Ready to Accept Online Payments?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get started with **secure and efficient payment gateway
              integration today**.
            </p>
            <button className="mt-4 rounded-lg bg-purple-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-purple-700">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayIntegration;
