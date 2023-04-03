import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import '../main/main.css'
import { pink } from '@mui/material/colors';
const Showdata = ({name,email, index}) => {
    const handleDel=(data)=>{

}
   
  return (
    <div className='data'>
         <div className="showData">
          <h3>{name}</h3>
          <h3>{email}</h3>
          <h3><DeleteOutlineOutlinedIcon sx={{ color: pink[500] }} onClick={handleDel}/></h3>
      </div>
    </div>
  )
}

export default Showdata