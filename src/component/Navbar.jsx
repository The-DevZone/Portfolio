
import React from 'react'
import Logo from "../assets/logo/logo.png"
import { SocialIcon } from 'react-social-icons'


const Navbar = ({ navbarItem }) => {
    // console.log(navbarItem.About)

    return (
        <nav className='bg-blue-600   flex justify-around items-center h-12  cursor-pointer '>
            {/* Logo */}
            <div className='h-16 w-16'>
                {/* <Rohit / Verma> */}
                <img src={Logo} alt="Rohit Verma logo" />
            </div>
            {/* NavLinks */}
            <ul className='flex gap-10 font-medium '>
                <li className='hover:text-white transition-shadow duration-100' >{navbarItem.About}</li>
                <li className='hover:text-white transition-shadow duration-100' >{navbarItem.Skills}</li>
                <li className='hover:text-white transition-shadow duration-100' >{navbarItem.Project}</li>
            </ul>
            {/* social Media icon */}
            <div className="flex gap-4 p-4  justify-center">
                <SocialIcon
                    className="  rounded-full transition-transform duration-300 hover:scale-110"
                    url="https://github.com/The-DevZone"
                    style={{ height: '30px', width: '30px' }}
                    fgColor="#ffffff"
                    bgColor="#333333"
                />
                <SocialIcon
                    className="  rounded-full transition-transform duration-300 hover:scale-110"
                    url="https://www.linkedin.com/in/rohit-verma-b07ba3242/"
                    style={{ height: '30px', width: '30px' }}
                    fgColor="#ffffff"
                    bgColor="#0a66c2"

                />
            </div>
        </nav>
    )
}

export default Navbar