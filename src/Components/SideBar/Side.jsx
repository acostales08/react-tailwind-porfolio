import React from 'react'
import { Card } from '@mui/material'
import { PiGithubLogoFill } from 'react-icons/pi'
import { ImFacebook } from 'react-icons/im'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'

const ControlledSideBar = () => {
  return (
    <Card style={{
        width: "360px",
        margin:"10px",
        padding: "10px",
        height: "100vh",
        borderRadius: "15px"
    }}
     children={
        <div className='h-screen'>
            <div className="h-48 w-full flex justify-center items-center ">
                <div className=" w-36 h-36 rounded-full shadow-md"></div>                
            </div>
            <div className="w-full  text-center text-[#91979A]">
                <h3 className=" text-2xl ">Arnel B. Costales</h3>
                <h3 className=" text-3xl ">Frontend Developer</h3>
            </div>
            <div className="w-full flex gap-3 justify-center items-center text-[#91979A] p-5">
                <div className=" w-11 h-11 rounded-full shadow-lg cursor-pointer flex justify-center items-center hover:bg-[#f7f5f5] hover:shadow-inner ">
                    <PiGithubLogoFill size={25}/>
                </div>
                <div className=" w-11 h-11 rounded-full shadow-lg cursor-pointer flex justify-center items-center hover:bg-[#f7f5f5] hover:shadow-inner">
                    <ImFacebook size={25}/>
                </div>
                <div className=" w-11 h-11 rounded-full shadow-lg cursor-pointer flex justify-center items-center hover:bg-[#f7f5f5] hover:shadow-inner">
                    <FaLinkedinIn size={25}/>
                </div>
                <div className=" w-11 h-11 rounded-full shadow-lg cursor-pointer flex justify-center items-center hover:bg-[#f7f5f5] hover:shadow-inner">
                    <SiGmail size={25}/>
                </div>
            </div>
            <div className=" h-auto bg-[#F8F8F8] flex flex-col justify-between rounded-[15px] text-[#91979A]">
                <div className=" h-[15%] flex justify-center items-center mt-10">
                    <h3 className="text-3xl font-bold mb-6">ABOUT ME</h3>
                </div>
                <div className=" h-[60%]  flex items-center text-center m-4">
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iure deserunt ducimus delectus, soluta voluptatum alias, nemo eius vel dolor optio cumque esse laudantium ad earum sed, voluptatem expedita consequuntur beatae reiciendis voluptatibus cum! Aliquam nobis cum nesciunt, quasi eaque inventore deleniti laudantium facere. Nostrum aliquid soluta ea sint autem?</p>
                </div>
                <div className=" h-[30%] p-4 text-[14px]">
                    <div className="flex gap-2 pb-2">
                        <SiGmail size={15}/>
                        <p className="">costalesarnel08@gmail.com</p>
                    </div>
                    <div className="flex gap-2 pb-2">
                    <ImFacebook size={15} className=''/>
                    <p className="">arnel_costales08@yah00.com</p>
                    </div>
                    <div className="flex gap-2 pb-2">
                    <BsFillTelephoneFill size={15}/>
                    <p className="">09678333488</p>
                    </div>
                    <div className="flex gap-2 pb-2">
                    <FaLocationDot size={15}/>
                    <p className="">Blk 20 lot 18 Pandi Heights Cacarong Matanda Pandi Bulacan</p>
                    </div>
                </div>
            </div>    

        </div>

   
     }
    />

  )
}

export default ControlledSideBar