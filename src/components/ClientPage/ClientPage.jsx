import { useState } from "react";
import nahl from "../../assets/ann-nahl.png";
import buzzmoving from "../../assets/buzzmoving.png";
import repuprime from "../../assets/repuprime.jpeg";
import mhsa from "../../assets/moh.png";
import hrsd from "../../assets/HRSD.png";
import sdaia from "../../assets/sdaia.png";
import obg from "../../assets/OBG.png";
import rohm from "../../assets/ROHM.png";
import govtban from "../../assets/bangovt.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";

const clients = [
  {
    name: "Ann-Nahl Software",
    logo: nahl, // Update with actual logo URL
    description:
      "Ann-Nahl Software provides cutting-edge software solutions for businesses, with a focus on quality and customer satisfaction.",
    website: "https://aan-nahl.com/",
    contact: "contact@annnahlsoftware.com",
    services: ["Software Development", "Consulting", "Custom Solutions"],
    testimonial:
      "Ann-Nahl Software has transformed the way we operate, delivering high-quality software solutions tailored to our needs.",
  },
  {
    name: "BuzzMoving",
    logo: buzzmoving, // Update with actual logo URL
    description:
      "BuzzMoving offers a seamless moving experience, ensuring that all relocations are handled with care and precision.",
    website: "https://www.buzzmoving.com",
    contact: "contact@buzzmoving.com",
    services: ["Residential Moving", "Commercial Moving", "Storage Services"],
    testimonial:
      "BuzzMoving made our relocation stress-free. Their team is efficient, professional, and reliable.",
  },

  {
    name: "Reputation Prime.AI",
    logo: repuprime, // Update with actual logo URL
    description:
      "Reputation Prime helps businesses build and maintain a strong online reputation through strategic reputation management solutions.",
    website: "https://www.reputationprime.com",
    contact: "contact@reputationprime.com",
    services: ["Reputation Management", "Brand Monitoring", "Crisis Handling"],
    testimonial:
      "Reputation Prime played a vital role in enhancing our brand reputation and online credibility.",
  },

  {
    name: "Ministry of Health Saudi Arabia",
    logo: mhsa, // Replace with actual logo URL
    description:
      "The Ministry of Health Saudi Arabia provides healthcare services, policies, and medical regulations to enhance public health.",
    website: "https://www.moh.gov.sa/en/Pages/default.aspx",
    contact: "contact@moh.gov.sa",
    services: ["Public Health", "Medical Services", "Healthcare Policies"],
    testimonial:
      "The Ministry of Health has greatly improved our access to healthcare services and medical information.",
  },
  {
    name: "Ministry of Human Resources & Social Development",
    logo: hrsd, // Replace with actual logo URL
    description:
      "The Ministry of Human Resources and Social Development works towards an empowered community and an attractive labor market.",
    website: "https://www.hrsd.gov.sa/en",
    contact: "contact@hrsd.gov.sa",
    services: ["Labor Policies", "Social Development", "Employment Support"],
    testimonial:
      "HRSD has played a crucial role in creating a more dynamic and inclusive labor market.",
  },
  {
    name: "SDAIA (Saudi Data & AI Authority)",
    logo: sdaia, // Replace with actual logo URL
    description:
      "SDAIA is dedicated to advancing data and artificial intelligence solutions to drive digital transformation in Saudi Arabia.",
    website: "https://sdaia.gov.sa/en/default.aspx",
    contact: "contact@sdaia.gov.sa",
    services: ["Artificial Intelligence", "Big Data", "Digital Transformation"],
    testimonial:
      "SDAIA has significantly contributed to the growth of AI and data-driven initiatives in the country.",
  },
  {
    name: "Oman Botanic Garden",
    logo: obg, // Replace with actual logo URL
    description:
      "Oman Botanic Garden showcases the diverse plant life of Oman, promoting conservation and education.",
    website: "https://omanbotanicgarden.com/",
    contact: "contact@omanbotanicgarden.com",
    services: ["Botanical Conservation", "Environmental Education", "Tourism"],
    testimonial:
      "Oman Botanic Garden offers an immersive experience in Oman's rich biodiversity.",
  },
  {
    name: "Royal Opera House Muscat",
    logo: rohm, // Replace with actual logo URL
    description:
      "The Royal Opera House Muscat is Oman's premier venue for musical and cultural performances, promoting artistic excellence.",
    website: "https://rohmuscat.org.om/en/Pages/default.aspx",
    contact: "contact@rohmuscat.org.om",
    services: ["Performing Arts", "Cultural Events", "Music Education"],
    testimonial:
      "The Royal Opera House Muscat is a cultural gem, bringing world-class performances to Oman.",
  },
  {
    name: "Government of Bangladesh",
    logo: govtban, // Replace with actual logo URL
    description:
      "The official portal of the Government of Bangladesh provides information and services for citizens, businesses, and visitors.",
    website: "https://bangladesh.gov.bd/",
    contact: "contact@bangladesh.gov.bd",
    services: ["Government Services", "Public Administration", "E-Governance"],
    testimonial:
      "The Bangladesh Government portal offers a seamless experience in accessing essential government services.",
  },
  {
    name: "New York Quote Texas",
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    description:
      "New York Quote Texas provides competitive insurance quotes, helping individuals and businesses secure the best policies.",
    website: "https://newyorkquotetexas.com", // Replace with actual URL if available
    contact: "contact@newyorkquotetexas.com",
    services: ["Insurance Quotes", "Financial Planning", "Risk Assessment"],
    testimonial:
      "New York Quote Texas helped us find the perfect insurance plan at an unbeatable rate.",
  },
  {
    name: "Moving Texas",
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    description:
      "Moving Texas offers top-notch relocation services for residential and commercial clients across the state.",
    website: "https://movingtexas.com", // Replace with actual URL if available
    contact: "contact@movingtexas.com",
    services: ["Residential Moving", "Commercial Moving", "Storage Solutions"],
    testimonial:
      "Moving Texas made our relocation smooth and hassle-free with their professional and reliable team.",
  },
];

const ClientPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="mb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="heading">Our Clients</h1>

        <Splide
          options={{
            type: "loop", // Enables infinite loop
            perPage: 3, // Shows 3 clients at a time
            gap: 24, // Space between slides
            autoplay: true, // Enables automatic sliding
            interval: 3000, // Changes slide every 3 seconds
            pauseOnHover: true, // Stops auto-slide on hover
            arrows: true, // Shows navigation arrows
            pagination: true, // Shows pagination dots
            breakpoints: {
              1024: { perPage: 2 }, // Show 2 items on medium screens
              640: { perPage: 1 }, // Show 1 item on small screens
            },
            classes: {
              arrows: "splide__arrows custom-arrows",
              arrow: "splide__arrow custom-arrow",
              prev: "splide__arrow--prev custom-prev",
              next: "splide__arrow--next custom-next",
            },
          }}
        >
          {clients.map((client, index) => (
            <SplideSlide key={index}>
              <div className="px-4 py-6 sm:p-6">
                <div className="rounded-lg bg-white p-6 py-16 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="mx-auto mb-4 h-16"
                  />
                  <h2 className="mb-2 text-center text-xl font-semibold text-gray-900 dark:text-gray-200 sm:text-2xl">
                    {client.name}
                  </h2>
                  <p className="mb-4 text-center text-gray-700 dark:text-gray-300">
                    {client.description}
                  </p>
                  <ul className="mb-4 text-gray-700 dark:text-gray-300">
                    {client.services.map((service, idx) => (
                      <li key={idx} className="text-center">
                        • {service}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="mb-4 text-center italic text-gray-700 dark:text-gray-300">
                    "{client.testimonial}"
                  </blockquote>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
export default ClientPage;
