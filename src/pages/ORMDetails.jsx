import React from "react";
import { useTranslation } from "react-i18next";
import {
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  Users,
  MessageSquare,
  AlertTriangle,
} from "lucide-react"; // Import icons

const ORMDetails = () => {
  const { t } = useTranslation();

  const featureIcons = {
    monitoring: <ShieldCheck className="mr-2 h-6 w-6 text-blue-500" />,
    responding: <MessageSquare className="mr-2 h-6 w-6 text-green-500" />,
    contentCreation: <CheckCircle className="mr-2 h-6 w-6 text-purple-500" />,
    socialMedia: <Users className="mr-2 h-6 w-6 text-yellow-500" />,
    crisisManagement: <AlertTriangle className="mr-2 h-6 w-6 text-red-500" />,
    enhancedTrust: <ShieldCheck className="mr-2 h-6 w-6 text-blue-500" />,
    improvedBrandImage: <TrendingUp className="mr-2 h-6 w-6 text-green-500" />,
    increasedSales: <TrendingUp className="mr-2 h-6 w-6 text-purple-500" />,
    proactiveReputation: (
      <ShieldCheck className="mr-2 h-6 w-6 text-yellow-500" />
    ),
    competitiveAdvantage: <TrendingUp className="mr-2 h-6 w-6 text-red-500" />,
  };

  return (
    <section className="py-16 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-4xl font-extrabold text-gray-800 dark:text-white">
          {t("home.ormDetails.title")}
        </h2>
        <p className="mb-10 text-center text-lg text-gray-600 dark:text-gray-300">
          {t("home.ormDetails.description")}
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-teal-400">
              {t("home.ormDetails.keyAspectsTitle")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.monitoring}
                {t("home.ormDetails.monitoring")}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.responding}
                {t("home.ormDetails.responding")}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.contentCreation}
                {t("home.ormDetails.contentCreation")}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.socialMedia}
                {t("home.ormDetails.socialMedia")}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.crisisManagement}
                {t("home.ormDetails.crisisManagement")}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-teal-400">
              {t("home.ormDetails.benefitsTitle")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.enhancedTrust}
                {t("home.ormDetails.enhancedTrust")}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.improvedBrandImage}
                {t("home.ormDetails.improvedBrandImage")}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.increasedSales}
                {t("home.ormDetails.increasedSales")}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.proactiveReputation}
                {t("home.ormDetails.proactiveReputation")}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.competitiveAdvantage}
                {t("home.ormDetails.competitiveAdvantage")}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("home.ormDetails.conclusion")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ORMDetails;
