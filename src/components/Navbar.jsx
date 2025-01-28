import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="bg-black text-gray-300 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center px-4 relative">
       
            <h1 className="text-3xl font-bold text-orange-500 ml-4">Khushbu Chacholiya</h1>

         
            <ul className="hidden md:flex">
                <li className="p-5 hover:text-white">
                    <a href="#about">About</a>
                </li>
                <li className="p-5 hover:text-white">
                    <a href="#projects">Projects</a>
                </li>
                <li className="p-5 hover:text-white">
                    <a href="#contact">Contact</a>
                </li>
            </ul>

       
            <div onClick={handleNav} className="block md:hidden cursor-pointer text-white">
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>

       
            <div
                className={`fixed top-0 left-0 h-full w-[60%] bg-[#202121] text-gray-400 ease-in-out duration-500 z-50 ${
                    nav ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <h1 className="text-3xl font-bold text-orange-500 ml-4 mt-6">Khushbu Chacholiya</h1>
                <ul className="p-8 text-lg">
                    <li className="p-4 hover:text-white">
                        <a href="#home">Home</a>
                    </li>
                    <li className="p-4 hover:text-white">
                        <a href="#about">About</a>
                    </li>
                    <li className="p-4 hover:text-white">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="p-4 hover:text-white">
                        <a href="#experience">Experience</a>
                    </li>
                    <li className="p-4 hover:text-white">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
