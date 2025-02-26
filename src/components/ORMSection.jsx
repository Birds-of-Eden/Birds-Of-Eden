import React from "react";
import { CheckCircle, MessageSquare, TrendingUp } from "lucide-react";

const ORMSection = () => {
  const features = [
    {
      icon: <CheckCircle className="h-10 w-10 text-green-500" />,
      title: "Build Trust and Credibility",
      description:
        "Establish a strong online presence to enhance trust and credibility among your audience.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
      title: "Engage with Your Audience",
      description:
        "Proactively engage with customers through reviews, comments, and social media.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-purple-500" />,
      title: "Boost Your Brand Image",
      description:
        "Improve brand perception by highlighting positive experiences and addressing negative feedback.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 dark:bg-slate-700">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-4 text-4xl font-bold">
          Online Reputation Management
        </h2>
        <p className="mb-8 text-lg">
          Manage your online reputation to build trust, engage with your
          audience, and enhance your brand's image.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-slate-800"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-2xl font-semibold dark:text-teal-500">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <button className="boxshadow link mt-10">Learn More</button>
      </div>
    </section>
  );
};

export default ORMSection;
