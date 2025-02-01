// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const TeamList = () => {
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
//   );

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/team-member-list/")
//       .then((response) => {
//         setTeamMembers(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the team members!", error);
//       });
//   }, []);

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   const groupedTeamMembers = teamMembers.reduce((acc, member) => {
//     if (!acc[member.role]) {
//       acc[member.role] = [];
//     }
//     acc[member.role].push(member);
//     return acc;
//   }, {});

//   const roleOrder = ["CEO", "CTO", "Developer", "Intern", "Trainee"];

//   return (
//     <div
//       className={`flex min-h-screen flex-col ${
//         theme === "light"
//           ? "bg-gray-100 text-gray-900"
//           : "bg-gray-900 text-white"
//       }`}
//     >
//       <Navbar2 toggleTheme={toggleTheme} />
//       <div className="container mx-auto px-5 py-10 md:min-h-screen">
//         <h1 className="mb-12 animate-gradient-slow bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-center text-5xl font-extrabold leading-relaxed text-transparent">
//           Meet Our Team
//         </h1>
//         <div className="container mx-auto ">
//           {roleOrder.map(
//             (role) =>
//               groupedTeamMembers[role] && (
//                 <div key={role} className="mb-10">
//                   <h2 className="mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-center text-4xl font-bold text-transparent">
//                     {role}
//                   </h2>
//                   <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                     {groupedTeamMembers[role].map((member) => (
//                       <div
//                         key={member.id}
//                         className={`transform overflow-hidden rounded-xl ${
//                           theme === "light" ? "bg-white" : "bg-gray-800"
//                         } shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl`}
//                       >
//                         <div className="group relative">
//                           <img
//                             src={member.image}
//                             alt={member.name}
//                             className="h-64 w-full transform object-cover transition duration-500 ease-in-out group-hover:scale-110"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition duration-500 ease-in-out group-hover:opacity-80"></div>
//                         </div>
//                         <div className="p-6">
//                           <h3
//                             className={`mb-3 text-2xl font-semibold ${
//                               theme === "light" ? "text-gray-900" : "text-white"
//                             }`}
//                           >
//                             {member.name}
//                           </h3>
//                           <p
//                             className={`mb-5 ${
//                               theme === "light"
//                                 ? "text-gray-600"
//                                 : "text-gray-400"
//                             }`}
//                           >
//                             {member.role}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ),
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default TeamList;
