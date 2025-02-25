import { Circles } from "../../components/circles";
import { GiDeliveryDrone } from "react-icons/gi";
import { SiOpenai } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

// export default function CircleServices() {
//   return (
//     <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
//       <Circles iconSize={40}>
//         <Icons.openai className="h-[100px] w-[100px] shrink-0 rounded-full bg-white/80 p-4 text-[#412991] ring-2 ring-white ring-offset-2 ring-offset-transparent backdrop-blur-sm" />
//         <GiDeliveryDrone className="h-[100px] w-[100px] shrink-0 rounded-full bg-white/80 p-4 text-gray-700 ring-2 ring-white ring-offset-2 ring-offset-transparent backdrop-blur-sm" />
//         <FaReact className="h-[100px] w-[100px] shrink-0 rounded-full bg-white/80 p-4 text-[#61DAFB] ring-2 ring-white ring-offset-2 ring-offset-transparent backdrop-blur-sm" />
//         <SiNextdotjs className="h-[100px] w-[100px] shrink-0 rounded-full bg-white/80 p-4 text-black ring-2 ring-white ring-offset-2 ring-offset-transparent backdrop-blur-sm" />
//         <FaPython className="h-[100px] w-[100px] shrink-0 rounded-full bg-white/80 p-4 text-[#3776AB] ring-2 ring-white ring-offset-2 ring-offset-transparent backdrop-blur-sm" />
//         {/* New Image */}
//         {/* <div className="h-[100px] w-[100px] shrink-0 overflow-hidden rounded-full bg-white/80 p-2 ring-2 ring-white ring-offset-2 ring-offset-transparent backdrop-blur-sm">
//     <img
//       src={eccseoImage}
//       alt="EccSeo React"
//       className="h-full w-full rounded-full object-cover"
//     />
//   </div> */}
//       </Circles>
//     </div>
//   );
// }

export default function CircleServices() {
  const [radius, setRadius] = useState(180);

  // Dynamically update radius for mobile
  useEffect(() => {
    const updateRadius = () => {
      // For mobile screens (< 640px), use radius = 100
      if (window.innerWidth < 1280) {
        setRadius(120); // Radius = 100 for mobile
      } else {
        setRadius(180); // Default radius for other devices
      }
    };

    // Initial call
    updateRadius();

    // Update on window resize
    window.addEventListener("resize", updateRadius);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="relative flex h-[450px] w-full flex-col items-center justify-center lg:h-[700px]">
      <Circles iconSize={40} radius={radius}>
        <SiOpenai
          style={{
            boxShadow:
              "rgb(255 255 255) 0px 0px 5px, rgb(255 255 255) 0px 0px 0px, rgb(255 255 255) 0px 0px 50px, rgb(255 255 255) 0px 0px 100px",
          }}
          className="h-16 w-16 shrink-0 rounded-full bg-black p-4 text-white ring-2 ring-white ring-offset-2 ring-offset-transparent backdrop-blur-sm md:h-[100px] md:w-[100px]"
        />
        <GiDeliveryDrone
          style={{
            boxShadow:
              "rgb(251 191 36 / 70%) 0px 0px 5px, rgb(251 191 36 / 70%) 0px 0px 0px, rgb(251 191 36 / 70%) 0px 0px 50px, rgb(251 191 36 / 70%) 0px 0px 100px",
          }}
          className="h-16 w-16 shrink-0 rounded-full p-4 text-amber-400 ring-2 ring-amber-400 ring-offset-2 ring-offset-transparent backdrop-blur-sm md:h-[100px] md:w-[100px]"
        />
        <FaReact
          style={{
            boxShadow:
              "0 0 5px #03e9f4, 0 0 0px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4",
          }}
          className="h-16 w-16 shrink-0 rounded-full p-4 text-[#61DAFB] ring-1 ring-[#61DAFB] ring-offset-2 ring-offset-transparent md:h-[100px] md:w-[100px]"
        />
        <SiNextdotjs
          style={{
            boxShadow:
              "rgb(255 255 255) 0px 0px 5px, rgb(255 255 255) 0px 0px 0px, rgb(255 255 255) 0px 0px 50px, rgb(255 255 255) 0px 0px 100px",
          }}
          className="h-16 w-16 shrink-0 rounded-full bg-white text-black ring-2 ring-white ring-offset-2 ring-offset-transparent backdrop-blur-sm md:h-[100px] md:w-[100px]"
        />
        <div
          className="size-[100px] rounded-full p-4 ring-2"
          style={{
            boxShadow:
              "0 0 5px #346F9D, 0 0 0px #346F9D, 0 0 50px #346F9D, 0 0 100px #346F9D, 0 0 5px #F7D654, 0 0 0px #F7D654, 0 0 50px #F7D654, 0 0 100px #F7D654",
          }}
        >
          <img src="/python-logo.png" />
        </div>
      </Circles>
    </div>
  );
}
