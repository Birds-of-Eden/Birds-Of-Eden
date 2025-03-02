// import camera_drone from "/assets/camera_drone.jpg";
// import mini_drone from "/assets/mini_drone.jpg";
// import beginners_drone from "/assets/beginners_drone.jpg";

const droneData = [
  {
    id: "1",
    title: "AgriPrecision X1",
    description:
      "The AgriPrecision X1 is an advanced agricultural drone designed to transform modern farming practices. Equipped with cutting-edge multispectral imaging, this drone provides farmers with real-time crop health monitoring, allowing them to assess the condition of their crops with unparalleled accuracy. The multispectral cameras capture data across multiple wavelengths, enabling the identification of potential issues like nutrient deficiencies, pest infestations, and diseases at the earliest stages. With this information, farmers can make well-informed decisions on crop treatment, ensuring better yields and healthier crops.One of the standout features of the AgriPrecision X1 is its precision spraying system, which ensures the efficient distribution of pesticides, herbicides, and fertilizers. The system is designed to apply chemicals only where necessary, minimizing waste and reducing environmental impact. This precision makes the drone an invaluable tool in sustainable farming practices, as it optimizes input usage and ensures a more targeted approach to crop protection.Powered by artificial intelligence, the AgriPrecision X1 offers AI-driven crop analysis that further enhances its ability to monitor and assess crop health. This technology helps farmers quickly identify areas requiring attention, from pest infestations to growth inconsistencies, making it possible to respond swiftly and appropriately.The drone features variable-rate application technology, which adjusts spray rates in real-time, depending on the needs of the crop. This ensures that resources are used efficiently, reducing unnecessary costs while enhancing crop growth. Additionally, the real-time crop mapping capabilities provide farmers with a comprehensive overview of their entire field, facilitating better decision-making and optimized crop management.With a flight time of 45 minutes and a range of 10 kilometers, the AgriPrecision X1 offers exceptional coverage and reliability, making it an essential tool for modern precision agriculture. The drone also features a high-quality multispectral and 4K RGB camera, delivering crystal-clear images for analysis and monitoring.",
    specs: {
      flightTime: "45 minutes",
      range: "10 km",
      camera: "Multispectral + 4K RGB",
    },
    image:
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "2",
    title: "FireRescue Pro",
    description:
      "The high-performance emergency response drone is a state-of-the-art aerial tool designed specifically to enhance the effectiveness of emergency operations, particularly in high-risk scenarios such as firefighting and search & rescue missions. This cutting-edge drone is equipped with advanced thermal imaging technology that allows it to detect heat sources and hotspots even in the most challenging conditions. Whether it’s locating trapped individuals during search and rescue operations or identifying fire hotspots in wildfires, the thermal imaging system provides unparalleled precision in detecting critical areas that are otherwise difficult to spot.One of the standout features of this drone is its smoke penetration capabilities, which enable it to operate effectively in smoky environments where visibility is significantly reduced. This feature is particularly valuable in firefighting situations, where thick smoke often hampers the ability to assess the situation on the ground. With this technology, the drone can fly above the smoke and provide a clear view of the fire's progression, helping emergency responders make informed decisions and deploy resources more efficiently.The drone also offers real-time video transmission, allowing ground personnel and command centers to receive live footage of the ongoing operation. This instant communication ensures that decision-makers can stay up-to-date with the evolving situation, making it easier to coordinate efforts and allocate resources effectively.The drone also offers real-time video transmission, allowing ground personnel and command centers to receive live footage of the ongoing operation. This instant communication ensures that decision-makers can stay up-to-date with the evolving situation, making it easier to coordinate efforts and allocate resources effectively.",
    specs: {
      flightTime: "35 minutes",
      range: "8 km",
      camera: "Thermal + 4K HDR",
    },
    image:
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "3",
    title: "InspectorTech X2",
    description:
      "The industrial inspection drone is a revolutionary tool designed specifically for monitoring and maintaining critical infrastructure, ensuring the safety, efficiency, and longevity of essential structures. Equipped with state-of-the-art ultra-high resolution cameras, this drone captures every minute detail with exceptional clarity, allowing for precise inspections of infrastructure such as bridges, wind turbines, and large buildings. The ultra-high resolution cameras provide both visual and thermal imagery, enabling operators to detect subtle signs of wear, corrosion, or damage that may not be visible to the naked eye. This capability is crucial for identifying potential issues before they escalate, helping to prevent costly repairs and ensuring that infrastructure remains safe and operational.One of the standout features of the industrial inspection drone is its LiDAR (Light Detection and Ranging) scanning technology. LiDAR allows for highly accurate 3D mapping and topographic modeling of structures, providing a comprehensive view of the infrastructure’s condition. With LiDAR, the drone can scan large, complex structures quickly and efficiently, creating precise digital models that are invaluable for long-term maintenance planning and analysis. This technology is especially beneficial for inspecting difficult-to-reach areas or structures in remote locations, where traditional inspection methods might be time-consuming, costly, or even dangerous.Additionally, the drone is equipped with advanced crack detection AI, a powerful tool that automatically identifies and categorizes cracks, fractures, and other forms of structural damage in real-time. Using machine learning algorithms, the AI can distinguish between different types of cracks, assess their severity, and provide actionable insights to maintenance teams. This feature significantly reduces the time spent on manual inspections and enhances the accuracy of damage assessments, making it an essential tool for predictive maintenance and timely repairs.",
    specs: {
      flightTime: "40 minutes",
      range: "6 km",
      camera: "8K + LiDAR",
    },
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "4",
    title: "MineMapper Elite",
    description:
      "The specialized mining and quarry drone is a cutting-edge, robust aerial solution tailored to meet the demanding needs of the mining and quarrying industries. This advanced drone is equipped with state-of-the-art 3D mapping capabilities, allowing for the creation of highly detailed, accurate topographical models of mining sites and quarries. These 3D maps are invaluable tools for planning, operational monitoring, and optimizing resource extraction. Whether it's mapping large, open-pit mines or intricate underground tunnels, the drone provides precise measurements and an in-depth understanding of terrain and geological formations, ensuring that mining operations run smoothly and efficiently.Built with a dust-resistant design, this drone is specifically engineered to operate in the harsh, particulate-heavy environments typical of mining and quarry sites. The dust and debris-resistant body ensures that the drone continues to function optimally even in the most challenging conditions, extending its operational lifespan and minimizing the need for maintenance. This durability is crucial for reducing downtime and maintaining continuous monitoring of mining operations, allowing teams to stay ahead of potential issues and improve productivity.Equipped with an advanced underground navigation system, the drone is capable of operating in subterranean mining environments, where GPS signals are often unreliable or unavailable. This system uses a combination of advanced sensors and real-time data processing to accurately navigate through tunnels and shafts, providing invaluable insight into underground mine conditions. By utilizing this technology, mining teams can safely monitor and map underground spaces, enhancing both safety and efficiency in operations that were once difficult or impossible to inspect remotely.For mineral detection and safety monitoring, the drone incorporates specialized gas sensors and electromagnetic sensors. The gas sensors are designed to detect dangerous gases such as methane, carbon monoxide, and other hazardous compounds that can pose serious risks to workers. By continuously monitoring air quality, the drone helps ensure the safety of personnel on-site by alerting them to potential gas leaks before they reach dangerous levels. This real-time monitoring is essential for preventing accidents and ensuring that mining operations comply with safety regulations.",
    specs: {
      flightTime: "50 minutes",
      range: "12 km",
      camera: "6K + 3D Scanner",
    },
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  },
];

export default droneData;
