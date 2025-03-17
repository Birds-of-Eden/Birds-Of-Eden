import { useTranslation } from "react-i18next";
import { CreditCard, ShieldCheck, DollarSign, Mail } from "lucide-react"; // Import icons

const PaymentGatewayIntegration = () => {
  const { t } = useTranslation();
  const paymentGateway = t("services.paymentGateway", {
    returnObjects: true,
  });

  const providerIcons = {
    // Replace with appropriate icons for each provider
    PayPal: <CreditCard className="mx-auto mb-3 h-8 w-8 text-blue-500" />,
    Stripe: <ShieldCheck className="mx-auto mb-3 h-8 w-8 text-purple-500" />,
    Razorpay: <DollarSign className="mx-auto mb-3 h-8 w-8 text-green-500" />,
    // Add more providers and their icons here
  };

  return (
    <div className="">
      <div className="mx-auto mb-16 mt-8 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
        <div className="transform rounded-lg bg-gray-100 p-8 shadow-lg transition duration-300 hover:scale-105 dark:bg-slate-800">
          {/* Title Section */}
          <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-purple-500 lg:text-4xl">
            {paymentGateway.title}
          </h2>
          <p className="mb-6 text-lg text-gray-700 dark:text-white">
            {paymentGateway.description}
          </p>

          {/* Features Section */}
          <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
            🔹 {paymentGateway.whyChoose.title}
          </h3>
          <ul className="mb-6 list-inside list-disc text-lg text-gray-700 dark:text-white">
            {paymentGateway.whyChoose.list.map((list, index) => (
              <li key={index}>
                <span className="font-bold">{list.title}</span> {list.text}
              </li>
            ))}
          </ul>

          {/* Payment Providers Section */}
          <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
            🔹 {paymentGateway.providers.title}
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {paymentGateway.providers.list.map((provider, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-4 shadow-md transition hover:shadow-lg dark:bg-gray-900"
              >
                {providerIcons[provider.title] || (
                  <CreditCard className="mx-auto mb-3 h-8 w-8 text-gray-500" />
                )}{" "}
                {/* Use default icon if provider icon not found */}
                <h4 className="text-center text-lg font-bold text-gray-800 dark:text-white">
                  {provider.title}
                </h4>
                <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                  {provider.text}
                </p>
              </div>
            ))}
          </div>

          {/* Integration Process Section */}
          <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-800 dark:text-white">
            🔹 {paymentGateway.integrationProcess.title}
          </h3>
          <ul className="mb-6 list-inside list-disc text-lg text-gray-700 dark:text-white">
            {paymentGateway.integrationProcess.list.map(
              (integration, index) => (
                <li key={index}>
                  <span className="font-bold">{integration.title}</span>{" "}
                  {integration.text}
                </li>
              ),
            )}
          </ul>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">
              {paymentGateway.cta.title}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {paymentGateway.cta.description}
            </p>
            <button className="mt-4 rounded-lg bg-purple-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-purple-700">
              {paymentGateway.cta.contact}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayIntegration;
