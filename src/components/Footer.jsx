import React from 'react';
import logo from '../assests/logo.png' 

const Footer = () => {
  return (
    <div className="w-full bg-neutral-900 text-white py-6">
      <footer className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-6">

     
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Logo" className="w-14 h-14 mb-2" />
          <p className="text-gray-400 text-sm">
            Khushbu Chacholiya
            <br />
            📧 chacholiyakhushbu068@gmail.com
          </p>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/khushbu-chacholiya-073569262/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.icons8.com/?size=256&id=13930&format=png" 
              alt="LinkedIn" 
              className="w-8 h-8 hover:scale-110 hover:opacity-80 transition duration-300"
            />
          </a>
          <a href="https://www.instagram.com/__mysticmelody06__?igsh=MTV0bmd5ZDRiemw0Yg==" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.icons8.com/?size=256&id=Xy10Jcu1L2Su&format=png" 
              alt="Instagram" 
              className="w-8 h-8 hover:scale-110 hover:opacity-80 transition duration-300"
            />
          </a>
          <a href="https://github.com/khushbu068" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.icons8.com/?size=256&id=3tC9EQumUAuq&format=png" 
              alt="GitHub" 
              className="w-8 h-8 hover:scale-110 hover:opacity-80 transition duration-300"
            />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.icons8.com/?size=256&id=13963&format=png" 
              alt="Twitter" 
              className="w-8 h-8 hover:scale-110 hover:opacity-80 transition duration-300"
            />
          </a>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
