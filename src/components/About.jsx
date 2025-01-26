import React from 'react'
import about from '../assests/about.jpg'

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12 flex flex-col justify-center items-center " id="about">

        <div className='mt-4 md:mt-0 text-left flex'>
            <div className="my-auto mx-6">
                <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
                <p className='text-base lg:text-lg'>
                Dedicated and results-driven aspiring Full-Stack Developer with a strong passion for continuous learning and
                mastering new technologies. Proficient in front-end development, with hands-on experience in building respon
                sive and user-centric interfaces using HTML, CSS, JavaScript, and modern frameworks like React. Adept at
                translating complex requirements into elegant, scalable solutions. Currently advancing expertise in back-end de
                velopment, database management, and API integration to deliver end-to-end software solutions. Committed to
                leveraging technical knowledge and problem-solving skills to contribute to innovative projects and drive impactful
                results in dynamic, fast-paced environments
                </p>
            </div>
        </div>
        <img className='w-1/2 h-1/2 rounded-3xl py-8 md:py-0' src={about} width={300} height={300}/>
    </div>
  )
}

export default About