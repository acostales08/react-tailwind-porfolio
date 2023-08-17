import React from 'react'
import ControlledNavBar from '../navbar/navbar'
import ControlledSideBar from '../SideBar/Side'
import { Card } from '@mui/material'

const ControlledhomeLayout = () => {
  return (
    <div className='flex'>
        <ControlledSideBar/>
        <Card style={{
            width: "100%",
            margin: "10px",
            borderRadius: "15px"
        }}
        children={
            <>
                <ControlledNavBar/>
            </>
        }
        />
                        
        
  

    </div>
  )
}

export default ControlledhomeLayout