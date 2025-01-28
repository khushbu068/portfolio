import React from 'react';
import proj1 from '../assests/proj1.png';
import proj2 from '../assests/proj2.png';

const Projects = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="projects">
    <div className="pb-8">
      <p className="text-4xl mb-3 font-bold primary-color text-orange-500">Projects</p>
      <p className="text-gray-400">Check out some of my recent projects</p>
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
      {/* Project 1 */}
      <div className="max-w-[450px] w-full h-[500px] transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto bg-cover relative">
        <img src={proj1} alt="Project 1" className="w-full h-[200px] object-cover rounded-t-md" />
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
          <a href="https://github.com/khushidhakad114/React">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
          </a>
        </div>
        <div className="bg-[#202121] text-gray-300 p-5 rounded-b-md w-full h-[250px]">
          <h3 className="text-lg font-bold mb-2">Config Driven-UI Based Food-Ordering Website</h3>
          <p className="text-sm mb-2">
            Developed an online food ordering website that allows users to explore restaurants, browse menus, place
            orders, and provide feedback. Features include a search bar, filters, and a responsive design.
          </p>
          <p className="text-sm mb-2">
            <strong>Tools Used:</strong> ReactJS, Redux, React Router, CSS, Tailwind CSS, Daisy UI, ShadCN, Firebase,
            JavaScript, HTML.
          </p>
        </div>
      </div>
  
      {/* Project 2 */}
      <div className="max-w-[450px] w-full h-[500px] transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto bg-cover relative">
        <img src={proj2} alt="Project 2" className="w-full h-[200px] object-cover rounded-t-md" />
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
          <a href="https://weather-app-two-rouge-29.vercel.app/">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
          </a>
        </div>
        <div className="bg-[#202121] text-gray-300 p-5 rounded-b-md w-full h-[250px]">
          <h3 className="text-lg font-bold mb-2">Temperature Conversion Website</h3>
          <p className="text-sm mb-2">
            Developed a dynamic temperature conversion website allowing users to convert temperatures between Celsius, Fahrenheit, and Kelvin.
          </p>
          <p className="text-sm mb-2">
            <strong>Tools Used:</strong> HTML, CSS, JavaScript.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  
  );
};

export default Projects;
