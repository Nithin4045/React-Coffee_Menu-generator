import React, { useEffect, useState } from 'react'


function Menudata() {

    const [data,setdata]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3007/ImageUpload",{method:"get"})
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            alert("got api")
            setdata(resp)
        }).catch(()=>{
            alert("api fail")
        })
    },[])


  return (
    <div>

<div className='container w-auto p-3 h-auto inline-block'>
<div className='card'>
    <div className='card-title text-center'><b><h2>Menu-List</h2></b></div>

    <div className='card-body'>

    <table class="table">
  <thead>
    <tr>
    <th scope="col">ID</th>
      <th scope="col">Coffee-Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item)=>(
        <tr>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.price}</td>

        </tr>
    ))}
  </tbody>
</table>

    </div>
</div>
</div>

    </div>
  )
}

export default Menudata