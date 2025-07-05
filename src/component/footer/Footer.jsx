import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";


import React from 'react'

const Footer = () => {

    const handalclick = (sectionId) => {
        console.log(sectionId)
        const section = document.getElementById(sectionId)
        if (section) {
            window.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
            <div className="container mx-auto text-center">
                {/* Name / Logo */}
                <h2 className="text-xl font-semibold text-purple-500">Rohit Verma</h2>

                {/* Navigation Links - Responsive */}
                <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
                    {
                        [
                            { id: "about", label: "About" },
                            { id: "skill", label: "Skill" },
                            { id: "project", label: "Project" }
                        ].map((item) => (
                            <button
                                key={item.id}
                                className="hover:text-purple-500 text-sm sm:text-base my-1"
                                onClick={() => handalclick(item.id)}
                            >{item.label}</button>
                        ))
                    }
                </nav>

                {/* Social Media Icons - Responsive */}
                <div className="flex flex-wrap justify-center space-x-4 mt-6">
                    {[
                        { icon: <FaFacebook />, link: "https://www.facebook.com/tarun.kaushik.3511041/" },
                        { icon: <FaTwitter />, link: "https://twitter.com/CodingMaster6?s=09" },
                        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tarun-kaushik-553b441a4" },
                        { icon: <FaInstagram />, link: "https://www.instagram.com/coding_.master/" },
                        { icon: <FaYoutube />, link: "https://www.youtube.com/codingmasteryt" },
                    ].map((item) => (
                        <Link  >
                        </Link>
                    ))
                    
                    }
                </div>

                {/* Copyright Text */}
                <p className="text-sm text-gray-400 mt-6">
                    © 2025 Rohit Verma. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer