import React from 'react'

const Navbar = () => {
  return (
    <div className=' h-16 w-full flex justify-center items-center'>
        <div className="bg-white font-sans h-12 w-[70%] rounded-full flex justify-between items-center px-10 opacity-70 mt-5">
            <h2 className='text-2xl font-bold '>A<span className='text-cyan-300'>Costales</span></h2>
            <ul className='flex gap-4 text-1xl font-bold'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
            <div className="border border-black h-6 w-12 rounded-full bg-slate-600 cursor-pointer">
                <div className="border border-black h-full w-6 rounded-full bg-white float-right"></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar