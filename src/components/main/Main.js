/** @format */

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { pink } from '@mui/material/colors';
import "./main.css";
// import Showdata from '../../components/showData/Showdata'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Main = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
const [form, setForm] = useState({})
  const [data, setData] = useState([]);
  const handlebtn = () => {
    setData([...data,form ]);     //{ name, email }
    setForm(form)
    // setName("");
    // setEmail("");
  };
  const removeItem=(index)=>{
let arr=data;
arr.splice(index,1)
setData([...arr])
  }
  return (
    <div>
      <div className="main">
        <Stack spacing={2} direction="row">
          <TextField
            value={form.name}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => {
              setForm({...form, name:e.target.value});
            }}
          />
          <TextField
            value={form.email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setForm({...form, email:e.target.value});
            }}
          />
          <Button variant="contained" color="success" onClick={handlebtn}>
            <AddIcon />
          </Button>
        </Stack>
        </div>
       <div className='data'>
        <div className="showData">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>
          </div>
      {data.map((ele,index)=>{
        return(
            <div className='data'>
         <div className="showData">
          <h3>{ele.name}</h3>
          <h3>{ele.email}</h3>
          <h3><DeleteOutlineOutlinedIcon sx={{ color: pink[500] }} onClick={()=>{removeItem(index)}} style={{cursor:'pointer'}}/></h3>
      </div>
    </div>  
 
        )
      })
      }
      </div>
    </div>
  );
};

export default Main;
