
// import React, { useEffect, useState } from 'react'
// import Logo from "../assets/logo/logo.png"
// import { SocialIcon } from 'react-social-icons'
// // import {fix}
// import { MdMenu } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";

// const Navbar = () => {
//     // console.log(navbarItem.About)
//     const [activeSection, setactiveSection] = useState("");
//     const [isOpen, setIsOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handalScroll = () => {
//             setIsScrolled(window.scrollY > 50)
//         }

//         window.addEventListener("scroll", handalScroll)
//         return () => window.removeEventListener("scroll", handalScroll)
//     }, [])


//     const handleMenuItemClick = (sectionId) => {
//         console.log(sectionId)
//         setactiveSection(sectionId)
//         setIsOpen(false)

//         const section = document.getElementById(sectionId);

//         if (section) {
//             section.scrollIntoView({ behavior: "smooth" })
//         }
//     }

//     const menuItem = [
//         { id: "about", label: "About" },
//         { id: "skill", label: "Skill" },
//         { id: "project", label: "Project" }
//     ]

//     return (
//         <>
//             <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
//                 }`}>
//                 {/* Logo */}
//                 <div>
//                     <div className='h-16 w-16'>
//                         {/* <Rohit / Verma> */}
//                         <img src={Logo} alt="Rohit Verma logo" />
//                     </div>
//                     {/* NavLinks */}
//                     <ul className='flex gap-10 font-medium '>
//                         {menuItem.map(item => (
//                             <li
//                                 key={item.id}
//                                 className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-yellow-200" : ""
//                                     }`}>
//                                 <button onClick={() => handleMenuItemClick(item.id)}>
//                                     {item.label}
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                     {/* social Media icon */}
//                     <div className="flex gap-4 p-4  justify-center">
//                         <SocialIcon
//                             className="  rounded-full transition-transform duration-300 hover:scale-110"
//                             url="https://github.com/The-DevZone"
//                             style={{ height: '30px', width: '30px' }}
//                             fgColor="#ffffff"
//                             bgColor="#333333"
//                         />
//                         <SocialIcon
//                             className="  rounded-full transition-transform duration-300 hover:scale-110"
//                             url="https://www.linkedin.com/in/rohit-verma-b07ba3242/"
//                             style={{ height: '30px', width: '30px' }}
//                             fgColor="#ffffff"
//                             bgColor="#0a66c2"
//                         />
//                     </div>
//                     <div className='md:hidden'>
//                         {isOpen ? (<MdMenu
//                             className='text-3xl text-[#8245ec] cursor-pointer'
//                             onClick={() => setIsOpen(false)}
//                         />) :
//                             (<RxCross2
//                                 className='text-3xl text-[#8245ec] cursor-pointer'
//                                 onClick={() => setIsOpen(true)}
//                             />)
//                         }
//                     </div>
//                 </div>

//                 {isOpen && (
//                     <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
//                         <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
//                             {menuItems.map((item) => (
//                                 <li
//                                     key={item.id}
//                                     className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""
//                                         }`}
//                                 >
//                                     <button onClick={() => handleMenuItemClick(item.id)}>
//                                         {item.label}
//                                     </button>
//                                 </li>
//                             ))}
//                             <div className="flex space-x-4">
//                                 <a
//                                     href="https://github.com/codingmastr"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-gray-300 hover:text-white"
//                                 >
//                                     <FaGithub size={24} />
//                                 </a>
//                                 <a
//                                     href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-gray-300 hover:text-white"
//                                 >
//                                     <FaLinkedin size={24} />
//                                 </a>
//                             </div>
//                         </ul>
//                     </div>
//                 )}
//             </nav>
//         </>
//     )
// }

// export default Navbar


import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior : "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Tarun</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Kaushik</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/codingmastr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
