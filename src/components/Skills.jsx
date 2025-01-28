import React from 'react'
import html from '../assests/html.png'
import css from '../assests/css.png'
import javascript from '../assests/javascript.png'
import tailwind from '../assests/tailwind.png'
import react from '../assests/react.png'
import daisyui from '../assests/daisyui.png'

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 md:h-[500px] max-w-[1200px] mx-auto grid grid-cols-6
    place-items-center md:flex md:justify-between md:items-center'>

        <h2 className='text-orange-500 text-2xl md:text-4xl font-bold m-4'>
            My <br/>Tech<br/>Stack
        </h2>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={html} alt="" width={40} height={100}/>
            <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={css} alt="" width={40} height={100}/>
            <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={javascript} alt="" width={40} height={100}/>
            <p className='mt-2'>JAVASCRIPT</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={tailwind} alt="" width={40} height={100}/>
            <p className='mt-2'>TAILWIND</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={react} alt="" width={40} height={100}/>
            <p className='mt-2'>REACT</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={daisyui} alt="" width={40} height={100}/>
            <p className='mt-2'>DAISYUI</p>
        </div>
    </div>
  )
}

export default Skills