import React,{useState, useEffect} from 'react'

const Effect1 = () => {
    
const [data, setData] = useState(15)
useEffect(() => {
async function getData() {
    const get = await fetch(`https://dummyjson.com/users`)
    const res=await get.json();
    setData(res)
    console.log(res);
}
getData()
}, [])
  return (
    <div className='main'>
{data.map((ele,index)=>{
    return <div>
        <h3>ele.users.id</h3>
    </div>
  })
}
    </div>
  )
}

export default Effect1