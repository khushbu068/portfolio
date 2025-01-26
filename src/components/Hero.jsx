import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import heroimage from '../assests/profile2.png'
 
const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black relative'>
    
        <div className='col-span-1 my-auto mx-auto w-[200px] h-auto lg:w-[400px] relative z-10'>
            <img src={heroimage} alt='hero image' className="object-cover w-full h-full"/>
        </div>

        <div className='col-span-2 px-5 my-auto relative z-20'>
            
            <h1 className='text-4xl text-white sm:text-5xl lg:text-8xl font-extrabold'>
            <span className='primary-color'>
                I'm a
            </span><br/>
            <TypeAnimation
             sequence={[
                "Student",
                1000,
                "FrontEnd Dev",
                1000,
                "Webdesigner",
                1000,
             ]}
             wrapper="span"
             speed={50}
             repeat={Infinity}
            />
            </h1>
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is Khushbu Chacholiya and I am currently pursuing my B.Tech in Computer Science and Engineering from Mits,Gwalior. I am passionate about creating beautiful and responsive websites.
            </p>

            <div className='my-8'>
                <a href='my_resume.pdf' className="px-6 py-3 w-full rounded-xl mr-4 
                bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                 Download CV
                </a>
                <a href='#contact' className="px-6 py-3 w-full rounded-xl mr-4
                    border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500
                    text-white hover:border-none">
                    Contact Me
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero;
