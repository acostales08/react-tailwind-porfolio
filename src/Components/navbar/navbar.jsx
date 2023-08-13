import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const links = [
    {
       id: 1,
       link: 'Home'
    },
    {
       id: 2,
       link: 'About'
   },
   {
       id: 3,
       link: 'Skills'
    },
    {
       id: 4,
       link: 'Project'
    },
    {
       id: 5,
       link: 'Contact'
    },

  ]
  return (
    <div className="border border-black">
      <nav className="flex justify-between items-center h-16 w-full px-12  text-1xl font-bold">
        <h2 className="text-2xl">ACostales</h2>
        <ul className="hidden lg:flex  gap-4 cursor-pointer" >
          {links.map(({index, link}) => (
            <li key={index} className=" hover:scale-110 duration-100">{link}</li>  
          ))}    
        </ul>         
        <div onClick={() => setOpen(!open)} className="cursor-pointer z-10 text-gray-600 md:hidden">
          {open ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
        {open && (
          <ul className='flex flex-col justify-center items-center top-0 left-0 h-screen w-full absolute bg-white'>
            {links.map(({index, link}) => (
              <li key={index} className='cursor-pointer hover:scale-110 duration-100 text-2xl'>{link}</li>              
            ))}

          </ul>
        )}
      </nav>
    </div>
  )
}

export default Navbar