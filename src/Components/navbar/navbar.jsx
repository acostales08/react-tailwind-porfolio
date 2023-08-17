import React from 'react' 
import BasicCard from '../Cards/Card'

const ControlledNavBar = () => {
  return (
    <BasicCard style={{
      margin: "15px",
      padding: "10px 25px",
      borderRadius: "15px"
    }}
      children={
        <div className=' w-auto  flex justify-between items-center text-[#91979A] font-semibold'>
          <h3 className="">Download CV</h3>
          <ul className="flex gap-2">
            <li className="cursor-pointer px-2 rounded-full hover:shadow-inner hover:bg-[#f7f5f5]">Skill</li>
            <li className="cursor-pointer px-2 rounded-full hover:shadow-inner hover:bg-[#f7f5f5]">Project</li>
            <li className="cursor-pointer px-2 rounded-full hover:shadow-inner hover:bg-[#f7f5f5]">Contact</li>
          </ul>        

        </div>        
      }
    
    />

  )
}

export default ControlledNavBar